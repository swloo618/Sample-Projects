function Demo05_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Pages.back();
    }
}
function Demo05_Self_OnShow(e){
    Pages.Demo05.cntMain.contTitle.lblTitle.text = titleHeader;
}
function Demo05_tbExceptionAsync_OnPressed(e){
    ThrowException();
}
function Demo05_tbException_OnPressed(e){
    ThrowExceptionAsync();
}