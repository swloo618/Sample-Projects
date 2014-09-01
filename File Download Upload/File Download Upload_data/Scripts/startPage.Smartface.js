var downloadDirectory = new SMF.IO.File("download");
if (!downloadDirectory.exists) {
    downloadDirectory.createDirectory();
}
var webClientDownload = new SMF.Net.WebClient({
        onSyndicationSuccess : function (e) {
            Pages.startPage.cntDownload.aiDownload.visible = false;
            Pages.startPage.cntDownload.imgDownload.visible = true;
            Pages.startPage.cntDownload.lblSubtitleDownload.text = this.response.name + " has been downloaded";
            this.response.move(downloadDirectory.path + SMF.IO.pathSeparator); //move it to downloaded files
        },
        onServerError : function (e) {
            Pages.startPage.cntDownload.aiDownload.visible = false;
            Pages.startPage.cntDownload.imgDownload.visible = true;
            Pages.startPage.cntDownload.lblSubtitleDownload.text = "There has been an error during downloading your file";
        },
        responseHandling : SMF.Net.ResponseHandling.forceFile, //important to download everything, otherwise download decision is determined by MIME type.
        httpMethod : "GET"
    });
var webClientUpload = new SMF.Net.WebClient({
        url : "http://services.smartface.io/Samples/File/Upload",
        httpMethod : "PUT", //Will be PUT regardles of what is set while uploading
        onSyndicationSuccess : function (e) {
            Pages.startPage.cntUpload.lblSubtitleUpload.text = "Your file has been successfuly uploaded";
            Pages.startPage.cntUpload.aiUpload.visible = false;
            Pages.startPage.cntUpload.imgUpload.visible = true;
        },
        onServerError : function (e) {
            Pages.startPage.cntUpload.lblSubtitleUpload.text = "There has been an error during uploading your file";
            Pages.startPage.cntUpload.aiUpload.visible = false;
            Pages.startPage.cntUpload.imgUpload.visible = true;
        }
    });
function startPage_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Application.exit();
    }
}
var actionStarter = null;
function setActiveCnt() {
    this.fillColor = "#D9D9D9";
    actionStarter = this;
}
function setInactiveCnt() {
    this.fillColor = "#FFFFFF";
    if (this === actionStarter) {
        actionStarter.action.call(actionStarter);
    }
}
function startPage_cntUpload_OnTouch(e) {
    setActiveCnt.call(this);
}
function startPage_cntUpload_OnTouchEnded(e) {
    setInactiveCnt.call(this);
}
function startPage_cntDownload_OnTouch(e) {
    setActiveCnt.call(this);
}
function startPage_cntDownload_OnTouchEnded(e) {
    setInactiveCnt.call(this);
}
var uploadMenuItems = [{
        title : "Take Photo",
        onSelected : function (e) {
            SMF.Multimedia.startCamera({
                cameraType : 1, //rear camera
                resolution : 2, //large resolution
                autoFocus : true,
                onStart : function () {}, //do nothing
                onCapture : function (e) {
                    submitFileForUpload(e.photoUri);
                },
                onCancel : function () {}, //do nothing
                onFailure : function () {}
                //do nothing
            });
        }
    }, {
        title : "Choose existing photo",
        onSelected : function (e) {
            Device.Media.pickFromGallery({
                type : [SMF.MediaType.Image],
                onSuccess : function (e) {
                    submitFileForUpload(e.file);
                },
                onCancel : function (e) {},
                onError : function (e) {}
            });
        }
    }, {
        title : "Send Contacts",
        onSelected : function (e) {
            Device.Contacts.pick({
                showDetail : false, //iOS only
                onSuccess : function (e) {
                    var f = new SMF.IO.File(e.fullName + ".contact.json");
                    if (!f.exists) {
                        f.createFile();
                    }
                    var stream = f.openStream(SMF.IO.StreamType.write);
                    stream.write(JSON.stringify(e));
                    stream.close();
                    stream = null; //releases object
                    submitFileForUpload(f);
                },
                onCancel : function (e) {},
                onError : function (e) {}
            });
        }
    }, {
        title : "Cancel",
        itemType : SMF.UI.MenuItemType.cancel,
        onSelected : function (e) {}
        // empty action will just close the menu
    }
];
Menus.uploadMenu = new SMF.UI.Menu({
        menuStyle : SMF.UI.MenuStyle.optionalMenu,
        title : "Upload", // iOS Optional Menu Only
        items : uploadMenuItems
    });
function startPage_Self_OnShow(e) {
    Pages.startPage.cntUpload.action = Pages.startPage.cntUpload.action || function () {
        Menus.uploadMenu.show();
    };
    Pages.startPage.cntDownload.action = Pages.startPage.cntDownload.action || function () {
        var urls = ["http://services.smartface.io/File/Download/books.xml",
            "http://services.smartface.io/File/Download/javascript.js",
            "http://services.smartface.io/File/Download/logo.png",
            "http://services.smartface.io/File/Download/text.txt",
            "http://services.smartface.io/File/Download/ZipFile.zip"];
        var items = ["books.xml", "javascript.js", "logo.png", "text.txt", "ZipFile.zip"];
        pick(items, 0, function (e) {
            webClientDownload.url = urls[e.index];
            Pages.startPage.cntDownload.aiDownload.visible = true;
            Pages.startPage.cntDownload.imgDownload.visible = false;
            webClientDownload.run();
        },
            function () {},
            function () {}, Device.touchX, Device.touchY);
    };
}
function submitFileForUpload(file) {
    var f;
    if (typeof file === 'string') {
        f = new SMF.IO.File(file);
    } else {
        f = file;
    }
    Pages.startPage.cntUpload.lblSubtitleUpload.text = "Uploading your photo file to server";
    Pages.startPage.cntUpload.aiUpload.visible = true;
    Pages.startPage.cntUpload.imgUpload.visible = false;
    webClientUpload.request = f;
    webClientUpload.run();
}