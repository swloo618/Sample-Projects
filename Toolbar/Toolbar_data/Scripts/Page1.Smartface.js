function Page1_btnMore_OnPressed(e){
    openToolbar();
}
function Page1_btnSettings_OnPressed(e){
    closeToolbar();
    Menus.Menu1.show(SMF.UI.MenuStyle.optionalMenu);
}
function Page1_Rectangle1_OnTouch(e){
    closeToolbar();
}
function Page1_btnPen_OnPressed(e){
    closeToolbar();
    Device.Contacts.pick({
 showDetail:false,//iOS only
 onSuccess:function(e){
 alert(e.firstName + " " + e.phone[0]);
},
onCancel:function(e){alert("cancelled");},
onError:function(e){alert("error");}
});
}
function Page1_btnImage_OnPressed(e){
    closeToolbar();
SMF.Multimedia.startCamera(1,2,1,
     function(){},
     function(e){
       Pages.Page1.Image1.image = e.photoUri;
       alert("path="+e.photoUri);
      },
     function(){},
     function(){}
 );
}
function Page1_btnPin_OnPressed(e){
closeToolbar();
alert("Will be developed.");
}
function Page1_btnMail_OnPressed(e){
    closeToolbar();
    SMF.Net.sendMail({
    to: "support@smartface.io",
    cc: "",
    bcc: "",
    title: "Ticket Request",
    body:"I need some help about usage of Smartface App Studio.",attachment:"",
    onSuccess: function() {alert("success");},
    onFailure: function() {alert("failure");}});
}
function Page1_btnWeather_OnPressed(e){
    closeToolbar();
    SMF.Net.browseOut("www.accuweather.com");
}
function Page1_btnHome_OnPressed(e){
    closeToolbar();
    Pages.Page1.Image1.image = "default_splash.png";
}