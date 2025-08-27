radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 111) {
        CutebotPro.pwmCruiseControl(0, 80)
        CutebotPro.colorLight(CutebotProRGBLight.RGBL, 0x0000ff)
        CutebotPro.colorLight(CutebotProRGBLight.RGBR, 0xffffff)
    } else if (receivedNumber == 112) {
        CutebotPro.pwmCruiseControl(80, 0)
        CutebotPro.colorLight(CutebotProRGBLight.RGBR, 0x0000ff)
        CutebotPro.colorLight(CutebotProRGBLight.RGBL, 0xffffff)
    } else if (receivedNumber == 113) {
        CutebotPro.fullSpeedAhead()
        CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0x0000ff)
    } else if (receivedNumber == 114) {
        CutebotPro.pwmCruiseControl(-100, -100)
        CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0xff0000)
    } else if (receivedNumber == 115) {
        CutebotPro.stopImmediately(CutebotProMotors.ALL)
        CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0xffffff)
    }
})
radio.setGroup(420)
radio.setTransmitPower(7)
basic.forever(function () {
    if (CutebotPro.ultrasonic(SonarUnit.Centimeters) < 10) {
        CutebotPro.pwmCruiseControl(-50, -50)
    }
})
