function Page1_Self_OnKeyPress(e){
if(e.keyCode == 4 )
{
alert({title: 'Information', message: 'Are you sure to exit ?', firstButtonText: "Yes", secondButtonText: "No", onFirstButtonPressed: function(){ Application.exit(); }, onSecondButtonPressed: function(){}});
}
}
function Page1_Image1_OnTouchEnded(e){
Pages.Page2.show();
}
function Page1_CopyofImage1_OnTouchEnded(e){
Pages.Page3.show();
}
function Page1_Copy2ofImage1_OnTouchEnded(e){
Pages.Page4.show();
}
function Page1_Copy3ofImage1_OnTouchEnded(e){
Pages.Page5.show();
}