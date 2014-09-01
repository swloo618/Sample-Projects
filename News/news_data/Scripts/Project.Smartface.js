function Project_WebClient1_OnSyndicationSuccess(e){
//When the JSON object is fetched, parses the json for repeatbox objects.
    resObj = JSON.parse(SMF.Net.WebClient1.responseText);
 arrangeDataset();
}