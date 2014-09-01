//This function gives alert for any javascript error or exception.If It is necessary, You can open this code block.
//function Global_Events_OnError(e) {
//	switch (e.type) {
//	case "Server Error":
//	case "Size Overflow":
//		alert(lang.networkError);
//		break;
//	default: 
//		SES.Analytics.eventLog("error", JSON.stringify(e)); 
//		alert(lang.applicationError)
//		break;
//	}
//}

function Global_Events_OnStart(e)
{
    changeLang(Device.language, true);
}