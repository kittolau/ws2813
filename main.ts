input.onButtonPressed(Button.A, function () {
    if (ledMode == 0) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        basic.showString("W")
        ledMode = 1
    } else if (ledMode == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.showString("R")
        ledMode = 2
    } else if (ledMode == 2) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.showString("G")
        ledMode = 3
    } else if (ledMode == 3) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.showString("B")
        ledMode = 4
    } else if (ledMode == 4) {
        strip.showRainbow(1, 360)
        basic.showIcon(IconNames.Heart)
        ledMode = 0
    } else {
    	
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    ledMode = 0
    strip.showRainbow(1, 360)
    while (!(input.buttonIsPressed(Button.A))) {
        strip.rotate(3)
        strip.show()
        basic.pause(100)
    }
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    control.reset()
})
let strip: neopixel.Strip = null
let ledMode = 0
ledMode = 0
let led_number = 450
strip = neopixel.create(DigitalPin.P0, led_number, NeoPixelMode.RGB)
strip.clear()
strip.showColor(neopixel.rgb(0, 0, 0))
basic.showString("Off")
basic.forever(function () {
	
})
