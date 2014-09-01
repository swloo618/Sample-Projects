Number.prototype.pad = function (size) {
    var s = String(this);
    if (typeof(size) !== "number") {
        size = 2;
    }
    while (s.length < size) {
        s = "0" + s;
    }
    return s;
};
function Global_Events_OnStart(e) {
    changeLang(Device.language, true);
}
var titleHeader;
function actionBar(page) {
    page.actionBar.visible = true;
    page.actionBar.backgroundColor = "gray";
    var titleView = {
        type : SMF.UI.TitleViewType.text,
        text : titleHeader,
        textSize : 18,
        textColor : "black",
        alignment : SMF.UI.Alignment.center,
        left : 0,
        top : 10
    };
    page.actionBar.titleView = titleView;
    page.actionBar.onHomeIconItemSelected = function (e) {
        Pages.back();
    };
    this.actionBar.icon = "back.png";
    this.actionBar.displayShowTitleEnabled = true;
    this.actionBar.displayShowHomeEnabled = true;
    this.actionBar.displayHomeAsUpEnabled = false;
}
function navigation(page) {
    SMF.UI.iOS.NavigationBar.visible = true;
    page.navigationItem.titleView = {
        type : SMF.UI.TitleViewType.text,
        text : titleHeader,
        textColor : "black",
        alignment : SMF.UI.TextAlignment.center
    };
    var backItem = new SMF.UI.iOS.BarButtonItem({
            image : "back.png",
            onSelected : function (e) {
                Pages.back();
            }
        });
    var leftItems = [backItem];
    page.navigationItem.leftBarButtonItems = leftItems;
}
function Global_Events_OnError(e) {
    switch (e.type) {
    case "Server Error":
    case "Size Overflow":
        alert(lang.networkError);
        break;
    default:
        var ex = JSON.parse(JSON.stringify(e));
        ex.message = e.message;
        alert(JSON.stringify(ex));
        break;
    }
}
include("XMLHttpRequest.js");
include("SOAPClient.js");
include("Sample.js");