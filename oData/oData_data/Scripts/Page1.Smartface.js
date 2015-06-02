/**
 * Creates action(s) that are run when the user press the key of the devices.
 * @param {KeyCodeEventArguments} e Uses to for key code argument. It returns e.keyCode parameter.
 * @this SMF.UI.Page
 */
function Page1_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Application.exit();
    }
}
/**
 * Creates action(s) that are run when the page is appeared
 * @param {EventArguments} e Returns some attributes about the specified functions
 * @this SMF.UI.Page
 */
function Page1_Self_OnShow() {
    //Comment following block for removing navigationbar/actionbar sample
    //Copy this code block to every page onShow
    header.init(this);
    header.setTitle("Products");
    setRightItem("Refresh");
    /**/
    this.statusBar.background = "#F7F7F7";
    this.statusBar.style = SMF.UI.StatusBarStyle.default;
        if (!pageBack) {
            Dialogs.Dialoading.show();
            getProducts.run(true);
        }
        this.add(searchProducts);
        this.add(repeatBox);
        if (Device.deviceOS == "Android") {
            this.add(addButton);
        }
}
function setRightItem() {
    function onAction(e) {
        Pages.pgAdd.show(SMF.UI.MotionEase.none, SMF.UI.TransitionEffect.downToUp, SMF.UI.TransitionEffectType.push, false, true);
    }
    var key = {
        id : 0,
        image : "plus.png",
        onSelected : onAction
    };
    if (Device.deviceOS != "iOS") {
        key.showAsAction = SMF.UI.Android.ShowAsAction.always; //Always place this item in the Action Bar. Avoid using this unless it's critical that the item always appear in the action bar. Setting multiple items to always appear as action items can result in them overlapping with other UI in the action bar.
        var item = new SMF.UI.Android.MenuItem(key);
        Pages.Page1.actionBar.menuItems = [item];
    } else if (Device.deviceOS == "iOS") {
        var item = new SMF.UI.iOS.BarButtonItem(key);
        Pages.Page1.navigationItem.rightBarButtonItems = [item];
    }
}