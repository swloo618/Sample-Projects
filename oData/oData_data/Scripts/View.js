/**********Page1******************/
var searchProducts = new SMF.UI.SearchBar({
        top : "0%",
        left : "0%",
        width : "100%",
        height : "8%",
        placeHolder : "Search",
        text : "",
        tintColor : "black",
        actionView : true,
        setShowsCancel : true, // iOS Only
        stickToNavigationBar : true, // iOS Only
        setActionView : true, // Android Only
        onTextChange : function (e) {
            tempDataSource = searchFor(this.text, productsData);
            repeatBox.dataSource = tempDataSource;
            repeatBox.refresh();
            repeatBox.onRowRender = function (e) {
                repeatBox.controls[0].text = tempDataSource[e.rowIndex].name;
                repeatBox.controls[1].text = tempDataSource[e.rowIndex].cost;
            };
        }
    });

var addButton = new SMF.UI.ImageButton({
        width : "17%",
        height : "17%",
        left : "75%",
        top : "80%",
        imageFillType : SMF.UI.ImageFillType.aspectFit,
        defaultImage : "active_button.png",
        highlightedImage : "",
        text : "",
        onPressed : function (e) {
            Pages.pgAdd.show(SMF.UI.MotionEase.none, SMF.UI.TransitionEffect.downToUp, SMF.UI.TransitionEffectType.push, false, true);
        }
    });

/***************************************/
/**********REPEATBOX VIEWGROUP**********/
/***************************************/
var rTopValue = "0%";
var rHeightValue = "92%";
if (Device.deviceOS != "Android") {
    rTopValue = "8%";
    rHeightValue = "92%";
} else {
    rTopValue = "0%";
    rHeightValue = "100%"
}

var repeatBox = new SMF.UI.RepeatBox({
        width : "100%",
        height : rHeightValue,
        left : 0,
        top : rTopValue,
        showScrollbar : true,
        backgroundTransparent : true,
        borderWidth : 1,
        onSelectedItem : function (e) {
            if (tempDataSource.length != 0) {
                productIndex = tempDataSource[e.rowIndex].id;
                tempDataSource = [];
            } else {
                productIndex = productsData[e.rowIndex].id;
            }
            fillProductDetail();
            //fillProductPrice();
            Dialogs.Dialoading.show();
            getCategoryId.URL = rootURL + "Products(" + productIndex + ")/Category";
            getCategoryId.run(true);
        }
    });

repeatBox.itemTemplate.height = "80dp";
repeatBox.itemTemplate.imageFillType = SMF.UI.ImageFillType.stretch;

var myFont = new SMF.UI.Font({
        name : "Arial",
        size : "8pt",
        italic : false
    });

var lblProductName = new SMF.UI.Label({
        top : "20%",
        left : "5%",
        multipleLine : false,
        height : "40%",
        width : "50%",
        font : myFont,
        touchEnabled : false,
        textAlignment : SMF.UI.Alignment.topLeft
    });

var lblProductCost = new SMF.UI.Label({
        top : "20%",
        left : "70%",
        multipleLine : false,
        height : "35%",
        width : "25%",
        font : myFont,
        touchEnabled : false,
        textAlignment : "right"
    });

var lblCostUnit = new SMF.UI.Label({
        top : "52%",
        left : "70%",
        multipleLine : false,
        height : "15%",
        width : "25%",
        text : "USD",
        font : myFont,
        touchEnabled : false,
        textAlignment : "right"
    });

lblCostUnit.font.size = "5pt";
lblProductCost.font.size = "10pt";

repeatBox.itemTemplate.add(lblProductName);
repeatBox.itemTemplate.add(lblProductCost);
repeatBox.itemTemplate.add(lblCostUnit);
/***************************************/
/********pgAdd**************************/
var sv = new SMF.UI.ScrollView({
        height : '100%',
        width : '100%',
        top : '0%',
        left : 0,
        layoutType : SMF.UI.LayoutType.linear,
        orientation : SMF.UI.Orientation.vertical,
        horizontalGap : 0,
        verticalGap : 0,
        borderWidth : 0,
        showVerticalScrollbar : false,
        autoSize : true
    });

var lblBasicInfo = new SMF.UI.Label({
        top : "0%",
        left : "0%",
        width : "100%",
        height : '44dp',
        multipleLine : false,
        text : "BASIC INFO",
        font : myFont,
        horizontalGap : 8,
        textAlignment : SMF.UI.Alignment.bottomLeft
    });
lblBasicInfo.font.size = "6pt";
var lblDiscontinued = new SMF.UI.Label({
        top : "0%",
        left : "0%",
        width : "100%",
        height : '44dp',
        multipleLine : false,
        text : "DISCONTINUED",
        font : myFont,
        horizontalGap : 8,
        textAlignment : SMF.UI.Alignment.bottomLeft
    });
lblDiscontinued.font.size = "6pt";
var lblSupAndCat = new SMF.UI.Label({
        top : "0%",
        left : "0%",
        width : "100%",
        height : '44dp',
        multipleLine : false,
        text : "SUPPPLIER & CATEGORY",
        font : myFont,
        horizontalGap : 8,
        textAlignment : SMF.UI.Alignment.bottomLeft
    });
lblSupAndCat.font.size = "6pt";
/*******BASIC INFO CONTAINER************/
var cnt = new SMF.UI.Container({
        width : '100%',
        borderWidth : 0,
        layoutType : SMF.UI.LayoutType.linear,
        orientation : SMF.UI.Orientation.vertical,
        backgroundTransparent : true,
        horizontalGap : 0,
        verticalGap : 0,
        autoSize : true
    });
/*******DISCONTINUED CONTAINER************/
var cnt2 = new SMF.UI.Container({
        width : '100%',
        height : '88dp',
        borderWidth : 0,
        layoutType : SMF.UI.LayoutType.linear,
        orientation : SMF.UI.Orientation.vertical,
        backgroundTransparent : false,
        fillColor : "#FFFFFF",
        horizontalGap : 0,
        verticalGap : 0,
        autoSize : false
    });
/*******SUPPLIER AND CATEGORY CONTAINER************/
var cnt3 = new SMF.UI.Container({
        width : '100%',
        height : '80dp',
        borderWidth : 0,
        layoutType : SMF.UI.LayoutType.linear,
        orientation : SMF.UI.Orientation.vertical,
        backgroundTransparent : true,
        horizontalGap : 0,
        verticalGap : 0,
        autoSize : true
    });
/*******SAVE AND CANCEL BUTTONS CONTAINER************/
var cnt4 = new SMF.UI.Container({
        width : '100%',
        borderWidth : 0,
        layoutType : SMF.UI.LayoutType.linear,
        orientation : SMF.UI.Orientation.horizontal,
        backgroundTransparent : false,
        fillColor : "#FFFFFF",
        horizontalGap : 0,
        verticalGap : 0,
        autoSize : true
    });

var cntStars = new SMF.UI.Container({
        width : '100%',
        height : '44dp',
        borderWidth : 0,
        layoutType : SMF.UI.LayoutType.linear,
        orientation : SMF.UI.Orientation.horizontal,
        backgroundTransparent : false,
        fillColor : "#FFFFFF",
        horizontalGap : 0,
        verticalGap : 0,
        autoSize : false
    });

var cntSwitch = new SMF.UI.Container({
        width : '100%',
        height : '44dp',
        borderWidth : 0,
        backgroundTransparent : true,
        horizontalGap : 0,
        verticalGap : 0,
        autoSize : false
    });

var placeHolderText = ["Product Name", "Product Description", "Release Date", "Price (USD)"];
var pickerText = ["Supplier", "Category"];
var saveOrCancel = ["Save", "Cancel"];
/*******FILL BASIC INFO CONTAINER************/
for (var i = 0; i < 5; i++) {

    var line = new SMF.UI.Line({
            top : "90%",
            left : "10%",
            width : "100%",
            height : "1px",
            dashed : false,
            borderWidth : "1px",
            borderColor : "#C8C7CC",
            alpha : 0.5
        });

    cnt.add(line);

    var edtBox = new SMF.UI.EditBox({
            width : '100%',
            height : '44dp',
            borderWidth : 0,
            horizontalGap : 8,
            placeHolder : placeHolderText[i],
            text : "",
            roundedEdge : 0
        });
    if (i == 2) {
    
        var lblTitle = new SMF.UI.Label({
                width : "100%",
                height : "44dp",
                multipleLine : false,
                horizontalGap : 8,
                text : placeHolderText[i],
                font : myFont,
                borderWidth : 0,
                fontColor : "#C0C0C0",
                fillColor : "#FFFFFF",
                backgroundTransparent : false,
                textAlignment : "left",
                onTouchEnded : function (e) {
                    SMF.UI.showDatePicker({
                        mask : "yyyy-MM-dd",
                        currentDate : new Date(),
                        minDate : new Date("1900-01-01"),
                        maxDate : new Date(),
                        showWorkingDate : true,
                        displayMode : 2,
                        onSelect : function (e) {
                            var dateStr = "";
                            dateStr = ((e.date).getMonth() + 1) + "-" + (e.date).getDate() + "-" + (e.date).getFullYear();
                            cnt.controls[5].text = dateStr;
                            cnt.controls[5].fontColor = "#000000";
                            pRelDate = dateStr;
                        }
                    });
                }
            });
        cnt.add(lblTitle);
    } else if (i == 3) {
        //edtBox.textFormatType = SMF.UI.TextFormatType.currency;
        //edtBox.mask = "###.###";
        edtBox.keyboardType = SMF.UI.KeyboardType.decimalPad;
        cnt.add(edtBox);
    } else if (i == 0 || i == 1) {
        cnt.add(edtBox);
    }
    if (i == 4) {
        var lblTitle = new SMF.UI.Label({
                width : "25%",
                height : "44dp",
                multipleLine : false,
                horizontalGap : 8,
                text : "Rating:",
                font : myFont,
                borderWidth : 0,
                fontColor : "#000000",
                textAlignment : "left"
            });
        cntStars.add(lblTitle);
        var starImage = new SMF.UI.Slider({
                top : "0%",
                left : "0%",
                width : "70%",
                height : "44dp",
                valueRangeMin : 0,
                valueRangeMax : 5,
                value : 0, //gives initial value
                stepSize : 1,
                showThumbnail : true,
                thumbnailColor : 'green'
            });
        cntStars.add(starImage);
        pRating = starImage.value;
        cnt.add(cntStars);
    }
}
/*******FILL DISCONTINUED CONTAINER************/
for (var i = 0; i < 2; i++) {
    var line = new SMF.UI.Line({
            top : "90%",
            left : "10%",
            width : "100%",
            height : "1px",
            dashed : false,
            borderWidth : "1px",
            borderColor : "#C8C7CC",
            alpha : 0.5
        });
    cnt2.add(line);
    if (i == 0) {
        var lblTitle = new SMF.UI.Label({
                width : "40%",
                height : "44dp",
                top : "0%",
                left : "0%",
                multipleLine : false,
                horizontalGap : 8,
                text : "Discontinued:",
                font : myFont,
                borderWidth : 0,
                fontColor : "#000000",
                textAlignment : "left"
            });
        var switchBtn = new SMF.UI.SwitchButton({
                top : "6dp",
                left : "82%",
                width : "30%",
                height : "44dp",
                touchEnabled : true,
                onChange : function (e) {
                    if (!checkDiscont) {
                        cnt2.controls[3].touchEnabled = true;
                        cnt2.controls[3].fontColor = "#000000";
                        checkDiscont = true;
                    } else {
                        cnt2.controls[3].touchEnabled = false;
                        cnt2.controls[3].fontColor = "#C0C0C0";
                        cnt2.controls[3].text = "Discontinued Date";
                        checkDiscont = false;
                    }
                }
            });
        cntSwitch.add(lblTitle);
        cntSwitch.add(switchBtn);
        cnt2.add(cntSwitch);
    } else if (i == 1) {
        var lblTitle = new SMF.UI.Label({
                width : "100%",
                height : "44dp",
                multipleLine : false,
                horizontalGap : 8,
                text : "Discontinued Date",
                font : myFont,
                borderWidth : 0,
                fontColor : "#C0C0C0",
                textAlignment : "left",
                touchEnabled : false,
                onTouchEnded : function (e) {
                    SMF.UI.showDatePicker({
                        mask : "yyyy-MM-dd",
                        currentDate : new Date(),
                        minDate : new Date("1900-01-01"),
                        maxDate : new Date(),
                        showWorkingDate : true,
                        displayMode : 2,
                        onSelect : function (e) {
                            var dateStr = "";
                            dateStr = ((e.date).getMonth() + 1) + "-" + (e.date).getDate() + "-" + (e.date).getFullYear();
                            cnt2.controls[3].text = dateStr;
                            cnt2.controls[3].fontColor = "#000000";
                            pDisDate = dateStr;
                        }
                    });
                }
            });
        cnt2.add(lblTitle);
    }
}
/*******FILL SUPPLIER AND CATEGORY CONTAINER************/
for (var i = 0; i < 2; i++) {
    var line = new SMF.UI.Line({
            top : "90%",
            left : "10%",
            width : "100%",
            height : "1px",
            dashed : false,
            borderWidth : "1px",
            borderColor : "#C8C7CC",
            alpha : 0.5
        });
    cnt3.add(line);

    var txtButton = new SMF.UI.TextButton({
            width : "100%",
            height : "44dp",
            left : "0%",
            top : "0%",
            touchEnabled : true,
            text : pickerText[i],
            roundedEdge : 0,
            horizontalGap : 8,
            fontColor : "#C0C0C0",
            fillColor : "#FFFFFF",
            pressedFontColor : "#000000",
            pressedFillColor : "#FFFFFF",
            textAlignment : "left",
            onPressed : function (e) {
                if (this.id == 0) {
                    pickerContent = supplier;
                    pickerBtnIndex = 1;
                } else {
                    pickerContent = category;
                    pickerBtnIndex = 3;
                }
                pick(
                    pickerContent,
                    selectedIndex,
                    function (e) {
                    cnt3.controls[pickerBtnIndex].text = pickerContent[e.index];
                    cnt3.controls[pickerBtnIndex].fontColor = "#000000";
                    selectedIndex = e.index;
                    if (pickerBtnIndex == 1) {
                        supId = e.index;
                        supName = cnt3.controls[pickerBtnIndex].text;
                        supStreet = supplierDetails[e.index].Street;
                        supCity = supplierDetails[e.index].City;
                        supState = supplierDetails[e.index].State;
                        supZipCode = supplierDetails[e.index].ZipCode;
                        supCountry = supplierDetails[e.index].Country;
                    } else if (pickerBtnIndex == 3) {
                        catId = e.index;
                        catName = cnt3.controls[pickerBtnIndex].text;
                    }
                },
                    function () {},
                    function () {},
                    Device.touchX,
                    Device.touchY);
            }
        });
    txtButton.id = i;
    cnt3.add(txtButton);
}

sv.add(lblBasicInfo);
sv.add(cnt);
sv.add(lblDiscontinued);
sv.add(cnt2);
sv.add(lblSupAndCat);
sv.add(cnt3);
sv.add(cnt4);
/*******************************************/