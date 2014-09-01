var company = ["wolkwagen", "fiat", "bmw"];
var wolks = ["passat", "polo", "golf", "lupo"];
var fiat = ["stilo", "punto", "500"];
var bmw = ["X5", "520"];
var model = [];
function Demo10_Self_OnShow(e) {
    Pages.Demo10.cntMain.contTitle.lblTitle.text = titleHeader;
}
function Demo10_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Pages.back();
    }
}
function Demo10_tbSelectCompany_OnPressed(e) {
   /* pick(
        company,
        function (e) {
        Pages.Demo10.cntMain.cntAction.tbSelectCompany.text = company[e.index];
        Pages.Demo10.cntMain.cntAction.tbSelectModel.text = "Select a model"
            Pages.Demo10.cntMain.cntAction.tbSelectModel.touchEnabled = true;
        if (e.index == 0) {
            model = wolks;
        } else if (e.index == 1) {
            model = fiat;
        } else if (e.index == 2) {
            model = bmw;
        }
    },
        function () {},
        function () {});*/
        GetCars();
}
function Demo10_tbSelectModel_OnPressed(e) {
    pick(
        carList,
        function (e) {
        Pages.Demo10.cntMain.cntAction.tbSelectModel.text = carList[e.index];
    }, function () {}, function () {});
}
function Demo10_TextButton3_OnPressed(e) {
    pick(
        company,
        function (e) {
        Pages.Demo10.cntMain.cntAction.ImageButton2.text = company[e.index];
        Pages.Demo10.cntMain.cntAction.ImageButton1.text = "Select a model"
            Pages.Demo10.cntMain.cntAction.ImageButton1.touchEnabled = true;
        GetCars();
        if (e.index == 0) {
            model = wolks;
        } else if (e.index == 1) {
            model = fiat;
        } else if (e.index == 2) {
            model = bmw;
        }
    },
        function () {},
        function () {});
}