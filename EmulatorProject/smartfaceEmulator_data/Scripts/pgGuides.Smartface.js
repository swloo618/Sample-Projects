function pgGuides_conBack_OnTouchEnded(e){
    Pages.back();
}
function pgGuides_Self_OnKeyPress(e){
    if(Device.deviceOS == "Android"){
        if(e.keyCode==4)
        {
            Pages.back();
        }
    }
}
function pgGuides_Self_OnShow(e){
    webviewFlag = "0";
    if(Device.deviceOS == "Android"){
        Pages.pgGuides.conHeader.conBack.visible = false;
    }
    this.navigationItem.title = "Guides";
    /*this.navigationItem.titleView = {
        type:SMF.UI.TitleViewType.text,
        frame:[0,0,3200,44], // left, top, width, height
        text:"Guides",
        textColor:"#F39B13",
        backgroundColor: "#F2F2F2",
        fontName: "Arial",
        fontSize: 18,
        alignment: SMF.UI.iOS.TextAlignment.center
    }*/
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
        backgroundColor: "#F2F2F2",
        fontSize:16,
        onSelected: function(e){
            Pages.back();
        }
    });
    var leftItems = [barBackImg, barBackTxt];
    this.navigationItem.leftBarButtonItems = leftItems;
    var itemDelete = new SMF.UI.RepeatboxSwipeItem({
    width: "25%",
    height: "100%",
    left: "75%",
    top: "0%",
    text:"Delete",
    fontColor:"#FFFFFF",
    pressedTextColor: "#ff0000",
    fillColor:"#F70D1A",
    onSelected:function(e){
        Data.DS_Guides.seek(e.rowIndex);
        Data.DS_Guides.deleteRow();
        Data.DS_Guides.commit();
        Data.DS_Guides.refresh();
    }
    });
    var itemShare = new SMF.UI.RepeatboxSwipeItem({
    width: "25%",
    height: "100%",
    left: "50%",
    top: "0%",
    text:"Share",
    fontColor:"#FFFFFF",
    pressedTextColor: "red",
    fillColor:"#38ACEC",
    onSelected: function(e){
    Data.DS_Guides.seek(e.rowIndex);
        Social.share(" Smartface Developer Center", "Smartface App Studio\nGuides\n\n"
        + Data.DS_Guides.guidesRow + "\n\n" + Data.DS_Guides.guidesRowLink ,
        function(){alert("success");},function(){alert("failure");});
    }
    });
    var items = [itemDelete,itemShare];
    Pages.pgGuides.conGuides.RepeatBox1.setSwipeItems(items);
}
function pgGuides_RepeatBox1_OnSelectedItem(e){
    Data.DS_Guides.seek(e.rowIndex);
    Pages.pgWebView.show(2, 3, 0, false, false);
}