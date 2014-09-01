function Page1_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Application.exit();
    }
}
function Page1_Self_OnShow() {
    //Uncomment following block for navigationbar/actionbar sample
    /*
    //Copy this code block to every page onShow
    header.init(this);
    header.setTitle("Page1");
    header.setRightItem("Click");
    header.setLeftItem();
    /**/
}
function Page1_TextButton1_OnPressed(e) {
    var beaconRegion = new SMF.Bluetooth.BLE.BeaconRegion({
            proximityUUID : "B9407F30-F5F8-466E-AFF9-25556B57FE6D",
            major:1,
            minor:1
        });
    SMF.Bluetooth.BLE.startMonitoringForRegion({
        region : beaconRegion,
        onEnterRegion : function (e) { // e.region
            alert("Enter region: " + JSON.stringify(e));
            SMF.Bluetooth.BLE.startRangingBeaconsInRegion(beaconRegion);
            var region = e.region;
            //region.identifier
        },
        onExitRegion : function (e) { // e.region
            alert("Exit region: " + JSON.stringify(e));
            SMF.Bluetooth.BLE.stopRangingBeaconsInRegion(beaconRegion);
            var region = e.region;
            //region.identifier
        },
        onStartMonitoringForRegion : function (e) {
            // e.region
            alert("StartMonitoring for region: " + JSON.stringify(e))
        },
        onDetermineState : function (e) {
            var state = "";
            if (e.state == SMF.Bluetooth.BLE.RegionState.unknown) {
                state = "Unknown";
            } else if (e.state == SMF.Bluetooth.BLE.RegionState.inside) {
                state = "Inside";
            } else if (state == SMF.Bluetooth.BLE.RegionState.outside) {
                state = "Outside";
            }
            alert("Determine: " + JSON.stringify(e));
        },
        onRangeBeacons : function (e) { // e.beacons e.region
            if (e.beacons.length > 0) {
                //var beacon = e.beacons[0];
                Pages.Page1.Label1.text = JSON.stringify(e.beacons);
                /*
                beacon.proximity enum SMF.Bluetooth.BLE.Proximity.near
                beacon.proximityUUID string
                beacon.major number
                beacon.minor number
                beacon.accuracy number (float)
                beacon.rssi number
                region.identifier string
                region.proximityUUID string
                region.major number
                region.minor number
                 */
                beacon = e.beacons[0];
                var s = "-";
                switch (beacon.proximity) {
                case SMF.Bluetooth.BLE.Proximity.unknown:
                    s = "Unkdnown";
                    break;
                case SMF.Bluetooth.BLE.Proximity.immediate:
                    s = "imm";
                    break;
                case SMF.Bluetooth.BLE.Proximity.near:
                    s = "near";
                    break;
                case SMF.Bluetooth.BLE.Proximity.far:
                    s = "far";
                    break;
                }
                Pages.Page1.Label1.text += " " + s + "beacon count: " + e.beacons.length;
            }
        },
        onFailForRegion : function (e) {
            alert("Error: " + e.message);
        }
    });
    SMF.Bluetooth.BLE.startRangingBeaconsInRegion(beaconRegion);
}
function Page1_TextButton2_OnPressed(e) {
    var beaconData = {};
    var beaconRegion = new SMF.Bluetooth.BLE.BeaconRegion({
            proximityUUID : "1164865F-B5EE-49E3-9B81-2BD499A13901",
            identifier : "com.smartface.beacon",
            major : 1,
            minor : 1
        });
    beaconData = beaconRegion.peripheralDataWithMeasuredPower(null);
    alert(JSON.stringify(beaconRegion));
    alert(JSON.stringify(beaconData));
    var myPeripheralManager = new SMF.Bluetooth.BLE.PeripheralManager({
            onUpdateState : function (e) {
                // e.peripheral
                if (e.state == SMF.Bluetooth.BLE.PeripheralManagerState.poweredOn) {
                    this.startAdvertising(beaconData);
                    //alert("Powered On");
                    Pages.Page1.Label2.text = "Broadcasting..."
                } else if (e.state == SMF.Bluetooth.BLE.PeripheralManagerState.poweredOff) {
                    this.stopAdvertising();
                    alert("Powered Off");
                } else if (e.state == SMF.Bluetooth.BLE.PeripheralManagerState.unsupported) {
                    alert("Unsupported");
                }
            }
        });
}