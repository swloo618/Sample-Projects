function pgWebView_Self_OnShow(e){
    Pages.pgWebView.ActivityIndicator1.visible = true;
    Pages.pgWebView.conWebView.WebViewGuides.visible = false;
    Pages.pgWebView.conWebView.WebViewQnA.visible = false;
    Pages.pgWebView.conWebView.WebViewTipsTricks.visible = false;
    switch(webviewFlag){
        case  "0" :
            Pages.pgWebView.conWebView.WebViewGuides.visible = true;
            this.navigationItem.title = "Guides";
            break;
        case  "1" :
            Pages.pgWebView.conWebView.WebViewQnA.visible = true;
            this.navigationItem.title = "Q & A";
            break;
        case  "2" :
            Pages.pgWebView.conWebView.WebViewTipsTricks.visible = true;
            this.navigationItem.title = "Tips & Tricks";
            break;
        default :
            Pages.back();
            break;
    }
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
function pgWebView_WebViewGuides_OnLoad(e){
    Pages.pgWebView.ActivityIndicator1.visible = false;
}
function pgWebView_WebViewQnA_OnLoad(e){
    Pages.pgWebView.ActivityIndicator1.visible = false;
}
function pgWebView_WebViewTipsTricks_OnLoad(e){
    Pages.pgWebView.ActivityIndicator1.visible = false;
}