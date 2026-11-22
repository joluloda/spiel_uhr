let Minute_1 = 0
let Minute_2 = 0
let Stunde_1 = 0
let Stunde_2 = 0
let _4digit = 0
loops.everyInterval(2000, function () {
    Minute_2 += 1
})
basic.forever(function () {
    _4digit.bit(Minute_1, 0)
    _4digit.bit(Minute_2, 1)
    _4digit.bit(Stunde_1, 3)
    _4digit.bit(Stunde_2, 2)
    if (Minute_2 == 10) {
        Minute_2 = 0
        Minute_2 += 1
    } else if (Minute_1 == 6) {
        Minute_1 = 0
        Stunde_2 += 1
    } else if (Stunde_2 == 10) {
        Stunde_2 = 0
        Stunde_1 += 1
    } else if (Stunde_1 == 2 && Stunde_2 == 4) {
        Minute_1 = 0
        Minute_2 = 0
        Stunde_1 = 0
        Stunde_2 = 0
    }
})
