/*
First page of application.
Majority of the code resides in global.
 */
//Android specific code
//Exits application on main page when pressed back button.
function Page1_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Application.exit();
    }
}
//Anrdoid specific code
//Sets ActionBar for android.
function setActionBarMain() {
    if (!isAndroid || isHeaderBarSetMain) {
        return; //exits the function if it is not android or the header is set already.
    }
    this.actionBar.displayShowHomeEnabled = true;
    var item1 = new SMF.UI.Android.MenuItem({
            icon : "ok1_and.png",
            showAsAction : SMF.UI.Android.ShowAsAction.always,
            onSelected : function (e) {
                Social.share("Avea ile artık NBA de her zaman seninle!", "NBA dünyasını, Türkiye Resmi Ortağı Avea ile takip edin! http://goo.gl/z113i", function () {}, function () {});
            }
        });
    var actionbarItems = [item1];
    this.actionBar.menuItems = actionbarItems;
    this.actionBar.icon = "logo.png";
    Pages.Page1.actionBar.displayShowTitleEnabled = false;
    Pages.Page1.actionBar.displayHomeAsUpEnabled = true;
    this.actionBar.backgroundColor = "red";
    Pages.Page1.actionBar.visible = true;
    Pages.Page1.actionBar.onHomeIconItemSelected = logoPressed;
    isHeaderBarSet = true;
}
function setNavigationBarMain() {
    if (isAndroid || isHeaderBarSetMain) {
        return; //exits the function if it is android or the header is set already.
    }
    SMF.UI.iOS.NavigationBar.visible = true;
    SMF.UI.iOS.NavigationBar.backgroundImage = "navbar.png";
    logoItem = new SMF.UI.iOS.BarButtonItem({
            image : "logoios.png",
            onSelected : logoPressed
        });
    shareItem = new SMF.UI.iOS.BarButtonItem({
            image : "ok1.png",
            onSelected : function (e) {
                Social.share("Avea ile artık NBA de her zaman seninle!", "NBA dünyasını, Türkiye Resmi Ortağı Avea ile takip edin! http://goo.gl/z113i", function () {}, function () {});
            }
        });
    var leftItem1 = [logoItem];
    var rightItem1 = [shareItem];
    this.navigationItem.leftBarButtonItems = leftItem1;
    this.navigationItem.rightBarButtonItems = rightItem1;
    isHeaderBarSet = true;
}
function Page1_Self_OnShow() {
    //ActionBar and NavigationBar has to be set as the page becomes visible for the first time.
    //call method is used for setting the "this" keyword as Page1.
    setActionBarMain.call(Pages.Page1);
    setNavigationBarMain.call(Pages.Page1)
}