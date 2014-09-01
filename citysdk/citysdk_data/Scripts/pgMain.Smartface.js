var apiWc = new SMF.Net.WebClient({
        httpMethod : "GET",
        onSyndicationSuccess : apiOnSuccess,
        onServerError : apiOnError
    });
var itemTitles = [
    "Hotels in Fatih",
    "Public transport stops in Üsküdar",
    "Pharmacies in Beyoğlu",
    "Pharmacies named ŞİFA ECZANESİ",
    "Mosques in Fatih",
    "Taxi stands in Sarıyer"
];
var baseApiUrl = "http://apicitysdk.ibb.gov.tr/";
var itemUrls = [
    "admr.istb.fatih/nodes?layer=accommodation&geom",
    "admr.istb.uskudar/ptstops?geom",
    "admr.istb.beyoglu/nodes?layer=pharmacy&geom",
    "nodes?layer=pharmacy&pharmacy::ADI=%C5%9E%C4%B0FA%20ECZANES%C4%B0&geom",
    "admr.istb.fatih/nodes?layer=religion&religion::TURU=CAM%C4%B0&per_page=50&geom",
    "admr.istb.sariyer/nodes?layer=taxi&geom"
];
var points = [];
var lastPointId = 0;
function pgMain_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Application.exit();
    }
}
function pgMain_Self_OnShow() {
    //Uncomment following block for navigationbar/actionbar sample
    //Copy this code block to every page onShow
    header.init(this);
    header.setTitle("CitySDK Sample");
    //header.setRightItem("Change");
    //header.setLeftItem();
    var itemKey = {
        title : "Change",
        onSelected : pickMenu
    };
    if (Device.deviceOS == "iOS") {
        var rightItem = new SMF.UI.iOS.BarButtonItem(itemKey);
        this.navigationItem.rightBarButtonItems = [rightItem];
    } else {
        var rightItem = new SMF.UI.Android.MenuItem(itemKey);
        this.actionBar.menuItems = [rightItem];
    }
    Pages.pgMain.MapView1.zoomLevel = 12;
    SMF.UI.StatusBar.color = "#ffffff";
    SMF.UI.StatusBar.style = SMF.UI.StatusBarStyle.default;
    /**/
}
function pickMenu() {
    pick(
        itemTitles,
        0,
        function (e) {
        runWc(itemUrls[e.index]);
    },
        function () {},
        function () {});
}
function apiOnSuccess(e) {
    try {
        var jsObj = JSON.parse(apiWc.responseText);
        if (jsObj.status = "success") {
            var results = jsObj.results;
            if (results.length == 0) {
                showError("No items!");
                return;
            }
            points = [];
            for (var i = 0; i < results.length; i++) {
                var result = results[i];
                var point = {};
                point.name = result.name;
                point.lng = parseFloat(result.geom.coordinates[0]);
                point.lat = parseFloat(result.geom.coordinates[1]);
                points.push(point);
            }
            refreshPins();
        } else {
            showError(jsObj.message)
        }
    } catch (ex) {
        showError();
    }
    Dialogs.dlgLoading.close();
}
function runWc(apiUrl) {
    Dialogs.dlgLoading.show();
    apiWc.URL = baseApiUrl + apiUrl;
    apiWc.run();
}
function addPin(id, title, lat, lng) {
    Pages.pgMain.MapView1.addPin({
        id : "" + id,
        title : title,
        subtitle : title,
        latitude : lat,
        longitude : lng,
        selectedImage : "icon_pin.png",
        unSelectedImage : "icon_pin.png",
        draggable : false,
        animate : true
    });
}
function refreshPins() {
    var totalLat = 0;
    var totalLng = 0;
    var minLat = 360;
    var maxLat = -1;
    for (var i = 0; i < lastPointId; i++) {
        Pages.pgMain.MapView1.removePin("" + i);
    }
    lastPointId = 0;
    var i;
    for (i = 0; i < points.length; i++) {
        addPin(i, points[i].name, points[i].lat, points[i].lng);
        if (minLat > points[i].lat)
            minLat = points[i].lat;
        if (maxLat < points[i].lat)
            maxLat = points[i].lat;
        totalLat += points[i].lat;
        totalLng += points[i].lng;
        lastPointId++;
    }
    Pages.pgMain.MapView1.centerLatitude = totalLat / points.length;
    Pages.pgMain.MapView1.centerLongitude = totalLng / points.length;
    Pages.pgMain.MapView1.zoomLevel = diff2zoom(maxLat - minLat);
}
function apiOnError(e) {
    showError("Server error");
    Dialogs.dlgLoading.close();
}
function showError(err) {
    if (err) {
        alert(err);
    } else {
        alert("An error occured. Please try again!");
    }
}
function diff2zoom(diff) {
    var a = parseInt(diff * 100);
    var b = Math.ceil(a / 7);
    return 13 - b;
}