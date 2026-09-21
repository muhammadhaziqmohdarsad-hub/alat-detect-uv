input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
input.onButtonPressed(Button.B, function () {
    if (input.lightLevel() > 101) {
        basic.showString("CERAH")
    } else if (input.lightLevel() < 100 && input.lightLevel() > 50) {
        basic.showString("MALAP")
    } else {
        basic.showString("GELAP")
        music.ringTone(262)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    music.stopAllSounds()
})
