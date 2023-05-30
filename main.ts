servos.P0.setAngle(90)
makerbit.showStringOnLcd1602("Advait", makerbit.position1602(LcdPosition1602.Pos1), 16)
makerbit.connectUltrasonicDistanceSensor(DigitalPin.P7, DigitalPin.P4)
let Toll = 1000
let BankBalance = 10000
let BankBalance2 = 0
basic.forever(function () {
    makerbit.showStringOnLcd1602("" + (Math.round(makerbit.getUltrasonicDistance(DistanceUnit.CM))), makerbit.position1602(LcdPosition1602.Pos1), 32, TextOption.AlignLeft)
    basic.pause(1000)
    if (makerbit.getUltrasonicDistance(DistanceUnit.CM) <= 20) {
        if (Toll >= 120) {
            Toll = Toll - 50
            BankBalance2 += 50
            makerbit.showStringOnLcd1602("Valid tag. Have a great journey! :D", makerbit.position1602(LcdPosition1602.Pos1), 32)
            basic.pause(1000)
            makerbit.showStringOnLcd1602("" + (Toll), makerbit.position1602(LcdPosition1602.Pos1), 32, TextOption.AlignLeft)
            I2C_LCD1602.clear()
            basic.pause(1000)
        } else {
            makerbit.showStringOnLcd1602("Invalid tag. Please recharge. :(", makerbit.position1602(LcdPosition1602.Pos1), 32)
            Toll += 950
            BankBalance += -1000
            BankBalance2 += 50
        }
    }
})
