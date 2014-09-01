function Demo03_Self_OnShow(e) {
    Pages.Demo03.cntMain.contTitle.lblTitle.text = titleHeader;
}
function Demo03_Self_OnKeyPress(e){
        if (e.keyCode === 4) {
        Pages.back();
    }
}
function Demo03_tbServerDateTime_OnPressed(e){
    ServerTime();
}