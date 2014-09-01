function Demo04_Self_OnShow(e) {
    Pages.Demo04.cntMain.contTitle.lblTitle.text = titleHeader;
}
var responsearray = {
    "Immediate(0 seconds)" : 0,
    "5 - second delay" : 5,
    "10 - second delay" : 10,
    "30 - second delay" : 15
};
var responsetime = Object.keys(responsearray);
function Demo04_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Pages.back();
    }
}
function Demo04_tbStart_OnPressed(e) {
    Wait();
}
function Demo04_tbImmediate_OnPressed(e) {
    pick(
        responsetime,
        function (e) {
        duration = responsearray[responsetime[e.index]];
        Pages.Demo04.cntMain.cntAction.tbImmediate.text = responsetime[e.index];
    }, function () {}, function () {});
}