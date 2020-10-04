input.onButtonPressed(Button.A, function () {
    if (ledMode == 0) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        strip2.showColor(neopixel.colors(NeoPixelColors.White))
        strip3.showColor(neopixel.colors(NeoPixelColors.White))
        basic.showString("W")
        ledMode = 1
    } else if (ledMode == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip2.showColor(neopixel.colors(NeoPixelColors.Red))
        strip3.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.showString("R")
        ledMode = 2
    } else if (ledMode == 2) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        strip2.showColor(neopixel.colors(NeoPixelColors.Green))
        strip3.showColor(neopixel.colors(NeoPixelColors.Green))
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
    strip2.showRainbow(1, 360)
    strip3.showRainbow(1, 360)
    while (!(input.buttonIsPressed(Button.A))) {
        strip.rotate(3)
        strip2.rotate(3)
        strip3.rotate(3)
        strip.show()
        strip2.show()
        strip3.show()
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    control.reset()
})
let strip3: neopixel.Strip = null
let strip2: neopixel.Strip = null
let strip: neopixel.Strip = null
let ledMode = 0
ledMode = 0
let led_number = 50
strip = neopixel.create(DigitalPin.P0, led_number, NeoPixelMode.RGB)
strip2 = neopixel.create(DigitalPin.P0, led_number, NeoPixelMode.RGB)
strip3 = neopixel.create(DigitalPin.P0, led_number, NeoPixelMode.RGB)
strip.clear()
strip2.clear()
strip3.clear()
strip.showColor(neopixel.rgb(0, 0, 0))
strip2.showColor(neopixel.rgb(0, 0, 0))
strip3.showColor(neopixel.rgb(0, 0, 0))
basic.showString("Off")
basic.forever(function () {
	
})
