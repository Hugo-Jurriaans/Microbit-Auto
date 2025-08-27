radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 111) {
        CutebotPro.pwmCruiseControl(15, 100)
        CutebotPro.colorLight(CutebotProRGBLight.RGBL, 0x0000ff)
        CutebotPro.colorLight(CutebotProRGBLight.RGBR, 0xffffff)
    } else if (receivedNumber == 112) {
        CutebotPro.pwmCruiseControl(100, 15)
        CutebotPro.colorLight(CutebotProRGBLight.RGBL, 0xffffff)
        CutebotPro.colorLight(CutebotProRGBLight.RGBR, 0x0000ff)
    } else if (receivedNumber == 113) {
        CutebotPro.fullSpeedAhead()
        CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0x0000ff)
    } else if (receivedNumber == 114) {
        CutebotPro.pwmCruiseControl(-100, -100)
        CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0xff0000)
    } else if (receivedNumber == 115) {
        CutebotPro.stopImmediately(CutebotProMotors.ALL)
        CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0xffffff)
    } else if (receivedNumber == 116) {
        radio.setGroup(90)
        radio.sendNumber(120)
        basic.pause(1000)
        radio.setGroup(420)
    }
})
radio.setTransmitPower(2)
radio.setGroup(420)
basic.forever(function () {
    if (CutebotPro.ultrasonic(SonarUnit.Centimeters) < 5) {
        CutebotPro.pwmCruiseControl(-50, -50)
    }
})
