function Page2_btnBack_OnPressed(e){
    Pages.back();
}
function Page2_Self_OnShow(e){
    //if the device is iOS , it sets the navigationBar behaviours.
if(Device.deviceOS == 'iOS'){
SMF.UI.iOS.NavigationBar.backgroundImage ="navBar.png";
Pages.Page2.navigationItem.titleView = {
            type:SMF.UI.TitleViewType.image,
            frame:[0,0,44,44],// left, top, width, height
            image:"headerLogo.png"
      }
var barButtonImage = new SMF.UI.iOS.BarButtonItem({
    image:"share.png",
    onSelected:function(e){
    Social.share(Pages.Page2.Container1.CopyofLabel1.text, Pages.Page2.Container1.Label1.text,function(){},function(){});
    }
});
var barButtonImage2 = new SMF.UI.iOS.BarButtonItem({
    image:"back.png",
    onSelected:function(e){
    Pages.back();
    }
});
this.navigationItem.rightBarButtonItems = [barButtonImage];
this.navigationItem.leftBarButtonItems = [barButtonImage2];
}
    //if the device is Android , it sets the actionBar behaviours.
    if(Device.deviceOS != "iOS")
{
          this.actionBar.visible = true;
          this.actionBar.backgroundImage = "navBar.png";
          this.actionBar.titleView = {
          type:SMF.UI.TitleViewType.image,
          alignment:SMF.UI.Alignment.center,
          image:"headerLogo.png",
}
var item1 = new SMF.UI.Android.MenuItem({
            id : "1",
            icon : "share_.png",
            showAsAction : SMF.UI.Android.ShowAsAction.always, //Always place this item in the Action Bar. Avoid using this unless it's critical that the item always appear in the action bar. Setting multiple items to always appear as action items can result in them overlapping with other UI in the action bar.
            onSelected:function(e){
               Social.share(Pages.Page2.Container1.CopyofLabel1.text, Pages.Page2.Container1.Label1.text,function(){},function(){});
          }
        });
this.actionBar.menuItems = [item1];
// Closes the btnBack visiblity for iOS Devices.
 Pages.Page2.cntHeader.btnBack.visible = false;
}
}
function Page2_Self_OnKeyPress(e){
// Back key of Android to goes previous page.
    if(e.keyCode == 4 )
{
 Pages.back();
}
}
function Page2_btnShare_OnPressed(e){
// Opens the native share window for both iOS and Android Devices.
    Social.share(Pages.Page2.Container1.CopyofLabel1.text, Pages.Page2.Container1.Label1.text,function(){},function(){});
}