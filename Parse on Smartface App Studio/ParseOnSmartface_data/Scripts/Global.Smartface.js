//Parse Tutorial App
//Author : Tolga Haliloğlu
//17.10.2014

var isAndroid = Device.deviceOS == "Android" ? true : false; // Recognize which device is using
var imagePath; //Photo Path from Picture
var registerWebClient; //WebClient for registering
var loginWebRequest; //WebClient for WebRequest

var responseObject = []; // For pgAllUser's RepeatBox Object

//function to copy values to other object
function copyExtender(base, extension) {
    var n = Object.create(base);
    for (prop in extension) {
        n[prop] = extension[prop];
    }
    return n;
}

//used for base properties of dynamic objects
var keys = {
    page : {
        showNavigationBar : true,
        showStatusBar : false,
        touchEnabled : true,
        onKeyPress : function (e) {
            if (e.keyCode === 4) {
                if (this.name === "pgLogin") {
                    Application.exit();
                } else {
                    Pages.back();
                }
            }
        }
    },
    editbox : {
        left : "20%",
        width : "60%",
        height : "10%",
        fontColor : "#FFFFFF",
        fillColor : "#C0C0C0",
        text : "",
        textAlignment : SMF.UI.Alignment.center,
    },
    label : {
        minimumFontSize : 10,
        textAlignment : SMF.UI.Alignment.center,
        multipleLine : false
    },
    textbutton : {
        left : "20%",
        width : "60%",
        height : "10%",
        fontColor : "#FFFFFF"
    },
    image : {
        imageFillType : "aspectFit"
    }
};

// animation for page navigation
var animation = {
    motionEase : SMF.UI.MotionEase.decelerating,
    transitionEffect : SMF.UI.TransitionEffect.rightToLeft,
    transitionEffectType : SMF.UI.TransitionEffectType.push,
    fade : true,
    reset : false
};

//Dialog for request-response time space
loadingDialog = new SMF.UI.Dialog({
        width : "100%",
        height : "100%",
        left : 0,
        top : "0",
        touchEnabled : false,
        backgroundTransparent : false,
        fillColor : "#FFFFFF",
    });
loadingDialog.height = Device.screenHeight;

//Use for dialog
ai = new SMF.UI.ActivityIndicator({
        left : "48.28%",
        top : "42.36%",
        visible : true,
        style : SMF.UI.ActivityIndicatorStyle.gray
    });
loadingDialog.add(ai);

function Global_Events_OnError(e) {
    switch (e.type) {
    case "Server Error":
    case "Size Overflow":
        alert(lang.networkError);
        break;
    default:
        SES.Analytics.eventLog("error", JSON.stringify(e));        
        alert(lang.applicationError);
        break;
    }
}

function Global_Events_OnStart(e) {
    changeLang(Device.language, true);

    load("HeaderBar.js");
    header = new HeaderBar();

    Data.dynamicDS = new Data.Dataset();

    /////////////////////////////////////////////////////////////////////////////////////////
    ////pgLogin

    Pages.pgLogin = new SMF.UI.Page(copyExtender(keys.page, {
                name : "pgLogin"
            }));
    Pages.pgLogin.show();

    //Creating Navigation Bar for iOS and Action Bar for Android
    if (isAndroid) {
        Pages.pgLogin.actionBar = Pages.pgLogin.actionBar;
        Pages.pgLogin.actionBar.visible = true;
        Pages.pgLogin.actionBar.backgroundColor = "#FFFFFF";
        Pages.pgLogin.actionBar.titleView = {
            type : SMF.UI.TitleViewType.text,
            text : "Welcome",
            textSize : 16,
            textColor : "#000000",
            alignment : SMF.UI.Alignment.center,
        };
    } else {
        SMF.UI.iOS.NavigationBar.visible = true;
        Pages.pgLogin.navigationItem.title = "Welcome";
    }

    //Parse Logo
    var parsePhoto = new SMF.UI.Image(copyExtender(keys.image, {
                image : "parse-logo.png",
                top : "3%",
                left : "25%",
                width : "50%",
                height : "20%",
                name : "userPhoto",
            }));
    Pages.pgLogin.add(parsePhoto);

    //Username Editbox
    var ebUsername = new SMF.UI.EditBox(copyExtender(keys.editbox, {
                name : "ebUsername",
                top : "27,5%",
                placeHolder : "Username",
                onReturnKey : function (e) {
                    ebPassword.focus();
                },
                returnKey : SMF.UI.EditboxReturnKey.next
            }));
    Pages.pgLogin.add(ebUsername);

    var label1 = new SMF.UI.Label(copyExtender(keys.label, {
                top : "36%",
                left : "40%",
                text : "and",
                width : "20%",
                height : "10%",
            }));
    Pages.pgLogin.add(label1);

    var label2 = new SMF.UI.Label(copyExtender(keys.label, {
                top : "69,5%",
                left : "40%",
                text : "or",
                width : "20%",
                height : "10%",
            }));
    Pages.pgLogin.add(label2);

    //Navigates pgCreate page
    var tbCreate = new SMF.UI.TextButton(copyExtender(keys.textbutton, {
                top : "77,5%",
                text : "Create Account",
                onPressed : function (e) {
                    Pages.pgCreate.show(5, 2, 1, true, false);
                }
            }));
    Pages.pgLogin.add(tbCreate);

    //Creates login WebClient
    var tbLogin = new SMF.UI.TextButton(copyExtender(keys.textbutton, {
                top : "61%",
                text : "Login",
                onPressed : function (e) {
                    if ((Pages.pgLogin.ebUsername.text == "Username" || Pages.pgLogin.ebUsername.text == "") || (Pages.pgLogin.ebPassword.text == "Password" || Pages.pgLogin.ebPassword.text == "")) {
                        alert("Username or Password incomplete..");
                    } else {
                        loadingDialog.show();
                        loginWR();
                    }
                }
            }));
    Pages.pgLogin.add(tbLogin);

    //Editbox Password
    var ebPassword = new SMF.UI.EditBox(copyExtender(keys.editbox, {
                name : "ebPassword",
                top : "45%",
                placeHolder : "Password",
                onReturnKey : tbLogin.onPressed
            }));
    Pages.pgLogin.add(ebPassword);
    ebPassword.closeKeyboard();
    ebUsername.closeKeyboard();

    /////////////////////////////////////////////////////////////////////////////////////////
    ////pgCreate

    Pages.pgCreate = new SMF.UI.Page(copyExtender(keys.page, {
                name : "pgCreate",
            }));

    Pages.pgCreate.onKeyPress = function (e) {
        if (e.keyCode === 4) {
            Pages.back();
        }
    };

    Pages.pgCreate.onShow = function (e) {
        Pages.pgCreate.userPhoto.visible = false;
        Pages.pgCreate.tbAddPhoto.visible = true;
    }

    var barCancelTxt = {
        title : "Cancel",
        fontName : "Arial",
        tintColor : "#666666",
        fontSize : 16,
        backgroundColor : "#F2F2F2",
        onSelected : function (e) {
            Pages.back();
        }
    };
    //Creating Navigation Bar for iOS and Action Bar for Android
    if (isAndroid) {
        Pages.pgCreate.actionBar = Pages.pgCreate.actionBar;
        Pages.pgCreate.actionBar.visible = true;
        Pages.pgCreate.actionBar.backgroundColor = "#FFFFFF";

        Pages.pgCreate.actionBar.titleView = {
            type : SMF.UI.TitleViewType.text,
            text : "Create Account",
            textSize : 16,
            textColor : "#000000",
            left : Device.screenWidth * 35 / 100,
            top : Device.screenHeight * 2 / 100,
        };

        barCancelTxt.type = SMF.UI.TitleViewType.text;
        barCancelTxt.showAsAction = SMF.UI.Android.ShowAsAction.always;
        var item = new SMF.UI.Android.MenuItem(barCancelTxt);
        Pages.pgCreate.actionBar.menuItems = [item];
    } else {
        Pages.pgCreate.navigationItem.title = "Create Account";
        var item = new SMF.UI.iOS.BarButtonItem(barCancelTxt);
        var rightItems = [item];
        Pages.pgCreate.navigationItem.rightBarButtonItems = rightItems;
    }

    //User photo using Camera
    var userPhoto = new SMF.UI.Image(copyExtender(keys.image, {
                top : "4%",
                left : "30%",
                width : "40%",
                height : "30%",
                name : "userPhoto",

            }));
    Pages.pgCreate.add(userPhoto);

    //Full Name
    var ebFullname = new SMF.UI.EditBox(copyExtender(keys.editbox, {
                name : "ebFullname",
                top : "40%",
                placeHolder : "Full Name",

            }));
    Pages.pgCreate.add(ebFullname);

    //User Name
    var ebUsername = new SMF.UI.EditBox(copyExtender(keys.editbox, {
                name : "ebUsername",
                top : "55%",
                placeHolder : "Username",
            }));
    Pages.pgCreate.add(ebUsername);

    //Password
    var ebPassword = new SMF.UI.EditBox(copyExtender(keys.editbox, {
                name : "ebPassword",
                top : "70%",
                placeHolder : "Password",
            }));
    Pages.pgCreate.add(ebPassword);

    //Taking Photo
    var tbAddPhoto = new SMF.UI.TextButton({
            name : "tbAddPhoto",
            top : "10%",
            left : "35%",
            text : "Add Photo",
            width : "30%",
            height : "20%",
            fontColor : "#FFFFFF",
            visible : true,
            textAlignment : SMF.UI.Alignment.center,
            onPressed : function (e) {

                //Capture Image and add to userPhoto object.
                SMF.Multimedia.startCamera({
                    cameraType : 0,
                    resolution : 2,
                    autoFocus : true,
                    onCapture : function (e) {

                        var myImageUri = e.photoUri;
                        var im = new SMF.Image({
                                imageUri : myImageUri,
                                onSuccess : function (e) {

                                    //Rotate image for some Android Device Issues
                                    im.rotate({
                                        angle : 0,
                                        format : SMF.ImageFormat.PNG,
                                        compressionRate : 1,
                                        onSuccess : function (e) {
                                            Pages.pgCreate.userPhoto.image = e.image;
                                            if (isAndroid) {
                                                imagePath = e.image;
                                            } else {
                                                imagePath = SMF.IO.applicationDataDirectory + "/" + e.image;
                                            }
                                            Pages.pgCreate.userPhoto.visible = true;
                                            Pages.pgCreate.tbAddPhoto.visible = false;
                                            Pages.pgCreate.tbAddAccount.visible = true;

                                        },
                                        onError : function (e) {
                                            alert("Error: " + e.message);
                                        }
                                    });

                                },
                                onError : function (e) {
                                    alert("Error: " + e.message);
                                }
                            });
                    },
                });
            }

        });
    Pages.pgCreate.add(tbAddPhoto);

    //Add Account Button
    var tbAddAccount = new SMF.UI.TextButton(copyExtender(keys.textbutton, {
                name : "tbAddAccount",
                top : "85%",

                text : "Add Account",

                visible : false,
                onPressed : function (e) {
                    if ((Pages.pgCreate.ebFullname.text == "Full Name" || Pages.pgCreate.ebFullname.text == "") || (Pages.pgCreate.ebUsername.text == "Username" || Pages.pgCreate.ebUsername.text == "") || (Pages.pgCreate.ebPassword.text == "Password" || Pages.pgCreate.ebPassword.text == "")) {
                        alert("Please fill all of EditBoxes");
                    } else {
                        //Creates User
                        registerWR();
                        loadingDialog.show();
                    }
                }
            }));
    Pages.pgCreate.add(tbAddAccount);

    /////////////////////////////////////////////////////////////////////////////////////////
    ////pgUser
    Pages.pgUser = new SMF.UI.Page(copyExtender(keys.page, {
                name : "pgUser",
            }));

    Pages.pgUser.onKeyPress = function (e) {
        if (e.keyCode === 4) {
            Pages.back();
        }
    };

    var barAllUsersTxt = {
        title : "All Users",
        fontName : "Arial",
        tintColor : "#666666",
        fontSize : 16,
        backgroundColor : "#F2F2F2",
        onSelected : function (e) {
            getAllUsersWR();
            loadingDialog.show();
        }
    };

    //Creating Navigation Bar for iOS and Action Bar for Android
    if (isAndroid) {
        Pages.pgUser.actionBar = Pages.pgUser.actionBar;
        Pages.pgUser.actionBar.visible = true;
        Pages.pgUser.actionBar.backgroundColor = "#FFFFFF";

        Pages.pgUser.actionBar.displayHomeAsUpEnabled = true;
        Pages.pgUser.actionBar.displayShowHomeEnabled = false;
        Pages.pgUser.actionBar.displayShowTitleEnabled = true;
        Pages.pgUser.actionBar.title = "Back";
        Pages.pgUser.actionBar.onHomeIconItemSelected = function () {
            Pages.back();
        }

        Pages.pgUser.actionBar.titleView = {
            type : SMF.UI.TitleViewType.text,
            text : "User Info",
            textSize : 16,
            textColor : "#000000",
            left : Device.screenWidth * 37 / 100,
            top : Device.screenHeight * 2 / 100,
        };

        barAllUsersTxt.type = SMF.UI.TitleViewType.text;
        barAllUsersTxt.showAsAction = SMF.UI.Android.ShowAsAction.always;
        var item = new SMF.UI.Android.MenuItem(barAllUsersTxt);
        Pages.pgUser.actionBar.menuItems = [item];
    } else {
        Pages.pgUser.navigationItem.title = "User Info";

        var barBackImg = new SMF.UI.iOS.BarButtonItem({
                image : "backarrow.png",
                backgroundColor : "#F2F2F2",
                onSelected : function (e) {
                    Pages.back();
                }
            });
        var barBackTxt = new SMF.UI.iOS.BarButtonItem({
                title : "Back",
                fontName : "Arial",
                tintColor : "#666666",
                fontSize : 16,
                backgroundColor : "#F2F2F2",
                onSelected : function (e) {
                    Pages.back();
                }
            });
        var leftItems = [barBackImg, barBackTxt];
        Pages.pgUser.navigationItem.leftBarButtonItems = leftItems;

        var item = new SMF.UI.iOS.BarButtonItem(barAllUsersTxt);
        var rightItems = [item];
        Pages.pgUser.navigationItem.rightBarButtonItems = rightItems;
    }

    var myFont = new SMF.UI.Font({
            name : "Default",
            size : "8 pt",
            bold : true,
            italic : false
        });
    var line1 = new SMF.UI.Line({
            top : "49%",
            left : "20%",
            width : "60%",
            height : "2%",
        });
    Pages.pgUser.add(line1);

    var lblFullName = new SMF.UI.Label(copyExtender(keys.label, {
                name : "lblFullName",
                top : "50%",
                left : "30%",
                text : "Full Name",
                width : "40%",
                height : "10%",
                font : myFont,
            }));
    Pages.pgUser.add(lblFullName);

    //Full Name comes from Parse request
    var lblRetrieveFullName = new SMF.UI.Label({
            name : "lblRetrieveFullName",
            top : "60%",
            left : "30%",
            text : "fullname",
            width : "40%",
            height : "10%",
            textAlignment : SMF.UI.Alignment.center,
            multipleLine : false
        });
    Pages.pgUser.add(lblRetrieveFullName);

    var line2 = new SMF.UI.Line({
            top : "69%",
            left : "20%",
            width : "60%",
            height : "2%",
        });
    Pages.pgUser.add(line2);

    var lblUserName = new SMF.UI.Label(copyExtender(keys.label, {
                name : "lblUserName",
                top : "70%",
                left : "30%",
                text : "User Name",
                width : "40%",
                height : "10%",
                font : myFont,
            }));
    Pages.pgUser.add(lblUserName);

    //Username comes from Parse
    var lblRetrieveUserName = new SMF.UI.Label(copyExtender(keys.label, {
                name : "lblRetrieveUserName",
                top : "80%",
                left : "30%",
                text : "username",
                width : "40%",
                height : "10%",
            }));
    Pages.pgUser.add(lblRetrieveUserName);

    /////////////////////////////////////////////////////////////////////////////////////////
    ////pgAllUsers

    Pages.pgAllUsers = new SMF.UI.Page(copyExtender(keys.page, {
                name : "pgAllUsers",
            }));
    Pages.pgAllUsers.onKeyPress = function (e) {
        if (e.keyCode === 4) {
            Pages.back();
        }
    };

    if (isAndroid) {
        Pages.pgAllUsers.actionBar = Pages.pgAllUsers.actionBar;
        Pages.pgAllUsers.actionBar.visible = true;
        Pages.pgAllUsers.actionBar.backgroundColor = "#FFFFFF";

        Pages.pgAllUsers.actionBar.displayHomeAsUpEnabled = true;
        Pages.pgAllUsers.actionBar.displayShowHomeEnabled = false;
        Pages.pgAllUsers.actionBar.displayShowTitleEnabled = true;
        Pages.pgAllUsers.actionBar.onHomeIconItemSelected = function () {
            Pages.back();
        }

        Pages.pgAllUsers.actionBar.titleView = {
            type : SMF.UI.TitleViewType.text,
            text : "All Users",
            textSize : 16,
            left : Device.screenWidth * 37 / 100,
            top : Device.screenHeight * 2 / 100,
        };

    } else {
        Pages.pgAllUsers.navigationItem.title = "All Users";
        var barBackImg = new SMF.UI.iOS.BarButtonItem({
                image : "backarrow.png",
                backgroundColor : "#F2F2F2",
                onSelected : function (e) {
                    Pages.back();
                }
            });
        var barBackTxt = new SMF.UI.iOS.BarButtonItem({
                title : "Back",
                fontName : "Arial",
                tintColor : "#666666",
                fontSize : 16,
                backgroundColor : "#F2F2F2",
                onSelected : function (e) {
                    Pages.back();
                }
            });
        var leftItems = [barBackImg, barBackTxt];
        Pages.pgAllUsers.navigationItem.leftBarButtonItems = leftItems;
    }

    var lbl = new SMF.UI.Label(copyExtender(keys.label, {
                top : "0%",
                left : "0%",
                width : "100%",
                height : "100%",
                fillColor : "#FFFFFF",
                textAlignment : SMF.UI.Alignment.center,
            }));

    //All User's RepeatBox. It fills from allUsers WebClient
    var repeatBox1 = new SMF.UI.RepeatBox({
            name : "repeatBox1",
            width : "100%",
            height : "100%",
            left : "0%",
            top : "0%",
            dataSource : Data.dynamicDS,
            showScrollbar : true,
            fillColor : "white",
            backgroundTransparent : true,
            onRowRender : function (e) {
                this.controls[0].text = responseObject[e.rowIndex];
            }
        });
    repeatBox1.itemTemplate.height = Device.screenHeight / 7;
    repeatBox1.itemTemplate.imageFillType = SMF.UI.ImageFillType.stretch;
    repeatBox1.itemTemplate.add(lbl);
    Pages.pgAllUsers.add(repeatBox1);
}

function registerWR() {
    // User Registiration
    // This Client uses for POST request. Takes user info and sends to User class of Parse
    registerWebClient = new SMF.Net.WebClient({
            url : "https://api.parse.com/1/users",
            httpMethod : "POST",
            requestString : JSON.stringify({
                fullname : Pages.pgCreate.ebFullname.text,
                username : Pages.pgCreate.ebUsername.text,
                password : Pages.pgCreate.ebPassword.text,
            }),
            requestHeaders : [
                "X-Parse-Application-Id: Q69u7xeJnE2JREaYTVnE6Us5V3o5MZp25HUUq1aQ",
                "X-Parse-REST-API-Key: yssq2yMZwjQArUnNP7UbtZ33jcQGYfkWkfkt3x1q",
                "Content-Type: application/json"],
            onSyndicationSuccess : function (e) {
                //PhotoUpload
                //When finished sending user's info succesfully, user's image file sends to file class of Parse.
                var photoUploadWebClient = new SMF.Net.WebClient({
                        url : "https://api.parse.com/1/files/" + JSON.parse(registerWebClient.responseText).objectId + ".png",
                        httpMethod : "POST",
                        request : new SMF.IO.File(imagePath),
                        requestHeaders : [
                            "X-Parse-Application-Id: Q69u7xeJnE2JREaYTVnE6Us5V3o5MZp25HUUq1aQ",
                            "X-Parse-REST-API-Key: yssq2yMZwjQArUnNP7UbtZ33jcQGYfkWkfkt3x1q",
                            "Content-Type: image/png"],
                        onSyndicationSuccess : function (e) {
                            //Create Relation Table between UserObjectId and UserPhoto
                            //For download user's image when nessesary, must create this webclient.
                            var relationWebClient = new SMF.Net.WebClient({
                                    url : "https://api.parse.com/1/classes/PlayerProfile",
                                    httpMethod : "POST",
                                    requestString : JSON.stringify({
                                        username : Pages.pgCreate.ebUsername.text,
                                        userId : JSON.parse(registerWebClient.responseText).objectId,
                                        picture : {
                                            name : JSON.parse(photoUploadWebClient.responseText).name,
                                            __type : "File",
                                        }
                                    }),
                                    requestHeaders : [
                                        "X-Parse-Application-Id: Q69u7xeJnE2JREaYTVnE6Us5V3o5MZp25HUUq1aQ",
                                        "X-Parse-REST-API-Key: yssq2yMZwjQArUnNP7UbtZ33jcQGYfkWkfkt3x1q",
                                        "Content-Type: application/json"],
                                    onSyndicationSuccess : function (e) {
                                        loadingDialog.close();
                                        alert("User Created Successfully...");
                                        Pages.pgLogin.ebUsername.text = Pages.pgCreate.ebUsername.text;
                                        Pages.back();
                                    },
                                    onServerError : function (e) {
                                        alert(JSON.parse(e.message).error);
                                        loadingDialog.close();
                                    }
                                });
                            relationWebClient.run(true);
                        },
                        onServerError : function (e) {
                            var message = "There has been an error on server side";
                            try {
                                message = JSON.parse(e.message).error;
                            } catch (ex) {}
                            alert(message);
                            loadingDialog.close();
                        }
                    });
                photoUploadWebClient.run(true);
            },
            onServerError : function (e) {
                alert(JSON.parse(e.message).error);
                loadingDialog.close();
            }
        });
    registerWebClient.run(true);
}

function getAllUsersWR() {
    //This web client shows all users who loginned Parse class
    var getAllUsersWebRequest = new SMF.Net.WebClient({
            url : "https://api.parse.com/1/users",
            httpMethod : "GET",
            requestHeaders : [
                "X-Parse-Application-Id: Q69u7xeJnE2JREaYTVnE6Us5V3o5MZp25HUUq1aQ",
                "X-Parse-REST-API-Key: yssq2yMZwjQArUnNP7UbtZ33jcQGYfkWkfkt3x1q",
            ],
            onSyndicationSuccess : function (e) {
                responseObject = [];
                Data.dynamicDS.clear();
                var response = (JSON.parse(getAllUsersWebRequest.responseText)).results; //Getting Response Object
                for (var i = 0; i < response.length; i++) {
                    responseObject.push(response[i].fullname);
                    Data.dynamicDS.add(); //Adding data to DataSet
                }
                Data.notify(Data.dynamicDS); //Refreshing DataSet
                Pages.pgAllUsers.repeatBox1.closePullItems();
                loadingDialog.close();
                Pages.pgAllUsers.show(animation);
            },
            onServerError : function (e) {
                alert(JSON.parse(e.message).error);
                loadingDialog.close();
            }
        });
    getAllUsersWebRequest.run(true);
}

function loginWR() {
    // This is the login request.This client gets username and password and create GET request to Parse class.
    loginWebRequest = new SMF.Net.WebClient({
            url : "https://api.parse.com/1/login?username=" + Pages.pgLogin.ebUsername.text + "&password=" + Pages.pgLogin.ebPassword.text,
            httpMethod : "GET",
            requestHeaders : [
                "X-Parse-Application-Id: Q69u7xeJnE2JREaYTVnE6Us5V3o5MZp25HUUq1aQ",
                "X-Parse-REST-API-Key: yssq2yMZwjQArUnNP7UbtZ33jcQGYfkWkfkt3x1q",
            ],
            onSyndicationSuccess : function (e) {
                //Fills pgUser page's design objects.

                Pages.pgUser.lblRetrieveFullName.text = JSON.parse(loginWebRequest.responseText).fullname;
                Pages.pgUser.lblRetrieveUserName.text = JSON.parse(loginWebRequest.responseText).username;

                //This Web Client uses for fetching User's image
                var getUserPhotoWebRequest = new SMF.Net.WebClient({
                        url : "https://api.parse.com/1/classes/PlayerProfile?where=" + JSON.stringify({
                            userId : JSON.parse(loginWebRequest.responseText).objectId
                        }),
                        httpMethod : "GET",
                        requestHeaders : [
                            "X-Parse-Application-Id: Q69u7xeJnE2JREaYTVnE6Us5V3o5MZp25HUUq1aQ",
                            "X-Parse-REST-API-Key: yssq2yMZwjQArUnNP7UbtZ33jcQGYfkWkfkt3x1q",
                        ],
                        onSyndicationSuccess : function (e) {
                            var imagePath = "noImg.png";
                            try {
                                imagePath = ((JSON.parse(getUserPhotoWebRequest.responseText).results[0]).picture).url;
                            } catch (ex) {}
                            var userPhoto = new SMF.UI.Image(copyExtender(keys.image, {
                                        image : imagePath,
                                        top : "8%",
                                        left : "30%",
                                        width : "40%",
                                        height : Device.screenHeight * 3 / 10,
                                        name : "userPhoto",
                                    }));
                            Pages.pgUser.add(userPhoto);
                            Pages.pgUser.show(animation);
                            loadingDialog.close();
                        },
                        onServerError : function (e) {
                            alert(JSON.parse(e.message).error);
                            loadingDialog.close();
                        }
                    });
                getUserPhotoWebRequest.run(true);
            },
            onServerError : function (e) {
                alert(JSON.parse(e.message).error);
                loadingDialog.close();
            }
        });
    loginWebRequest.run(true);
}