/*
    READ ME FIRST!
This demo is porting of the Javascript SOAP library from HTML Web to
Smartface.
Original code of this library can be found here:
http://javascriptsoapclient.codeplex.com/
* XMLHttpRequest.js is a wrapper of Web XMLHttpRequest for Smartface
* SOAPClient.js is untouched library obdtained from this library.
Use both of those two libraries in your project to work with Dynamic SOAP.
* Sample.js is the ported Sample in Web example.
In order to work with this demo, please first:
1) Setup your IIS to host the web service in given library URL. You may need
to configure your IIS, and firewall.
2) In Sample.js URL of the service WSDL is defined.It can be also changed on
run-time pressing the URL button on NavigationBar or Menu key on Android.
The running app not having this URL configured and IIS is not hosting the
service will NOT WORK!
*/
function pgMain_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Application.exit();
    } else if (e.keyCode === 82) {
        showURLPick(e);
    }
}
function pgMain_Self_OnShow() {
    var title = "JavaScript SOAP Client - DEMO";
    if (Device.deviceOS === "Android") {
        this.actionBar.visible = true;
        this.actionBar.backgroundColor = "#dddddd";
        this.actionBar.titleView = {
            type : SMF.UI.TitleViewType.text,
            text : title,
            textSize : 14,
            left : 50,
            alignment : SMF.UI.Alignment.center
        };
        var item1 = new SMF.UI.Android.MenuItem({
                id : "1",
                title : "URL",
                showAsAction : SMF.UI.Android.ShowAsAction.always,
                onSelected : showURLPick,
                visible : true
            });
        this.actionBar.menuItems = [item1];
    } else {
        var item2 = new SMF.UI.iOS.BarButtonItem({
                title : "URL",
                onSelected : showURLPick
            });
        this.navigationItem.rightBarButtonItems = [item2];
        SMF.UI.iOS.NavigationBar.visible = true;
        this.navigationItem.title = title;
    }
}
function showURLPick(e) {
    Dialogs.dlgUrlPick.cntURL.edtURL.text = url;
    Dialogs.dlgUrlPick.show();
}
function pgMain_RepeatBox1_OnSelectedItem(e) {
    titleHeader = Data.dSetTitle.title;
    var targetPage = Pages["Demo" + (e.rowIndex + 1).pad(2)];
    if (Device.deviceOS === "Android") {
        actionBar(targetPage);
    } else {
        navigation(targetPage);
    }
    targetPage.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false);
}