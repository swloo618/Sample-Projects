function pgTipsTricks_Self_OnShow(e){
    webviewFlag = "2";
    this.navigationItem.title = "Tips & Tricks";
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
        Data.DS_TipsTricks.seek(e.rowIndex);
        Data.DS_TipsTricks.deleteRow();
        Data.DS_TipsTricks.commit();
        Data.DS_TipsTricks.refresh();
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
    Data.DS_TipsTricks.seek(e.rowIndex);
        Social.share(" Smartface Developer Center", "Smartface App Studio\nTips and Tricks\n\n"
        + Data.DS_TipsTricks.tipsntricksRow + "\n\n" + Data.DS_TipsTricks.tipsntricksRowLink,
        function(){alert("success");},function(){alert("failure");});
    }
    });
    var items = [itemDelete,itemShare];
    Pages.pgTipsTricks.conTipsTricks.RepeatBox1.setSwipeItems(items);
}
function pgTipsTricks_RepeatBox1_OnSelectedItem(e){
    Data.DS_TipsTricks.seek(e.rowIndex);
    Pages.pgWebView.show(2, 3, 0, false, false);
}