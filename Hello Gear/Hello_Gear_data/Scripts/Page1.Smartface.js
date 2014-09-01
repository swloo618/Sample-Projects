function Page1_TextButton1_OnPressed(e){
    alert (Pages.Page1.EditBox1.text);
}
function Page1_Self_OnKeyPress(e){
    if(e.keyCode == 4) {
        Application.exit();
    }
}