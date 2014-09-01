function Demo08_Self_OnShow(e){
    Pages.Demo08.cntMain.contTitle.lblTitle.text = titleHeader;
}
function Demo08_Self_OnKeyPress(e){
                    if (e.keyCode === 4) {
        Pages.back();
    }
}
function Demo08_tbGetIsers_OnPressed(e){
    GetUsers();
}