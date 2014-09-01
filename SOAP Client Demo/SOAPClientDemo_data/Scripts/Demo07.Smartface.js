function Demo07_Self_OnShow(e) {
    Pages.Demo07.cntMain.contTitle.lblTitle.text = titleHeader;
}
function Demo07_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Pages.back();
    }
}
function Demo07_tbStart_OnPressed(e){
    GetUser();
}