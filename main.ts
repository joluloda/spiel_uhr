let Minute_1 = randint(0, 5)
let Minute_2 = randint(0, 9)
let Stunde_1 = randint(0, 2)
let Stunde_2 = randint(0, 3)
let _4digit = grove.createDisplay(DigitalPin.C16, DigitalPin.C17)
loops.everyInterval(2000, function () {
    Minute_2 += 1
    if (Minute_2 == 10) {
        Minute_2 = 0
        Minute_1 += 1
    }
    if (Minute_1 == 6) {
        Minute_1 = 0
        Stunde_2 += 1
    }
    if (Stunde_2 == 10) {
        Stunde_2 = 0
        Stunde_1 += 1
    }
    if (Stunde_1 == 2 && Stunde_2 == 4) {
        Minute_1 = 0
        Minute_2 = 0
        Stunde_1 = 0
        Stunde_2 = 0
    }
    _4digit.bit(Minute_1, 2)
    _4digit.bit(Minute_2, 3)
    _4digit.bit(Stunde_1, 0)
    _4digit.bit(Stunde_2, 1)
})
