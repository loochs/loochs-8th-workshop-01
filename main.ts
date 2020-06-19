let カードが開いた = 0
basic.forever(function () {
    if (input.lightLevel() > 180 && カードが開いた == 0) {
        カードが開いた = 1
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
        for (let index = 0; index < 8; index++) {
            basic.showIcon(IconNames.SmallHeart)
            basic.showIcon(IconNames.Heart)
        }
    } else if (input.lightLevel() <= 20) {
        カードが開いた = 0
        basic.clearScreen()
        music.stopMelody(MelodyStopOptions.All)
    }
})
