input.onButtonPressed(Button.A, function () {
    filesystem.remove("Sounds/sound.txt")
    filesystem.appendString(
    "Sounds/sound.txt",
    "" + (output2.join("\r\n"))
    )
    music.playMelody("D G A - - - - - ", 400)
})
input.onButtonPressed(Button.AB, function () {
    filesystem.appendLine(
    "hello.txt",
    "Hello world!"
    )
    filesystem.test()
    let output = "\r\n"
for (let index = 0; index <= 100; index++) {
        output = "" + output + Math.randomBoolean() + "\r\n"
    }
    filesystem.appendString(
    "randoms.txt",
    output
    )
})
input.onButtonPressed(Button.B, function () {
    delta = 0
    ix = -1
    filesystem.readToSerial("Sounds/sound.txt")
    for (let line of filesystem.readNumbers("Sounds/sound.txt")) {
        if (ix == -1) {
            delta = line
        }
        ix += 1
        basic.pause(line - delta)
        if (ix % 2 == 0) {
            music.ringTone(523)
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `, 0)
        } else {
            music.stopAllSounds()
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `, 0)
        }
        delta = line
    }
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    music.playMelody("B F - - - - - - ", 400)
    filesystem.format()
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.ringTone(262)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `, 0)
output2.push(input.runningTime())
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    music.stopAllSounds()
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `, 0)
output2.push(input.runningTime())
})
let ix = 0
let delta = 0
let output2: number[] = []
filesystem.createDirectory("Sounds")
