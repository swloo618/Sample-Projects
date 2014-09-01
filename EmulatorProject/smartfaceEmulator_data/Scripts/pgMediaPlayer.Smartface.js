function pgMediaPlayer_Self_OnKeyPress(e){
     if(Device.deviceOS == "Android"){
        if(e.keyCode==4) 
        {
            Pages.back();
        }
    }
}
function pgMediaPlayer_Self_OnShow(e){
    Pages.pgMediaPlayer.Video1.playVideo(false, true, function(){alert("playybackStarrted.");},
    function(){alert("video Initialized.");} ,function(){alert("video Completed.");}, function(){alert("video Error.");});
}

function pgMediaPlayer_Video1_OnTouch(e){
    Pages.pgMediaPlayer.Video1.pauseVideo();
}
