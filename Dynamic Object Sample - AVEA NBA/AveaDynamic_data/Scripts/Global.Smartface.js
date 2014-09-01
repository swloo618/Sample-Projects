var isAndroid = Device.deviceOS == "Android" ? true : false; //a programming flag for customizing the UI for iOS or Android
var isHeaderBarSetMain = false; //a flag for setting NavigationBar/ActionBar to prevent re-setting for MainPage
var isHeaderBarSetContent = false; //a flag for setting NavigationBar/ActionBar to prevent re-setting for MainPage
//iOS NavigationBar items
var homeItem;
var shareButtonItem;
var pgContent_logoItem;
var logoItem;
var shareItem;
var rightItem;
var leftItem;
if (!isAndroid && !isHeaderBarSetContent) {
    var navigationBarGalleryPhoto = new SMF.UI.iOS.BarButtonItem({
            image : "foto1.png",
            onSelected : function (e) {
                dlgGallery.show();
            }
        });
    var navigationBarVideo = new SMF.UI.iOS.BarButtonItem({
            image : "kamera1.png",
            onSelected : function (e) {
                videoContent.visible = true;
                videoContent.contentUrl = (basePath + responseObject[seek].video);
                videoContent.playVideo(false, true);
            }
        });
    isHeaderBarSetContent = true;
}
//Android ActionBar items
var homeItem_and;
var shareButtonItem_and;
if (isAndroid && !isHeaderBarSetContent) {
    var actionBarGalleryPhoto = new SMF.UI.Android.MenuItem({
            icon : "foto1_and.png",
            showAsAction : SMF.UI.Android.ShowAsAction.always,
            onSelected : function (e) {
                dlgGallery.show();
            },
            title : "Fotoğraflar"
        });
    var actionBarVideo = new SMF.UI.Android.MenuItem({
            icon : "kamera1_and.png",
            showAsAction : SMF.UI.Android.ShowAsAction.always,
            onSelected : function (e) {
                videoContent.visible = true;
                videoContent.contentUrl = (basePath + responseObject[seek].video);
                videoContent.playVideo(false, true);
            },
            title : "Video"
        });
    isHeaderBarSetContent = true;
}
//////////////////////////
//
// UI Items
//
var photos = []; //array of UI image objects to be displayed on gallery
var rBox; //main repeatbox object
var img; //image object shown in main repeatbox
var imgAc; //image object shown in main repeatbox in active item row
var ai; //indicator in repeatbox pullup item
var aicontent; //main condent loading activitiy indicator
var lblTitle; //title label, shown in main repeatbox in ItemTemplate
var lblBackground; //a label item, just show the background in ItemTemplate
var lblTitleAc; //title label, shown in main repeatbox in ActiveItemTemplate
var lblSpotAc; //spot text label, shown in main repeatbox in ActiveItemTemplate
var btnVideo; //button for video, displayed in main repeatbox
var btnContentText; //button for text content, displayed in main repeatbox
var btnPhotoGallery; //button for photo gallery, displayed in main repeatbox
var pgContent; //Page of news content
var recContent; //background of content page
var videoContent; //video object shown in content
var lblContentSpot; //label to displaye spot text in contnet page
var lblContentText; //label to displaye whole main text in content page
var lblContentTitle; //label to displaye title text in content page
var cntContentAnimation; //continer object to animate with swipes of contnet news
var svContentMainScroll; //scrollview which contains labels of content page
var dlgGallery; //photo gallery dialog
var btnGalleryCancel; //cancel button to go back from gallery
var imgGalleryPhoto; //UI image object in photo gallery
var svGalleryScroll; //Photo gallery main horizontal scroll
///////////////////
//other variables
var lastSelection = -1; //selected news ID on main repeatbox, used when returned to main page
var vStart = 0; //index of news where to start
var vCount = 12; //amount of news fetched everytime
var topIndex = 0; //repeatbox scroll index after pull-up
var basePath = "http://www.aveanba.com/content/"; //base URL path for images
var newsID = -1; //index of news to show on details page
var rHeight = 1; //height of the repeatbox row, the amount of pixel changes per device
var response; //JSON parsed object, answer recived from server for every call
var responseObject = []; //array for all response recieved from server
var wc1; //webClient object for fetching server response
var previousRightBarButtonItems = []; //a variable to check for UI optimization of content page navigationBar
var seek; //ındex for news when selected from repeatbox //--> diğer index ile duplicate olmasın
var firstTime = true; //a flag to mark the content has been initialized
var swipeControl = false;
var imageKey = { //a style key object for photo gallery images
    width : "100%",
    height : "100%",
    left : 0,
    top : 0,
    visible : true,
    touchEnabled : false,
    image : "",
    imageFillType : "aspectFit",
    enableZoom : true,
    enableScroll : true
};
function pgContent_onKeyPress(e) {
    if (e.keyCode === 4) {
        dlgGallery.close();
        Pages.back();
    }
}
var imageCount = []; //holds the image references for photo gallery
//returns full Image URL
function getImagePath() {
    return basePath + responseObject[seek].gallery;
}
//fetchs new Items and scrolls to the beginning
function logoPressed(e) {
    vStart = 0;
    responseObject = [];
    Data.dynamicDS.clear();
    rBox.selectedItemIndex = -1;
    wc1.url = "http://www.aveanba.com/json.php?count=12&start=0";
    wc1.run(false);
    dlgGallery.close();
    Pages.back();
}
// open gallery
function btnPhotoGallery_onPressed(e) {
    dlgGallery.show();
}
//play video
function btnVideo_onPressed(e) {
    videoContent.contentUrl = (basePath + responseObject[seek].video);
    videoContent.playVideo(false, true);
}
// set url to image
function urlFixer(url) {
    if (url.indexOf("http") > 0) {
        return url;
    } else {
        return basePath + url;
    }
}
function pgContent_onShow(e) {
    if (firstTime) {
        if (isAndroid) {
            
            
            homeItem_and = new SMF.UI.Android.MenuItem({
                    icon : "home1_and.png",
                    showAsAction : SMF.UI.Android.ShowAsAction.always,
                    onSelected : function (e) {
                        Pages.back();
                    },
                    title : "Ana Sayfa"
                });
            shareButtonItem_and = new SMF.UI.Android.MenuItem({
                    icon : "ok1_and.png",
                    showAsAction : SMF.UI.Android.ShowAsAction.always,
                    onSelected : function (e) {
                        Social.share("Avea ile artık NBA de her zaman seninle!", "NBA dünyasını, Türkiye Resmi Ortağı Avea ile takip edin! http://goo.gl/z113i", function () {}, function () {});
                    },
                    title : "Paylaş"
                });
            pgContent.actionBar.displayShowHomeEnabled = true;
            pgContent.actionBar.icon = "logo.png";
            pgContent.actionBar.displayShowTitleEnabled = true;
            pgContent.actionBar.displayHomeAsUpEnabled = true;
            pgContent.actionBar.onHomeIconItemSelected = logoPressed;
            pgContent.actionBar.backgroundColor = "red";
            pgContent.actionBar.visible = true;
        } else {
            pgContent_logoItem = new SMF.UI.iOS.BarButtonItem({
                    image : "logoios.png",
                    onSelected : logoPressed
                });
            homeItem = new SMF.UI.iOS.BarButtonItem({
                    image : "home1.png",
                    onSelected : function (e) {
                        Pages.back();
                    }
                });
            shareButtonItem = new SMF.UI.iOS.BarButtonItem({
                    image : "ok1.png",
                    onSelected : function (e) {
                        Social.share("Avea ile artık NBA de her zaman seninle!", "NBA dünyasını, Türkiye Resmi Ortağı Avea ile takip edin! http://goo.gl/z113i", function () {}, function () {});
                    }
                });
            var leftItem = [logoItem];
            this.navigationItem.leftBarButtonItems = leftItem;
            SMF.UI.iOS.NavigationBar.visible = true;
            SMF.UI.iOS.NavigationBar.backgroundImage = "navbar.png";
        }
        firstTime = false;
        svContentMainScroll.addGesture({
            id : "0",
            type : "swipe",
            direction : "left",
            requiredTouches : 1,
            callback : function (e) {
                rightSwipenew();
            }
        });
        // go to previous news
        svContentMainScroll.addGesture({
            id : "1",
            type : "swipe",
            direction : "right",
            requiredTouches : 1,
            callback : function (e) {
                leftSwipenew();
            }
        });
    }
    resetContentPageView(true); //forces to re-set headerbar items
}
function onSelectedItem(e) {
    seek = e.rowIndex;
    Data.dynamicDS.seek(seek);
    var photolength = responseObject[seek].gallery.length;
    var videoControl = responseObject[seek].video;
    if (lastSelection == e.rowIndex) {
        // gallery page
        pgContent.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false);
        newsID = e.rowIndex;
        topIndex = rBox.getTopIndex;
    } else {
        /// content page onShow a ekle
        lblContentTitle.text = responseObject[seek].title;
        lblContentSpot.text = responseObject[seek].spot;
        lblContentText.text = responseObject[seek].content;
        lastSelection = e.rowIndex;
    }
}
function onRowRender(e) {
    Data.dynamicDS.seek(e.rowIndex);
    img.image = urlFixer(responseObject[e.rowIndex].main_image_medium);
    imgAc.image = urlFixer(responseObject[e.rowIndex].main_image_medium);
    lblTitle.text = responseObject[e.rowIndex].title;
    lblTitleAc.text = responseObject[e.rowIndex].title;
    lblSpotAc.text = responseObject[e.rowIndex].spot;
    var photolength = responseObject[e.rowIndex].gallery.length;
    var videoControl = responseObject[e.rowIndex].video;
    if (photolength > 0) {
        btnPhotoGallery.visible = true;
    } else {
        btnPhotoGallery.visible = false;
    }
    if (videoControl == null) {
        btnVideo.visible = false;
    } else {
        btnVideo.visible = true;
    }

}
function onPullUp(e) {
    vStart += vCount;
    wc1.url = "http://www.aveanba.com/json.php?count=12&start=" + vStart;
    wc1.run(true);
}
function dlgGallery_onShow(e) {
    svGalleryScroll.autoSize = true;
    imageCount = responseObject[seek].gallery.length;
    for (var i = 0; i < imageCount; i++) {
        imageKey.image = urlFixer(responseObject[seek].gallery[i]);
        svGalleryScroll.add(new SMF.UI.Image(imageKey));
    }
}
function wc1_syndicationSuccess(e) {
    response = JSON.parse(wc1.responseText);
    for (var i = 0; i < response.length; i++) {
        responseObject.push(response[i].article);
        Data.dynamicDS.add();
    }
    Data.notify(Data.dynamicDS);
    aicontent.visible = false;
    rBox.closePullItems();
    if (swipeControl) {
        resetContentPageView();
        svContentMainScroll.left = "100%";
        svContentMainScroll.animate({
            property : 'X',
            endValue : '0%',
            motionEase : SMF.UI.MotionEase.decelerating,
            duration : '500',
            OnFinish : function () {}
        });
    }
}
// creating webclient , dataset and uı objects
function Global_Events_OnStart(e) {
    changeLang(Device.language, true);
    ///creating table
    Data.execute("CREATE TABLE IF NOT EXISTS testtable (col1 int)");
    // creating dataset for bind repeatbox
    Data.dynamicDS = new Data.Dataset({
            selectQuery : "select * from testtable"
        });
    Data.dynamicDS.refresh();
    // creating webclient
    wc1 = new SMF.Net.WebClient();
    wc1.URL = "http://www.aveanba.com/json.php";
    wc1.httpMethod = "GET";
    wc1.onSyndicationSuccess = wc1_syndicationSuccess;
    wc1.onServerError = function (e) {
        alert({
            title : 'Uyarı',
            message : "İnternete bağlı olduğunuzu kontrol ediniz",
            firstButtonText : "Tamam",
            onFirstButtonPressed : function () {}
        });
    }
    rHeight = Device.screenWidth;
    rBox = new SMF.UI.RepeatBox({
            width : "100%",
            height : "100%",
            left : 0,
            top : "0",
            dataSource : Data.dynamicDS,
            useActiveItem : true,
            showScrollbar : true,
            fillColor : "#3B3B3B",
            enablePullUpToRefresh : true,
            enablePullUpToRefresh : true
        });
    rBox.itemTemplate.height = rHeight;
    rBox.pullUpItem.height = "14.8%";
    rBox.activeItemTemplate.height = rHeight;
    rBox.itemTemplate.imageFillType = SMF.UI.ImageFillType.stretch;
    rBox.onRowRender = onRowRender;
    rBox.onSelectedItem = onSelectedItem;
    rBox.onPullUp = onPullUp;
    // image in repeatbox at mainpage
    img = new SMF.UI.Image({
            width : "100%",
            height : "100%",
            left : 0,
            top : 0,
            image : "",
            touchEnabled : false,
            visible : true,
            imageFillType : SMF.UI.ImageFillType.stretch
        });
    // indicator in repeatbox pullup item
    ai = new SMF.UI.ActivityIndicator({
            left : "48.28%",
            top : "42.36%",
            visible : true,
            style : SMF.UI.ActivityIndicatorStyle.white
        });
    // label in repeatbox , title
    lblTitle = new SMF.UI.Label({
            width : "90%",
            height : "20%",
            left : "5%",
            top : "80%",
            backgroundTransparent : true,
            multipleLine : true,
            textAlignment : SMF.UI.Alignment.left,
            fillColor : "#C0C0C0",
            touchEnabled : false,
            fontColor : "white",
            name : "lblTitle"
        });
    //  label in repeatbox for background
    lblBackground = new SMF.UI.Label({
            width : "100%",
            height : "20%",
            left : "0%",
            top : "80%",
            alpha : 0.3,
            touchEnabled : false,
            backgroundTransparent : false,
            multipleLine : true,
            textAlignment : SMF.UI.Alignment.left,
            fillColor : "black",
            name : "lblBackground",
            text : ""
        });
    // label in repeatbox active item for show title
    lblTitleAc = new SMF.UI.Label({
            width : "90%",
            height : "20%",
            top : 0,
            left : "5%",
            touchEnabled : false,
            multipleLine : true,
            fillColor : "#C0C0C0",
            backgroundTransparent : true,
            visible : true,
            fontColor : "white"
        });
    // label in repeatbox active item for show spor
    lblSpotAc = new SMF.UI.Label({
            name : "lblSpotAc",
            width : "90%",
            height : "80%",
            left : "4.72%",
            top : "19.82%",
            touchEnabled : false,
            visible : true,
            backgroundTransparent : true,
            fontColor : "white",
            textAlignment : SMF.UI.Alignment.topLeft,
            multipleLine : true,
            fillColor : "#CCCCCC",
            borderColor : "#999999"
        });
    //  label in repeatbox for background
    lblBackgroundAc = new SMF.UI.Label({
            width : "100%",
            height : "100%",
            left : "0%",
            top : "0%",
            alpha : 0.5,
            touchEnabled : false,
            backgroundTransparent : false,
            multipleLine : true,
            textAlignment : SMF.UI.Alignment.left,
            fillColor : "black",
            name : "lblBackgroundAc",
            text : ""
        });
    // button in repeatbox for show content
    btnContentText = new SMF.UI.ImageButton({
            width : "9.38%",
            height : "10.38%",
            left : "5%",
            top : "84.62%",
            touchEnabled : false,
            imageFillType : SMF.UI.ImageFillType.autosize,
            defaultImage : "content0.png",
            highlightedImage : "content0.png",
            inactiveImage : "content0.png",
            text : ""
        });
    //  button in repeatbox for open gallery
    btnPhotoGallery = new SMF.UI.ImageButton({
            width : "9.38%",
            height : "10.38%",
            left : "19.38%",
            top : "84.62%",
            touchEnabled : true,
            imageFillType : SMF.UI.ImageFillType.autosize,
            defaultImage : "foto0.png",
            highlightedImage : "foto0.png",
            inactiveImage : "foto0.png",
            text : "",
            onPressed : btnPhotoGallery_onPressed
        });
    //  button in repeatbox for camera
    btnVideo = new SMF.UI.ImageButton({
            width : "9.38%",
            height : "10.38%",
            left : "33.76%",
            top : "84.62%",
            touchEnabled : true,
            imageFillType : SMF.UI.ImageFillType.autosize,
            defaultImage : "kamera0.png",
            highlightedImage : "kamera0.png",
            inactiveImage : "kamera0.png",
            text : "",
            onPressed : btnVideo_onPressed
        });
    imgAc = img.clone(); //generates a clone item for it
    rBox.itemTemplate.add(img);
    rBox.activeItemTemplate.add(imgAc);
    rBox.itemTemplate.add(lblBackground);
    rBox.itemTemplate.add(lblTitle);
    rBox.activeItemTemplate.add(lblBackgroundAc);
    rBox.activeItemTemplate.add(lblTitleAc);
    rBox.activeItemTemplate.add(btnContentText);
    rBox.activeItemTemplate.add(btnPhotoGallery);
    rBox.activeItemTemplate.add(btnVideo);
    rBox.activeItemTemplate.add(lblSpotAc);
    rBox.pullUpItem.add(ai);
    Pages.Page1.add(rBox);
    // indicator in content page
    aicontent = new SMF.UI.ActivityIndicator({
            left : "47.19%",
            top : "50.18%",
            style : SMF.UI.ActivityIndicatorStyle.whiteLarge
        });
    /// page content
    pgContent = new SMF.UI.Page({
            backgroundImage : "default_pagebg.png",
            touchEnabled : true,
            fillColor : "white",
            onShow : pgContent_onShow,
            onKeyPress : pgContent_onKeyPress
        });
    /// video in content page
    videoContent = new SMF.UI.Video({
            width : "100%",
            height : "100",
            left : "0",
            top : "0",
            visible : false,
            touchEnabled : true
        });
    /// rectangle in content page for background
    recContent = new SMF.UI.Rectangle({
            width : "100%",
            height : "100%",
            left : "0",
            top : "0",
            backgroundTransparent : false,
            fillColor : "white",
            borderWidth : "0",
            roundedEdge : 0
        });
    /// scrollView in content page
    svContentMainScroll = new SMF.UI.ScrollView({
            name : "svContentMainScroll",
            width : "100%",
            height : "99%",
            left : "0",
            top : "0",
            contentheight : "120%",
            borderWidth : "0",
            contentWidth : "100%",
            contentHeight : "88%",
            touchEnabled : true,
            roundedEdge : 0,
            backgroundTransparent : false,
            enableVerticalScrolling : true,
            enableVerticalScrollbar : true,
            enableHorizontalScrolling : false,
            backgroundTransparent : true,
            fillColor : "yellow" // "#EFF3EF"
        });
    // container in scroll in content page
    cntContentAnimation = new SMF.UI.Container({
            name : "contScrollContent",
            width : "90%",
            left : "5%",
            height : "479 dp",
            top : "17.18dp",
            borderWidth : "0",
            roundedEdge : 0,
            backgroundTransparent : true,
            touchEnabled : false,
            layoutType : SMF.UI.LayoutType.linear,
            orientation : SMF.UI.Orientation.vertical,
            layoutAlignment : "top",
            autoSize : true,
            fillColor : "#EFF3EF",
        });
    /// label  in scrollView in content page for show title
    lblContentTitle = new SMF.UI.Label({
            name : "lblTitle",
            width : "100%",
            left : "0%",
            height : "10%",
            top : "2.45dp",
            text : "",
            borderWidth : "0",
            roundedEdge : 0,
            fontColor : "red",
            detectURLsInString : true,
            multipleLine : true,
            autoSize : true,
            touchEnabled : false,
            backgroundTransparent : true,
            fillColor : "#CCCCCC"
        });
    /// label  in scrollView in content page for show spot
    lblContentSpot = new SMF.UI.Label({
            name : "lblSpot",
            width : "100%",
            left : "0%",
            height : "20%",
            borderWidth : "0",
            roundedEdge : 0,
            top : "53.01dp",
            text : "",
            fontColor : "#339999",
            multipleLine : true,
            autoSize : true,
            touchEnabled : false,
            backgroundTransparent : true,
            fillColor : "#CCCCCC"
        });
    /// label in scrollView in content page for show content
    lblContentText = new SMF.UI.Label({
            name : "lblContent",
            width : "100%",
            left : "0%",
            height : "52%",
            top : "150.67dp",
            borderWidth : "0",
            touchEnabled : false,
            text : "",
            roundedEdge : 0,
            fontColor : "black",
            multipleLine : true,
            autoSize : true,
            backgroundTransparent : true,
            fillColor : "#CCCCCC",
            detectURLsInString : true
        });
    pgContent.add(recContent);
    pgContent.add(svContentMainScroll);
    svContentMainScroll.add(cntContentAnimation);
    cntContentAnimation.add(lblContentTitle);
    cntContentAnimation.add(lblContentSpot);
    cntContentAnimation.add(lblContentText);
    pgContent.add(videoContent);
    Pages.Page1.add(aicontent);
    // dialog gallery
    dlgGallery = new SMF.UI.Dialog({
            width : "100%",
            height : "100%",
            left : 0,
            top : "0",
            touchEnabled : true,
            imageFillType : "aspectFit",
            backgroundTransparent : false,
            fillColor : "black",
            onShow : dlgGallery_onShow
        });
    dlgGallery.height = Device.screenHeight;
    // scrollview in dialog gallery
    svGalleryScroll = new SMF.UI.ScrollView({
            width : "100%",
            left : 0,
            height : "100%",
            top : 0,
            contentWidth : "100%",
            contentHeight : "100%",
            visible : true,
            backgroundTransparent : true,
            touchEnabled : true,
            fillColor : "#EFF3EF",
            borderWidth : 0,
            horizontalGap : 0,
            verticalGap : 0,
            //autoSize : true,
            layoutType : SMF.UI.LayoutType.linear,
            orientation : SMF.UI.Orientation.horizontal,
            alignment : SMF.UI.LayoutAlignment.left,
            enableVerticalScrollbar : false,
            enableVerticalScrolling : false,
            enableHorizontalPaging : true,
            enableHorizontalScrolling : true,
            enableHorizontalScrollbar : true
        });
    dlgGallery.add(svGalleryScroll);
    // image in scrollview in dialog gallery
    imgGalleryPhoto = new SMF.UI.Image({
            width : "100%",
            height : "100%",
            visible : true,
            touchEnabled : true,
            image : "",
            enableZoom : true,
            enableScroll : true
        });
    imgGalleryPhoto.imageFillType = "aspectFit",
    // scrollview in dialog gallery
    btnGalleryCancel = new SMF.UI.ImageButton({
            width : "12.5%",
            height : "9.8%",
            left : "85.62%",
            top : "3%",
            text : " ",
            touchEnabled : true,
            imageFillType : SMF.UI.ImageFillType.autosize,
            defaultImage : "close1.png",
            highlightedImage : "close2.png",
            inactiveImage : "close1.png",
            onTouchEnded : function (e) {
                svGalleryScroll.clear();
                dlgGallery.close();
            }
        });
    dlgGallery.add(btnGalleryCancel);
    wc1.run(); //run webClient et the end
}
function Global_Events_OnError(e) {
    switch (e.type) {
    case "Server Error":
    case "Size Overflow":
        alert(lang.networkError);
        break;
    default:
        SES.Analytics.eventLog("error", JSON.stringify(e));
        var err = JSON.parse(JSON.stringify(e));
        err.message = e.message;
        alert(JSON.stringify(err));
        break;
    }
}
// go to next news
function rightSwipenew(e) {
    var seekcontrol;
    var seekcontrol = parseInt(responseObject.length) - 1;
    if (seekcontrol == seek) {
        seek = parseInt(seek) + 1;
        swipeControl = true;
        vStart += vCount;
        wc1.url = "http://www.aveanba.com/json.php?count=12&start=" + vStart;
        wc1.run(true);
    } else {
        seek = parseInt(seek) + 1;
        var swipe = false;
        resetContentPageView();
        svContentMainScroll.left = "100%";
        svContentMainScroll.animate({
            property : 'X',
            endValue : '0%',
            motionEase : SMF.UI.MotionEase.decelerating,
            duration : '500',
            OnFinish : function () {}
        });
    }

}
// go to previous news
function leftSwipenew(e) {
    seek = parseInt(seek) - 1;
    if (seek >= 0) {
        svContentMainScroll.left = "-100%";
        resetContentPageView();
        svContentMainScroll.animate({
            property : 'X',
            endValue : '0%',
            motionEase : SMF.UI.MotionEase.decelerating,
            duration : '500',
            OnFinish : function () {}
        });
    }
}
function resetContentPageView(forceReSet) {
    svContentMainScroll.scrollY = 0;
    var photolength = responseObject[seek].gallery.length;
    var videoControl = responseObject[seek].video;
    var needsReSet = forceReSet || false;
    if (isAndroid) {
        var actionbarItems = [homeItem_and, shareButtonItem_and];
        if (photolength > 0) {
            actionbarItems.unshift(actionBarGalleryPhoto);
        } else {}
        if (videoControl != null) {
            actionbarItems.unshift(actionBarVideo);
        } else {}
        pgContent.actionBar.menuItems = actionbarItems;
    } else {
        var rightItem = [shareButtonItem, homeItem];
        if (photolength > 0) {
            rightItem.push(navigationBarGalleryPhoto);
        }
        if (videoControl != null) {
            rightItem.push(navigationBarVideo);
        }
        if ((photolength > 0) !== (previousRightBarButtonItems.indexOf(navigationBarGalleryPhoto) > -1)) {
            needsReSet = true;
        }
        if ((videoControl != null) !== (previousRightBarButtonItems.indexOf(navigationBarVideo) > -1)) {
            needsReSet = true;
        }
        if (needsReSet) {
            pgContent.navigationItem.rightBarButtonItems = rightItem;
        }
        previousRightBarButtonItems = rightItem;
    }
    lblContentTitle.text = responseObject[seek].title;
    lblContentSpot.text = responseObject[seek].spot;
    lblContentText.text = responseObject[seek].content;
    svContentMainScroll.contentHeight = cntContentAnimation.height + cntContentAnimation.top + (Device.screenHeight / 20);
}