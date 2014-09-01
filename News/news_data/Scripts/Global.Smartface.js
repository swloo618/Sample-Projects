var resObj = NULL;
var row = NULL;
function Global_Events_OnStart(e) {
    changeLang(Device.language, true);
    //define the length of the news initially.
    newsLength = 0;
    //clears the dataset to get new ones.
    Data.Dataset1.clear();
    //runs the JSON WebClient to fetch the news.
    SMF.Net.WebClient1.run(true);
}
function arrangeDataset() {
//Arranging Dataset to create rows for repeatBox object.
    var i;
    for (i = 0; i < 10; i++) {
        Data.Dataset1.add();
        Data.Dataset1.commit();
    }
}