function pgDashboard_Self_OnKeyPress(e) { // only Android,  press device back button
    if (e.keyCode === 4) {
        Application.exit();
    }
}
function pgDashboard_conGuides_OnTouchEnded(e){
    Pages.pgGuides.show(2, 3, 0, false, false);
}
function pgDashboard_conQnA_OnTouchEnded(e){
    Pages.pgQnA.show(2, 3, 0, false, false);
}
function pgDashboard_conVideos_OnTouchEnded(e){
    Pages.pgVideos.show(2, 3, 0, false, false);
}
function pgDashboard_conShowcase_OnTouchEnded(e){
    Pages.pgShowcase.show(2, 3, 0, false, false);
}
function pgDashboard_conTipsTricks_OnTouchEnded(e){
    Pages.pgTipsTricks.show(2, 3, 0, false, false);
}
function pgDashboard_conFacebook_OnTouchEnded(e){
    SMF.Net.browseOut("fb://www.facebook.com/smartface.io");
}
function pgDashboard_conTwitter_OnTouchEnded(e){
    SMF.Net.browseOut("twitter://twitter.com/smartface_io");
}
function pgDashboard_conGithub_OnTouchEnded(e){
    SMF.Net.browseOut("https://github.com/smartface");
}
function pgDashboard_conYouTube_OnTouchEnded(e){
    SMF.Net.browseOut("youtube://www.youtube.com/user/smartfaceio");
}
function pgDashboard_Self_OnShow(e){
    Pages.pgDashboard.ScrollMainMenu.scrollY = 0;
    rowColorReset(e);
   this.navigationItem.titleView = {
        type:SMF.UI.TitleViewType.image,
        frame:[0,22,44,44], // left, top, width, height
        image:"logo.png",
        backgroundColor: "#F2F2F2"
    }
    var barButtonInfo = new SMF.UI.iOS.BarButtonItem({
        image:"info.png",
        onSelected:function(e){
            Pages.pgInfo.show(2, 3, 0, false, false);
        }
    });
    var rightItems = [barButtonInfo];
    this.navigationItem.rightBarButtonItems = rightItems;
}
function pgDashboard_conFacebook_OnTouch(e){
    Pages.pgDashboard.conFooter.conFacebook.fillColor = "#297f68";
}
function pgDashboard_conTwitter_OnTouch(e){
    Pages.pgDashboard.conFooter.conTwitter.fillColor = "#3598dc";
}
function pgDashboard_conGithub_OnTouch(e){
    Pages.pgDashboard.conFooter.conGithub.fillColor = "#72563c";
}
function pgDashboard_conYouTube_OnTouch(e){
    Pages.pgDashboard.conFooter.conYouTube.fillColor = "#c1392d";
}
function pgDashboard_conGuides_OnTouch(e){
    rowColorReset(e);
    Pages.pgDashboard.ScrollMainMenu.conMainMenu.conGuides.fillColor = "#F2F2F2";
}
function pgDashboard_conQnA_OnTouch(e){
    rowColorReset(e);
    Pages.pgDashboard.ScrollMainMenu.conMainMenu.conQnA.fillColor = "#F2F2F2";
}
function pgDashboard_conVideos_OnTouch(e){
    rowColorReset(e);
    Pages.pgDashboard.ScrollMainMenu.conMainMenu.conVideos.fillColor = "#F2F2F2";
}
function pgDashboard_conShowcase_OnTouch(e){
    rowColorReset(e);
    Pages.pgDashboard.ScrollMainMenu.conMainMenu.conShowcase.fillColor = "#F2F2F2";
}
function pgDashboard_conTipsTricks_OnTouch(e){
    rowColorReset(e);
    Pages.pgDashboard.ScrollMainMenu.conMainMenu.conTipsTricks.fillColor = "#F2F2F2";
}
function rowColorReset(e){
    Pages.pgDashboard.ScrollMainMenu.conMainMenu.conGuides.fillColor = "#FFFFFF";
    Pages.pgDashboard.ScrollMainMenu.conMainMenu.conQnA.fillColor = "#FFFFFF";
    Pages.pgDashboard.ScrollMainMenu.conMainMenu.conVideos.fillColor = "#FFFFFF";
    Pages.pgDashboard.ScrollMainMenu.conMainMenu.conShowcase.fillColor = "#FFFFFF";
    Pages.pgDashboard.ScrollMainMenu.conMainMenu.conTipsTricks.fillColor = "#FFFFFF";
    Pages.pgDashboard.conFooter.conFacebook.fillColor = "#8DB8D5";
    Pages.pgDashboard.conFooter.conTwitter.fillColor = "#93C5E7";
    Pages.pgDashboard.conFooter.conGithub.fillColor = "#A99582";
    Pages.pgDashboard.conFooter.conYouTube.fillColor = "#ED9F97";
}