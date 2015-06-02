function pgProductDetails_Self_OnShow(e) {
    header.init(this);
    header.setTitle(titleText);
    header.setRightItem("     ");
    header.setLeftItem();
    this.statusBar.background = "#F7F7F7";
    this.statusBar.style = SMF.UI.StatusBarStyle.default;
    this.add(cntSupplierProductDetail);
}
function pgProductDetails_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Pages.back();
    }
}