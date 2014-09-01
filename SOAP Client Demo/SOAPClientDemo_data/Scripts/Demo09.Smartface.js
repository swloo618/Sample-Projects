function Demo09_Self_OnShow(e){
    Pages.Demo09.cntMain.contTitle.lblTitle.text = titleHeader;
}
function Demo09_Self_OnKeyPress(e){
                        if (e.keyCode === 4) {
        Pages.back();
    }
}
function Demo09_tbGetUsers_OnPressed(e){
    GetUserList();
}