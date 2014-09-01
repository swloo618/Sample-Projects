function Demo11_Self_OnShow(e) {
    Pages.Demo11.cntMain.contTitle.lblTitle.text = titleHeader;
}
function Demo11_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Pages.back();
    }
}
function Demo11_tbShowSoapResponse_OnPressed(e){
    GetSoapResponse();
}
function Demo11_TextButton2_OnPressed(e){
    GetSoapResponse();
}