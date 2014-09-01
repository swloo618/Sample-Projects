var lang = {};
function notifyLang() {
    for (var keyword in lang) {
        if (lang.hasOwnProperty(keyword)) {
            Data.notify('lang["' + keyword + '"]');
            Data.notify("lang['" + keyword + "']");
            Data.notify('lang.' + keyword);
        }
    }
}
function changeLang(languageCode, doNotify) {
    switch (languageCode) {
    case "en":
        lang = {
            "cancel" : "Cancel",
            "copy" : "Copy",
            "copyURL" : "Copy URL",
            "cut" : "Cut",
            "no" : "No",
            "ok" : "OK",
            "paste" : "Paste",
            "selectAll" : "Select All",
            "untitled" : "Untitled",
            "yes" : "Yes",
            "sureToDelete": "Are you sure to delete?",
            "delete": "Delete"
        };
        break;
    case "tr":
        lang = {
            "cancel" : "İptal",
            "copy" : "Kopyala",
            "copyURL" : "Adresi Kopyala",
            "cut" : "Kes",
            "no" : "Hayır",
            "ok" : "Tamam",
            "paste" : "Yapıştır",
            "selectAll" : "Tümünü Seç",
            "untitled" : "Başlıksız",
            "yes" : "Evet",
            "sureToDelete": "Silmek istediğinize emin misiniz?"
            "delete": "Sil"
        };
        break;
    case "de":
        lang = {
            "cancel" : "Stornieren",
            "copy" : "Kopieren",
            "copyURL" : "URL Kopieren",
            "cut" : "Schneiden",
            "no" : "Nein",
            "ok" : "Okay",
            "paste" : "Einfügen",
            "selectAll" : "Alle Auswählen",
            "untitled" : "Ohne Adelsrang",
            "yes" : "Ja",
            "sureToDelete": "Sind Sie sicher zu löschen?",
            "delete": "Löschen"
        };
        break;
    case "fi":
        lang = {
            "cancel" : "Keskeytä",
            "copy" : "Kopioi",
            "copyURL" : "Kopioi URL",
            "cut" : "Leikkaa",
            "no" : "Ei",
            "ok" : "OK",
            "paste" : "Liitä",
            "selectAll" : "Valitse Kaikki",
            "untitled" : "Nimetön",
            "yes" : "Kyllä",
            "sureToDelete": "Haluatko varmasti poistaa?",
            "delete": "poistaa"
        };
        break;
    }
    if (doNotify) {
        notifyLang();
    }
}