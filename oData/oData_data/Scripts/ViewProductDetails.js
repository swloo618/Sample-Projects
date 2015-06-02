/*******PRODUCT DETAIL CONTAINER************/
var cntSupplierProductDetail = new SMF.UI.Container({
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

var supplierDetailsText = ["", "Name", "Street", "City", "ZIP Code", "Country"];

function fillSupplier() {
    cntSupplierProductDetail.clear();
    for (var i = 0; i < 6; i++) {
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
            lblProductDetailTitle.text = supplierDetailsText[i];
            lblProductDetail.text = supplier[getSupId];
        } else if (i != 0) {
            lblProductDetailTitle.text = supplierDetailsText[i];
            lblProductDetail.text = supplierDetails[getSupId][Object.keys(supplierDetails[0])[i - 2]];
        }
        if (i == 0) {
            cntMainProduct.backgroundTransparent = true;
        }
        cntMainProduct.add(lblProductDetailTitle);
        cntMainProduct.add(lblProductDetail);
        cntSupplierProductDetail.add(cntMainProduct);
        cntSupplierProductDetail.add(line1);
    }
}

function fillCategory() {
    cntSupplierProductDetail.clear();
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
            lblProductDetailTitle.text = "ID";
            lblProductDetail.text = getCatId;
        } else if (i != 0) {
            lblProductDetailTitle.text = "Name";
            lblProductDetail.text = category[getCatId];
        }
        if (i == 0) {
            cntMainProduct.backgroundTransparent = true;
        }
        cntMainProduct.add(lblProductDetailTitle);
        cntMainProduct.add(lblProductDetail);
        cntSupplierProductDetail.add(cntMainProduct);
        cntSupplierProductDetail.add(line1);
    }

}