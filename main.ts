radio.onReceivedString(function (receivedString) {
    if (receivedString == "A1_1") {
        item_index_of_spot_status = 1
    } else if (receivedString == "A1_0") {
        item_index_of_spot_status = 0
    }
    total_available = 0
    index = 0
    for (let index2 = 0; index2 < 12; index2++) {
        if (item_index_of_spot_status == 0) {
            total_available += 1
        }
        index += 1
    }
})
let index = 0
let item_index_of_spot_status = 0
let total_available = 0
let _000000000000 = 0
let spot_status = _000000000000
total_available = 12
radio.setGroup(1)
radio.setTransmitPower(7)
basic.pause(100)
basic.forever(function () {
    basic.showNumber(total_available)
    basic.pause(500)
})
