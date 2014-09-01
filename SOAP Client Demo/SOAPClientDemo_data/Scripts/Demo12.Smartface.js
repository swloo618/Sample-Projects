function Demo12_Self_OnShow(e) {
    Pages.Demo12.cntMain.contTitle.lblTitle.text = titleHeader;
}
function Demo12_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Pages.back();
    }
}
function Demo12_tbSend1_OnPressed(e){
    SendSample1();
}
function Demo12_tbSend2_OnPressed(e){
    SendSample2();
}
function Demo12_tbSend3_OnPressed(e){
    SendSample3();
}
function Demo12_tbSend4A_OnPressed(e){
    SendSample4a();
}
function Demo12_tbSend4B_OnPressed(e){
    SendSample4b();
}
function Demo12_tbSend4C_OnPressed(e){
    SendSample4c();
}
function Demo12_tbSend5_OnPressed(e){
    SendSample5();
}