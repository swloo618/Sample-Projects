function pgAdd_Self_OnShow(e) {
    header.init(this);
    header.setTitle("Add Product");
    header.setLeftItem();
    this.statusBar.background = "#F7F7F7";
    this.statusBar.style = SMF.UI.StatusBarStyle.default;
        pageBack = true;
        var key = {
            id : 0,
            icon : "save.png",
            onSelected : onAction
        };
        function onAction(e) {
            id = id + 1;
            pName = cnt.controls[1].text;
            pDescription = cnt.controls[3].text;
            pPrice = cnt.controls[7].text;
            pPrice = pPrice.replace(",", ".");
            if (checkInputs()) {
                pageBack = false;
                addProducts.requestString = JSON.stringify(addProductRequestString());
                Dialogs.Dialoading.show();
                addProducts.run(true);
            }
        }
        if (Device.deviceOS == "Android") {
            key.showAsAction = SMF.UI.Android.ShowAsAction.always; //Always place this item in the Action Bar. Avoid using this unless it's critical that the item always appear in the action bar. Setting multiple items to always appear as action items can result in them overlapping with other UI in the action bar.
            var item = new SMF.UI.Android.MenuItem(key);
            this.actionBar.menuItems = [item];
        } else {
            key = {
                id : 0,
                title : "Done",
                onSelected : onAction
            };
            var item = new SMF.UI.iOS.BarButtonItem(key);
            this.navigationItem.rightBarButtonItems = [item];
            var leftItem = new SMF.UI.iOS.BarButtonItem({
                    title : "Cancel",
                    onSelected : function () {
                        Pages.back();
                    }
                });
            this.navigationItem.leftBarButtonItems = [leftItem];
        }
        this.add(sv);
}
function pgAdd_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Pages.back();
    }
}