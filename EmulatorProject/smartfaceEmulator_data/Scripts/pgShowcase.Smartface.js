function pgShowcase_conBack_OnTouchEnded(e){
    Pages.back();
}
function pgShowcase_Self_OnKeyPress(e){
    if(Device.deviceOS == "Android"){
        if(e.keyCode==4)
        {
            Pages.back();
        }
    }
}
function pgShowcase_Self_OnShow(e){
    Pages.pgShowcase.ActivityIndicator1.visible = true;
    if(Device.deviceOS == "Android"){
        Pages.pgShowcase.conHeader.conBack.visible = false;
    }
    this.navigationItem.title = "Showcase";
    var barBackImg = new SMF.UI.iOS.BarButtonItem({
        image:"backarrow.png",
        backgroundColor: "#F2F2F2",
        onSelected:function(e){
            Pages.back();
        }
    });
    var barBackTxt = new SMF.UI.iOS.BarButtonItem({
        title:"Back",
        fontName:"Arial",
        tintColor:"#666666",
        fontSize:16,
        backgroundColor: "#F2F2F2",
        onSelected: function(e){
            Pages.back();
        }
    });
    var leftItems = [barBackImg, barBackTxt];
    this.navigationItem.leftBarButtonItems = leftItems;
}
function pgShowcase_WebView1_OnLoad(e){
    Pages.pgShowcase.ActivityIndicator1.visible = false;
}