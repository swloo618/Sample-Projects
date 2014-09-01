var url = "http://host/webservicedemo.asmx";
// DEMO 1
function HelloWorld() {
    var pl = new SOAPClientParameters();
    SOAPClient.invoke(url, "HelloWorld", pl, true, HelloWorld_callBack);
}
function HelloWorld_callBack(r) {
    alert(r);
}
// DEMO 2
function HelloTo() {
    var pl = new SOAPClientParameters();
    pl.add("name", Pages.Demo02.cntMain.cntAction.edtName.text);
    SOAPClient.invoke(url, "HelloTo", pl, true, HelloTo_callBack);
}
function HelloTo_callBack(r) {
    alert(r);
}
// DEMO 3
function ServerTime() {
    var pl = new SOAPClientParameters();
    SOAPClient.invoke(url, "ServerTime", pl, true, ServerTime_callBack);
}
function ServerTime_callBack(st) {
    var ct = new Date();
    alert("Server: " + st.toLocaleString() + "\r\n[Client: " + ct.toLocaleString() + "]");
}
// DEMO 4
function Wait() {
    var pl = new SOAPClientParameters();
    pl.add("seconds", duration);
    SOAPClient.invoke(url, "Wait", pl, true, Wait_callBack);
}
function Wait_callBack(r) {
    alert("Call to \"Wait\" method completed");
}
// DEMO 5
function ThrowException() {
    try {
        var pl = new SOAPClientParameters();
        var e = SOAPClient.invoke(url, "ThrowException", pl, false);
    } catch (e) {
        alert("An error has occured!");
    }
}
function ThrowExceptionAsync() {
    var pl = new SOAPClientParameters();
    SOAPClient.invoke(url, "ThrowException", pl, true, ThrowExceptionAsync_callBack);
}
function ThrowExceptionAsync_callBack(e) {
    if (e.constructor.toString().indexOf("function Error()") !== -1);
    alert("An error has occured!\r\n\r\n" + e.description + "\r\n\r\n[Error code: " + e.number + "]");
}
// DEMO 6
function SyncSample() {
    var pl = new SOAPClientParameters();
    pl.add("seconds", 5);
    var starttime = (new Date).toLocaleTimeString();
    var r = SOAPClient.invoke(url, "Wait", pl, false);
    alert("Operation start time: " + starttime + "\r\nOperation end time: " + (new Date).toLocaleTimeString());
}
// DEMO 7
function GetUser() {
    var username = Pages.Demo07.cntMain.cntAction.edtUserName.text;
    var pl = new SOAPClientParameters();
    pl.add("username", username);
    SOAPClient.invoke(url, "GetUser", pl, true, GetUser_callBack);
}
function GetUser_callBack(u) {
    if (u == null)
        alert("No user found.\r\n\r\nEnter a username and repeat search.");
    else
        alert(
            "ID: " + u.Id + "\r\n" +
            "USERNAME: " + u.Username + "\r\n" +
            "PASSWORD: " + u.Password + "\r\n" +
            "EXPIRATION: " + u.ExpirationDate.toLocaleString());
}
// DEMO 8
function GetUsers() {
    var pl = new SOAPClientParameters();
    SOAPClient.invoke(url, "GetUsers", pl, true, GetUsers_callBack);
}
function GetUsers_callBack(ul) {
    alert("Trovati " + ul.length + " utenti:");
    for (var i = 0; i < ul.length; i++)
        alert(
            "User No. " + (i + 1) + "\r\n\r\n" +
            "ID: " + ul[i].Id + "\r\n" +
            "USERNAME: " + ul[i].Username + "\r\n" +
            "PASSWORD: " + ul[i].Password + "\r\n" +
            "EXPIRATION: " + ul[i].ExpirationDate.toLocaleString());
}
// DEMO 9
function GetUserList() {
    var pl = new SOAPClientParameters();
    SOAPClient.invoke(url, "GetUserList", pl, true, GetUserList_callBack);
}
function GetUserList_callBack(ul) {
    alert("Trovati " + ul.length + " utenti:");
    for (var i = 0; i < ul.length; i++)
        alert(
            "User No. " + (i + 1) + "\r\n\r\n" +
            "ID: " + ul[i].Id + "\r\n" +
            "USERNAME: " + ul[i].Username + "\r\n" +
            "PASSWORD: " + ul[i].Password + "\r\n" +
            "EXPIRATION: " + ul[i].ExpirationDate.toLocaleString());
}
// DEMO 10
function GetCars() {

    var companies = ["Volkswagen", "FIAT", "BMW"];
    var companyValues = ["vw", "f", "bmw"];
    pick({
        items : companies,
        OnItemSelected : function (e) {
            var pl = new SOAPClientParameters();
            pl.add("companyid", companyValues[e.index]);
            Pages.Demo10.cntMain.cntAction.tbSelectCompany.text = companies[e.index];
            Pages.Demo10.cntMain.cntAction.tbSelectModel.text = "Select a model";
            Pages.Demo10.cntMain.cntAction.tbSelectModel.touchEnabled = true;
            SOAPClient.invoke(url, "GetCars", pl, true, GetCars_callBack);
        }
    });
}
var carList = [];
function GetCars_callBack(cl) {
    carList = [];
    for (var i = 0; i < cl.length; i++) {
        carList.push(cl[i].Label.toString());
    }
    carList.join("\r\n");
}
// DEMO 11
function GetSoapResponse() {
    var pl = new SOAPClientParameters();
    SOAPClient.invoke(url, "HelloWorld", pl, true, GetSoapResponse_callBack);
}
function GetSoapResponse_callBack(r, soapResponse) {

    alert((new XMLSerializer()).serializeToString(soapResponse));
}
// DEMO 12
function User(id, username, password, expirationdate) {
    this.Id = id;
    this.Username = username;
    this.Password = password;
    this.ExpirationDate = expirationdate;
}
function SendSamples_callBack(r) {
    if (r.constructor.toString().indexOf("function Error()") != -1)
        alert("ERROR\r\n\r\n" + r.description + "\r\n\r\n[" + r.number + "]");
    else
        alert(r);
}
function SendSample1() {
    var p1 = "This is a string";
    var p2 = 34654;
    var p3 = 3.14159;
    var p4 = true;
    var p5 = new Date();
    var pl = new SOAPClientParameters();
    pl.add("p1", p1);
    pl.add("p2", p2);
    pl.add("p3", p3);
    pl.add("p4", p4);
    pl.add("p5", p5);
    SOAPClient.invoke(url, "SendSample1", pl, true, SendSamples_callBack);
}
function SendSample2() {
    var list = new Array();
    list[0] = "element 1";
    list[1] = "element 2";
    list[2] = "element 3";
    list[3] = "element 4";
    var pl = new SOAPClientParameters();
    pl.add("list", list);
    SOAPClient.invoke(url, "SendSample2", pl, true, SendSamples_callBack);
}
function SendSample3() {
    var list = new Array();
    list[0] = 235;
    list[1] = 9876;
    list[2] = 124;
    list[3] = 79865;
    list[4] = 53;
    var pl = new SOAPClientParameters();
    pl.add("list", list);
    SOAPClient.invoke(url, "SendSample3", pl, true, SendSamples_callBack);
}
function SendSample4a() {
    var u = new User(34, "Administrator", "p@ss01!", new Date());
    var pl = new SOAPClientParameters();
    pl.add("user", u);
    SOAPClient.invoke(url, "SendSample4", pl, true, SendSamples_callBack);
}
function SendSample4b() {
    var u = new Object();
    u.Id = 5271;
    u.Username = "Guest1";
    u.Password = "GuestP@ss!";
    u.ExpirationDate = new Date();
    u.ExpirationDate.setMonth(u.ExpirationDate.getMonth() + 1);
    var pl = new SOAPClientParameters();
    pl.add("user", u);
    SOAPClient.invoke(url, "SendSample4", pl, true, SendSamples_callBack);
}
function SendSample4c() {
    var u = new Array();
    u["Id"] = 654;
    u["Username"] = "Guest2";
    u["Password"] = "GuestP@ss!";
    u["ExpirationDate"] = new Date();
    u["ExpirationDate"].setMonth(u["ExpirationDate"].getMonth() + 1);
    var pl = new SOAPClientParameters();
    pl.add("user", u);
    SOAPClient.invoke(url, "SendSample4", pl, true, SendSamples_callBack);
}
function SendSample5() {
    var ul = new Array();
    ul[0] = new User(52342, "User1", "User1P@ss!", new Date());
    ul[1] = new User(453, "User2", "User2P@ss!", new Date());
    ul[2] = new User(5756, "User3", "User3P@ss!", new Date());
    ul[3] = new User(5431, "User4", "User4P@ss!", new Date());
    var pl = new SOAPClientParameters();
    pl.add("userlist", ul);
    SOAPClient.invoke(url, "SendSample5", pl, true, SendSamples_callBack);
}