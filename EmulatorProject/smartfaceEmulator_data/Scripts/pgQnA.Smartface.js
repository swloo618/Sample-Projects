function pgQnA_conBack_OnTouchEnded(e){
    Pages.back();
}
function pgQnA_Self_OnKeyPress(e){
    if(Device.deviceOS == "Android"){
        if(e.keyCode==4)
        {
            Pages.back();
        }
    }
}
function pgQnA_Self_OnShow(e){
    webviewFlag = "1";
    if(Device.deviceOS == "Android"){
        Pages.pgQnA.conHeader.conBack.visible = false;
    }
    this.navigationItem.title = "Q & A";
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
        Data.DS_QnA.seek(e.rowIndex);
        Data.DS_QnA.deleteRow();
        Data.DS_QnA.commit();
        Data.DS_QnA.refresh();
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
    Data.DS_QnA.seek(e.rowIndex);
        Social.share(" Smartface Developer Center", "Smartface App Studio\nQuestions and Answers\n\n"
        + Data.DS_QnA.qnaRow + "\n\n" + Data.DS_QnA.qnaRowLink,
        function(){alert("success");},function(){alert("failure");});
    }
    });
    var items = [itemDelete,itemShare];
    Pages.pgQnA.conQnA.RepeatBox1.setSwipeItems(items);
}
function pgQnA_RepeatBox1_OnSelectedItem(e){
    Data.DS_QnA.seek(e.rowIndex);
    Pages.pgWebView.show(2, 3, 0, false, false);
}