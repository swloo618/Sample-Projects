function pgInfo_conBack_OnTouchEnded(e){
    Pages.back();
}
function pgInfo_Self_OnKeyPress(e){
     if(Device.deviceOS == "Android"){
        if(e.keyCode==4)
        {
            Pages.back();
        }
    }
}
function pgInfo_Self_OnShow(e){
    Pages.pgInfo.ScrollViewInfo.scrollY = 0;
    if(Device.deviceOS == "Android"){
        Pages.pgInfo.conHeader.conBack.visible = false;
    }
    this.navigationItem.title = "Info";
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