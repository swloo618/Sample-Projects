/*******PRODUCT DETAIL CONTAINER************/
var cntMainProductDetail = new SMF.UI.Container({
        width : '100%',
        height : '100%',
        borderWidth : 0,
        top : '0%',
        left : '0%',
        backgroundTransparent : true,
        layoutType : SMF.UI.LayoutType.linear,
        orientation : SMF.UI.Orientation.vertical,
        horizontalGap : 0,
        verticalGap : 0,
        autoSize : false
    });
/*******FILL PRODUCT DETAIL CONTAINER************/
function fillProductDetail() {
    cntMainProductDetail.clear();
    for (var i = 0; i < 5; i++) {
        var cntMainProduct = new SMF.UI.Container({
                width : '100%',
                height : '9%',
                borderWidth : 0,
                top : '0%',
                left : '0%',
                layoutType : SMF.UI.LayoutType.linear,
                orientation : SMF.UI.Orientation.horizontal,
                horizontalGap : 0,
                verticalGap : 0,
                autoSize : false,
                backgroundTransparent : false,
                fillColor : "white"
            });

        var lblProductDetail = new SMF.UI.Label({
                top : "0%",
                left : "0%",
                multipleLine : false,
                text : "",
                height : "100%",
                width : "50%",
                font : myFont,
                textAlignment : "right",
                fontColor : "#8E8E93",
                horizontalGap : globalDP
            });

        var lblProductDetailTitle = new SMF.UI.Label({
                top : "0%",
                left : "0%",
                multipleLine : false,
                text : "",
                height : "100%",
                width : "50%",
                font : myFont,
                fontColor : "#000000",
                horizontalGap : globalDP
            });

        var line1 = new SMF.UI.Line({
                top : "90%",
                left : "10%",
                width : "100%",
                height : "1px",
                dashed : false,
                borderWidth : "1px",
                borderColor : "#C8C7CC",
                alpha : 0.5
            });
        if (i == 1) {
            lblProductDetailTitle.text = "Product Name";
            lblProductDetail.text = productsData[productIndex].name;
        } else if (i == 2) {
            lblProductDetailTitle.text = "Release Date";
            lblProductDetail.text = months[parseInt(productsData[productIndex].releaseDate.substr(5, 7))] + " " + parseInt(productsData[productIndex].releaseDate.substr(8, 2)) + ", " + productsData[productIndex].releaseDate.substr(0, 4);
        } else if (i == 3) {
            lblProductDetailTitle.text = "Description";
            lblProductDetail.text = productsData[productIndex].description;
        } else if (i == 4) {
            lblProductDetailTitle.text = "Price";
            lblProductDetail.text = productsData[productIndex].cost + " USD";
        }
        if (i == 0) {
            cntMainProduct.backgroundTransparent = true;
        }
        cntMainProduct.add(lblProductDetailTitle);
        cntMainProduct.add(lblProductDetail);
        cntMainProductDetail.add(cntMainProduct);
        cntMainProductDetail.add(line1);
    }

    /*******CATEGORY AND SUPPLIER CONTAINER************/
    var supOrCat = ["", "Supplier", "Category"];

    for (var i = 0; i < 3; i++) {

        var cntMainProduct = new SMF.UI.Container({
                width : '100%',
                height : '9%',
                borderWidth : 0,
                top : '0%',
                left : '0%',
                layoutType : SMF.UI.LayoutType.linear,
                orientation : SMF.UI.Orientation.horizontal,
                horizontalGap : 0,
                verticalGap : 0,
                autoSize : false,
                backgroundTransparent : false,
                fillColor : "white"
            });

        var txtButton = new SMF.UI.TextButton({
                width : "90%",
                height : "100%",
                touchEnabled : true,
                text : supOrCat[i],
                roundedEdge : 0,
                horizontalGap : globalDP,
                textAlignment : "left",
                fontColor : "#000000",
                fillColor : "#FFFFFF",
                pressedFillColor : "#FFFFFF",
                pressedFontColor : "#000000",
                onPressed : function (e) {
                    titleText = supOrCat[this.id];
                    if (this.id == 1) {
                        fillSupplier();
                        Pages.pgProductDetails.show(SMF.UI.MotionEase.none, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false);
                    } else if (this.id == 2) {
                        fillCategory();
                        Pages.pgProductDetails.show(SMF.UI.MotionEase.none, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false);
                    }
                }
            });

        var listArrow = new SMF.UI.Image({
                width : "10%",
                height : "100%",
                image : "arrow_list.png",
                changeAnimation : "fade",
                imageFillType : SMF.UI.ImageFillType.aspectFit
            });

        var line1 = new SMF.UI.Line({
                top : "90%",
                left : "10%",
                width : "100%",
                height : "1px",
                dashed : false,
                borderWidth : "1px",
                borderColor : "#C8C7CC",
                alpha : 0.5
            });

        if (i == 0) {
            txtButton.width = "100%";
            txtButton.fillColor = "#EFEFF4";
            txtButton.touchEnabled = false;
        }
        txtButton.id = i;
        cntMainProduct.add(txtButton);
        if (i != 0) {
            cntMainProduct.add(listArrow);
        }
        cntMainProductDetail.add(cntMainProduct);
        cntMainProductDetail.add(line1);
    }
}