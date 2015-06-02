function pgProduct_Self_OnShow(e){
    header.init(this);
    header.setTitle("Product");
    header.setLeftItem();
    this.statusBar.background = "#F7F7F7";
    this.statusBar.style = SMF.UI.StatusBarStyle.default;
    this.add(cntMainProductDetail);
    pageBack = true;
}
function pgProduct_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Pages.back();
    }
}