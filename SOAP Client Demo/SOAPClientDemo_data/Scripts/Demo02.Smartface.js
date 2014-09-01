function Demo02_Self_OnShow(e) {
    Pages.Demo02.cntMain.contTitle.lblTitle.text = titleHeader;
}
function Demo02_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Pages.back();
    }
}
function Demo02_tbSayHello_OnPressed(e) {
    HelloTo();
}