var rootURL = "http://services.odata.org/V2/(S(SmartfaceOData3))/OData/OData.svc/";
var parser = new DOMParser();

function parseXmlDoc(responseText) {
    var xmlDoc = parser.parseFromString(responseText);
    return xmlDoc;
}
var getProducts = new SMF.Net.WebClient({
        URL : rootURL + "Products",
        httpMethod : "GET",
        requestHeaders : ["Content-Type:application/json; charset=utf-8"],
        onSyndicationSuccess : function (e) {
            //Get some task if the syndication returns success
            var entry = parseXmlDoc(this.responseText).getElementsByTagName("entry");
            var price = parseXmlDoc(this.responseText).getElementsByTagName("Price");
            var releaseDate = parseXmlDoc(this.responseText).getElementsByTagName("ReleaseDate");
            var ID = parseXmlDoc(this.responseText).getElementsByTagName("ID");
            productsData = [];
            for (var i = 0; i < entry.length; i++) {
                var productsObj = {};
                productsObj.id = ID[i].childNodes[0].nodeValue;
                productsObj.name = entry[i].childNodes[3].childNodes[0].nodeValue;
                productsObj.description = entry[i].childNodes[5].childNodes[0].nodeValue;
                productsObj.cost = price[i].childNodes[0].nodeValue;
                productsObj.releaseDate = releaseDate[i].childNodes[0].nodeValue;
                productsData.push(productsObj);
            }
            repeatBox.dataSource = productsData;
            repeatBox.refresh();
            repeatBox.onRowRender = function (e) {
                repeatBox.controls[0].text = productsData[e.rowIndex].name;
                repeatBox.controls[1].text = productsData[e.rowIndex].cost;
            };
            id = repeatBox.count - 1;
            Dialogs.closeAll();
        },
        onServerError : function (e) {
            //Get some task if the server returns error
            Dialogs.closeAll();
        },
        responseHandling : SMF.Net.ResponseHandling.forceText,
        timeoutInterval : 120
    });

var addProducts = new SMF.Net.WebClient({
        URL : rootURL + "Products",
        httpMethod : "POST",
        requestHeaders : ["Content-Type:application/json; charset=utf-8"],
        onSyndicationSuccess : function (e) {
            alert(cnt.controls[1].text + " successfully added.");
            Dialogs.closeAll();
        },
        onServerError : function (e) {
            //Get some task if the server returns error
            alert(this.responseText);
            Dialogs.closeAll();
        },
        responseHandling : SMF.Net.ResponseHandling.forceText,
        timeoutInterval : 120
    });

var getCategoryId = new SMF.Net.WebClient({
        httpMethod : "GET",
        requestHeaders : ["Content-Type:application/json; charset=utf-8"],
        onSyndicationSuccess : function (e) {
            var catID = parseXmlDoc(this.responseText).getElementsByTagName("ID");
            getCatId = catID[0].childNodes[0].nodeValue;
            /*************************************/
            //getCategoryDetails();
            getSupplierId.URL = rootURL + "Products(" + productIndex + ")/Supplier";
            getSupplierId.run(true);
            /**********************************/
        },
        onServerError : function (e) {
            //Get some task if the server returns error
            alert(this.responseText);
            Dialogs.closeAll();
        },
        responseHandling : SMF.Net.ResponseHandling.forceText,
        timeoutInterval : 120
    });

var getSupplierId = new SMF.Net.WebClient({
        httpMethod : "GET",
        requestHeaders : ["Content-Type:application/json; charset=utf-8"],
        onSyndicationSuccess : function (e) {
            var supID = parseXmlDoc(this.responseText).getElementsByTagName("ID");
            getSupId = supID[0].childNodes[0].nodeValue;
            /*************************************/
            Pages.pgProduct.show(SMF.UI.MotionEase.none, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false);
            /*************************************/
            Dialogs.closeAll();
        },
        onServerError : function (e) {
            //Get some task if the server returns error
            alert(this.responseText);
            Dialogs.closeAll();
        },
        responseHandling : SMF.Net.ResponseHandling.forceText,
        timeoutInterval : 120
    });

function addProductRequestString() {
    var addProductRequest = {
        "ID" : id,
        "Name" : pName,
        "Description" : pDescription,
        "Rating" : pRating,
        "DiscontinuedDate" : pDisDate,
        "Price" : pPrice,
        "ReleaseDate" : pRelDate,
        "Category" : {
            "ID" : catId,
            "Name" : catName
        },
        "Supplier" : {
            "ID" : supId,
            "Name" : supName,
            "Concurrency" : 0,
            "Address" : {
                "Street" : supStreet,
                "City" : supCity,
                "State" : supState,
                "ZipCode" : supZipCode,
                "Country" : supCountry
            }
        }
    };
    return addProductRequest;
}