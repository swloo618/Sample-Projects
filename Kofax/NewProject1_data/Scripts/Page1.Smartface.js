
var imageToProcess;
var iUri;
var processedImageUri;
function Page1_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Application.exit();
    }
}
function showLoading(infoText){
    if (infoText){
        Dialogs.dlgLoading.LabelInfo.text = infoText;
    }
    Dialogs.dlgLoading.show();
}
function Page1_TextButton1_OnPressed(e) {
    if (!processedImageUri){
        alert(info.noProcessedImage);
        return;
    }
    var wc = new SMF.Net.WebClient();
    wc.httpMethod = "PUT";
    wc.URL = "http://77.75.34.66/api/Checks";
    wc.addRequestHeader("Content-Type", "image/tiff");
    if (Device.deviceOS == "iOS") {
        var f = new SMF.IO.File(SMF.IO.applicationDataDirectory, processedImageUri);
    } else {
        var f = new SMF.IO.File(processedImageUri);
    }
    showLoading(info.fetch);
    wc.request = f;
    wc.onSyndicationSuccess = function () {
        alert(parseJson(wc.responseText));
        alert(wc.responseText);
        Dialogs.dlgLoading.close();
        Pages.Page1.LabelInfo.text = info.capture;
    }
    wc.onServerError = function(e){
        alert("Server error: " + JSON.stringify(e));
        Dialogs.dlgLoading.close();
    }
    wc.run(true);
}
function Page1_TextButton2_OnPressed(e) {
    KOFAX.openCaptureScreen({
        options : {
            stabilityDelay : 50,
            levelIndicator : true,
            doContinuousMode : false,
            setPageDetect : false,
            levelThresholdPitch : 20,
            levelThresholdRoll : 20,
            deviceDeclinationPitch : 7,
            deviceDeclinationRoll : 7,
            flash : 1, /* 0 on 1 off 2 auto */
            showFlashControl : false,
            /*overlayImage:"default_androidicon.png"*/
        },
        onCapture : function (e) {
            Pages.Page1.Image1.image = e.photoUri;
            iUri = e.photoUri;
            Pages.Page1.LabelInfo.text = info.afterCapture;
        },
        onCancel : function (e) {
            alert("Cancelled");
        },
        onError : function (e) {
            alert('error: ' + e.message);
            Pages.Page1.ActivityIndicator1.visible = false;
            Pages.Page1.LabelInfo.text = info.afterCapture;
        }
    });
}
function Page1_TextButton3_OnPressed(e) {
    if (!checkLicense()){
        return;
    }
    if (!iUri){
        alert(info.noImage);
        return;
    }
    showLoading(info.process);
    try {
        KOFAX.processImage({
            image : iUri,
            imagePerfectionProfile : "_DeviceType_2_DoSkewCorrectionAlt__DoCropCorrection__Do90DegreeRotation_4_DoBinarization__DoScaleBWImageToDPI_150__DoSharpen_4_",
            onSuccess : function (e) {
                processedImageUri = e.photoUri;
                Pages.Page1.Image1.image = processedImageUri;
                Pages.Page1.LabelInfo.text = info.afterProcess;
                Dialogs.dlgLoading.close();
                //alert("Metadata json string: " + JSON.stringify(e.metaData));
                // parse json here, metadata includes height, width, dpi, textlines, ocr data etc. values
            },
            onError : function (e) {
                alert('error: ' + e.message);
                Pages.Page1.ActivityIndicator1.visible = false;
            }
        });
    } catch (ex) {
        alert(ex);
    }
}
function Page1_Self_OnShow(e) {
try{
    KOFAX.setSDKLicense(SDK_LICENSE);
    }catch(ex){alert(ex);}
    Pages.Page1.LabelInfo.text = info.capture;
}
function Page1_ImageButton1_OnPressed(e){
    alert(info.info);
}
function Page1_TextButton1_OnShow(e){
}