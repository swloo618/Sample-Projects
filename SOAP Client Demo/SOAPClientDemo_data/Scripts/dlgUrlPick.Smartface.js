function dlgUrlPick_rectBg_OnTouch(e) {
    Dialogs.dlgUrlPick.close();
}
function dlgUrlPick_tbURLOK_OnPressed(e) {
    setURL();
}
function dlgUrlPick_edtURL_OnReturnKey(e) {
    setURL();
}
function setURL() {
    url = Dialogs.dlgUrlPick.cntURL.edtURL.text;
    Dialogs.dlgUrlPick.close();
}