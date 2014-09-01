

function Global_Events_OnStart(e) {
    changeLang(Device.language, true);
}
function Global_Events_OnError(e) {
    switch (e.type) {
        case "Server Error":
        case "Size Overflow":
        alert(JSON.stringify(e));
        break;
        default:
        SES.Analytics.eventLog("error", JSON.stringify(e));
        alert(JSON.stringify(e));
        break;
    }
}

var SDK_LICENSE = "YOUR_SDK_LICENSE";

var info  = {
    capture:"Press Capture button to capture a check.", 
    afterCapture:"Press Process button to optimize captured image.",
    process:"Processing...",
    afterProcess:"Press Fetch button to get text info of processed image.",
    fetch:"Fethcing data...",
    info:"This is a demo app for demonstrating the use of Kofax library. If you want to use this library please contact us at http://www.smartface.io/contact-us/",
    nosdk:"An SDK License needed for this feature.",
    noImage:"Please capture an image first.",
    noProcessedImage:"Please process the image first."
};

function checkLicense(){
    if (SDK_LICENSE == "YOUR_SDK_LICENSE"){
        alert(info.nosdk);
        return false;
    }
    return true;
}

function parseJson(response){
    result = "";
    try{
        var obj = JSON.parse(response);
        var fields = obj.fields;
        for (var i = 0; i < fields.length; i++){
            if (fields[i].text != "" && fields[i].valid == true){
                result += fields[i].name + ": " + fields[i].text + "\n";
            }
        }
    }catch(ex){alert(ex);}
    return result;
}