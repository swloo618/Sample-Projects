/**
 * Triggered when application is started.
 * @param {EventArguments} e Returns some attributes about the specified functions
 * @this Application
 */
var globalDP;
 
function Global_Events_OnStart(e) {
    changeLang(Device.language, true);
    include("BC.js"); //included for future BC support. Removing is not advised.
    include("ViewProduct.js");
    include("ViewProductDetails.js");
    include("View.js");
    include("Services.js");

    //      Comment following block for navigationbar/actionbar sample. Read the JS code file for usage.
    //      Also there is a part of code block in Page1, which should be copied to every page for HeaderBar usage
    load("HeaderBar.js");

    header = new HeaderBar();
    
    if(Device.deviceOS == "Android"){
        globalDP = 50;
    }else{
        globalDP = 10;
    }

    //      Uncomment following block for menu sample. Read the JS code file for usage.
    /*
    load("Menu.js");
     */

}
function Global_Events_OnError(e) {
    switch (e.type) {
    case "Server Error":
    case "Size Overflow":
        alert(lang.networkError);
        break;
    default:
        SES.Analytics.eventLog("error", JSON.stringify(e));
        //change the following code for desired generic error messsage
        alert({
            title : lang.applicationError,
            message : e.message + "\n\n*" + e.sourceURL + "\n*" + e.line + "\n*" + e.stack
        });
        break;
    }
}

var titleText = "";
var checkDiscont = false;
var supplier = ["Exotic Liquids", "Tokyo Traders"];
var supplierDetails = [{
        "Street" : "NE 228th",
        "City" : "Sammamish",
        "ZipCode" : "98074",
        "Country" : "USA",
        "State" : "WA"
    }, {
        "Street" : "NE 40th",
        "City" : "Redmond",
        "ZipCode" : "98052",
        "Country" : "USA",
        "State" : "WA"
    }
];
var category = ["Food", "Beverages", "Electronics"];
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var pickerContent = [];
var productsData = [];
var tempDataSource = [];
var selectedIndex = 0;
var pickerBtnIndex = 0;
var productIndex = 0;
var pageBack = false;
/******SERVICE POST PARAMETERS**********/
var id = 0;
var pName = null;
var pDescription = null;
var pDisDate = null;
var pRating = 0;
var pPrice = null;
var pRelDate;
var catId = 0;
var catName = null;
var supId = 0;
var supName = null;
var supStreet = null;
var supCity = null;
var supState = null;
var supZipCode = null;
var supCountry = null;
/*******SERVICE GET PARAMETERS**********/
var getCatId = 0;
var getSupId = 0;
/*****Check Validation******/
function checkInputs() {
    if (cnt.controls[1].text == "") {
        alert("Please fill product name");
        return false;
    } else if (cnt.controls[3].text == "") {
        alert("Please fill product description");
        return false;
    } else if (cnt.controls[5].text == "Release Date") {
        alert("Please select release date");
        return false;
    } else if (cnt.controls[7].text == "") {
        alert("Please enter price");
        return false;
    } else if (pRating == 0) {
        alert("Please vote for rating");
        return false;
    } else if (cnt3.controls[1].text == "Supplier") {
        alert("Please select supplier");
        return false;
    } else if (cnt3.controls[3].text == "Category") {
        alert("Please select category");
        return false;
    } else {
        return true;
    }
}

function searchFor(toSearch, objects) {
    var results = [];
    toSearch = trimString(toSearch); // trim it
    for (var i = 0; i < objects.length; i++) {
        for (var key in objects[i]) {
            if (objects[i][key].indexOf(toSearch) != -1) {
                if (!itemExists(results, objects[i]))
                    results.push(objects[i]);
            }
        }
    }
    return results;
}

function trimString(s) {
    var l = 0,
    r = s.length - 1;
    while (l < s.length && s[l] == ' ')
        l++;
    while (r > l && s[r] == ' ')
        r -= 1;
    return s.substring(l, r + 1);
}

function itemExists(haystack, needle) {
    for (var i = 0; i < haystack.length; i++)
        if (compareObjects(haystack[i], needle))
            return true;
    return false;
}

function compareObjects(o1, o2) {
    var k = '';
    for (k in o1)
        if (o1[k] != o2[k])
            return false;
    for (k in o2)
        if (o1[k] != o2[k])
            return false;
    return true;
}

function searchFor2(subject, objects) {

    var matches = [];
    var regexp = new RegExp(subject, 'g');

    for (var i = 0; i < objects.length; i++) {
        for (key in objects[i]) {
            if (objects[i][key].match(regexp))
                matches.push(objects[i][key]);
        }
    }
    return matches;
}

function searchFor3(s, arr){
    var matches = [];

    for (var i = arr.length; i--; ){
        for (key in arr[i]){
            if( arr[i].hasOwnProperty(key) && arr[i][key].indexOf(s) > -1 )
                matches.push(arr[i][key]);
        }
    }
    return matches;
};