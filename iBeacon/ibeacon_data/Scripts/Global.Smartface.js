function Global_Events_OnStart(e) {
    changeLang(Device.language, true);
//      Uncomment following block for navigationbar/actionbar sample. Read the JS code file for usage.
//        Also uncomment related block in Page1
/*
        load("HeaderBar.js");
        header = new HeaderBar();
/**/
//      Uncomment following block for menu sample. Read the JS code file for usage.
/*
        load("Menu.js");
/**/
}
function Global_Events_OnError(e) {
    switch (e.type) {
    case "Server Error":
    case "Size Overflow":
        alert(lang.networkError);
        break;
    default:
        SES.Analytics.eventLog("error", JSON.stringify(e));
        alert(JSON.stringify(e));
        break;
    }
}