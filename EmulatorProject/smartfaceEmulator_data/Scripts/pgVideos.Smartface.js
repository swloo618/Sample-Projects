function pgVideos_conBack_OnTouchEnded(e){
    Pages.back();
}
function pgVideos_Self_OnKeyPress(e){
    if(Device.deviceOS == "Android"){
        if(e.keyCode==4)
        {
            Pages.back();
        }
    }
}
function pgVideos_LblProfessional1_OnTouchEnded(e){
    Pages.pgVideos.conComment.Label1.visible = false;
    Pages.pgVideos.conComment.Label2.visible = true;
    Pages.pgVideos.conVideo.conVideo1.visible = false;
    Pages.pgVideos.conVideo.conVideo2.visible = true;
}
function pgVideos_LblCommunity2_OnTouchEnded(e){
    Pages.pgVideos.conComment.Label1.visible = true;
    Pages.pgVideos.conComment.Label2.visible = false;
    Pages.pgVideos.conVideo.conVideo1.visible = true;
    Pages.pgVideos.conVideo.conVideo2.visible = false;
}
function pgVideos_ImgVideo1_OnTouchEnded(e){
    Pages.pgVideos.Video1.contentUrl = "http://www.smartface.io/video/smartface_community.m4v";
    Pages.pgVideos.Video1.playVideo(false, true);
}
function pgVideos_ImgVideo2_OnTouchEnded(e){
    Pages.pgVideos.Video1.contentUrl = "http://www.smartface.io/video/smartface_professional.m4v";
    Pages.pgVideos.Video1.playVideo(false, true);
}
function pgVideos_Self_OnShow(e){
    if(Device.deviceOS == "Android"){
        Pages.pgVideos.conHeader.conBack.visible = false;
    }
    Pages.pgVideos.conVideo.conVideo1.visible = true;
    Pages.pgVideos.conVideo.conVideo2.visible = false;
    Pages.pgVideos.conComment.Label1.visible = true;
    Pages.pgVideos.conComment.Label2.visible = false;
    this.navigationItem.title = "Videos";
    var barBackImg = new SMF.UI.iOS.BarButtonItem({
        image:"backarrow.png",
        backgroundColor: "#F2F2F2",
        onSelected:function(e){
            Pages.back();
        }
    });
    var barBackTxt = new SMF.UI.iOS.BarButtonItem({
        title:"Back",
        fontName:"Arial",
        tintColor:"#666666",
        fontSize:16,
        backgroundColor: "#F2F2F2",
        onSelected: function(e){
            Pages.back();
        }
    });
    var leftItems = [barBackImg, barBackTxt];
    this.navigationItem.leftBarButtonItems = leftItems;
}