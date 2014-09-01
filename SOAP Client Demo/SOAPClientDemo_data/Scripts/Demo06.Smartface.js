function Demo06_Self_OnShow(e){
    Pages.Demo06.cntMain.contTitle.lblTitle.text = titleHeader;
}
function Demo06_Self_OnKeyPress(e){
                if (e.keyCode === 4) {
        Pages.back();
    }
}
function Demo06_tbStart_OnPressed(e){
    SyncSample();
}