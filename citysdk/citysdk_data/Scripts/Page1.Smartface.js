var apiWc = new SMF.Net.WebClient({
        httpMethod : "GET",
        onSyndicationSuccess:apiSuccess,
    });

var itemTitles = [
    "Hotels in Fatih",
    "Public transport stops in Üsküdar"
];

var itemUrls = [
    "http://apicitysdk.ibb.gov.tr/admr.istb.fatih/nodes?layer=accommodation&geom",
    "http://apicitysdk.ibb.gov.tr/admr.istb.uskudar/ptstops?geom"
];

function Page1_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Application.exit();
    }
}

function Page1_Self_OnShow() {
    //Uncomment following block for navigationbar/actionbar sample
    //Copy this code block to every page onShow
    header.init(this);
    header.setTitle("CitySDK Sample");
    //header.setRightItem("Change");
    header.setLeftItem();
    var rightItem = new SMF.UI.iOS.BarButtonItem({
            title : "Change",
            onSelected : pickMenu
        });
    this.navigationItem.rightBarButtonItems = [rightItem];
    /**/
}

function pickMenu() {
    pick(
        itemTitles,
        0,
        function (e) {
        alert(itemUrls[e.index]);
    },
        function () {},
        function () {});
}

function apiSuccess(e){
    alert(apiWc.responseText);
    try{
        var jsObj = JSON.parse(apiWc.responseText);
        if (jsObj.status = "success"){
            var results = jsObj.results;
            for (var i = 0; i < 3; i++){
                alert(results[i].name);
            }
        } else {
            showError(jsObj.message)
        }
    }catch(ex){
        showError();
    }
}

function showError(err){
    if (err){
        alert(err);
    } else {
        alert("An error occured. Please try again!");
    }
}