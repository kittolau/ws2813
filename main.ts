input.onButtonPressed(Button.A, function () {
    Led1.clear()
    Led2.clear()
    Led3.clear()
    Led4.clear()
    for (let index = 0; index <= 900; index++) {
        Led1.setPixelColor(index, neopixel.colors(NeoPixelColors.Green))
        if (index >= 100) {
            Led2.setPixelColor(index - 100, neopixel.colors(NeoPixelColors.Green))
        }
        if (index >= 200) {
            Led3.setPixelColor(index - 200, neopixel.colors(NeoPixelColors.Green))
        }
        if (index >= 300) {
            Led4.setPixelColor(index - 300, neopixel.colors(NeoPixelColors.Green))
        }
        Led4.show()
        Led3.show()
        Led2.show()
        Led1.show()
        basic.pause(0.01)
    }
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    Led4.clear()
    Led3.clear()
    Led2.clear()
    Led1.clear()
    if (ledMode == 0) {
        Led1.showColor(neopixel.colors(NeoPixelColors.White))
        Led2.showColor(neopixel.colors(NeoPixelColors.White))
        Led3.showColor(neopixel.colors(NeoPixelColors.White))
        Led4.showColor(neopixel.colors(NeoPixelColors.White))
        basic.showString("W")
        ledMode = 1
    } else if (ledMode == 1) {
        Led1.showColor(neopixel.colors(NeoPixelColors.Red))
        Led2.showColor(neopixel.colors(NeoPixelColors.Red))
        Led3.showColor(neopixel.colors(NeoPixelColors.Red))
        Led4.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.showString("R")
        ledMode = 2
    } else if (ledMode == 2) {
        Led1.showColor(neopixel.colors(NeoPixelColors.Green))
        Led2.showColor(neopixel.colors(NeoPixelColors.Green))
        Led3.showColor(neopixel.colors(NeoPixelColors.Green))
        Led4.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.showString("G")
        ledMode = 3
    } else if (ledMode == 3) {
        Led1.showColor(neopixel.colors(NeoPixelColors.Blue))
        Led2.showColor(neopixel.colors(NeoPixelColors.Blue))
        Led3.showColor(neopixel.colors(NeoPixelColors.Blue))
        Led4.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.showString("B")
        ledMode = 4
    } else if (ledMode == 4) {
        Led1.showRainbow(1, 360)
        Led2.showRainbow(1, 360)
        Led3.showRainbow(1, 360)
        Led4.showRainbow(1, 360)
        basic.showIcon(IconNames.Heart)
        ledMode = 0
    } else if (false) {
    	
    } else {
    	
    }
    basic.clearScreen()
})
let Led4: neopixel.Strip = null
let Led3: neopixel.Strip = null
let Led2: neopixel.Strip = null
let Led1: neopixel.Strip = null
let ledMode = 0
ledMode = 0
let Led1no = 450
let Led2no = 450
let Led3no = 450
let Led4no = 450
Led1 = neopixel.create(DigitalPin.P0, Led1no, NeoPixelMode.RGB)
Led2 = neopixel.create(DigitalPin.P1, Led2no, NeoPixelMode.RGB)
Led3 = neopixel.create(DigitalPin.P2, Led3no, NeoPixelMode.RGB)
Led4 = neopixel.create(DigitalPin.P3, Led4no, NeoPixelMode.RGB)
Led1.clear()
Led2.clear()
Led3.clear()
Led4.clear()
Led1.showColor(neopixel.rgb(0, 0, 0))
Led2.showColor(neopixel.rgb(0, 0, 0))
Led3.showColor(neopixel.rgb(0, 0, 0))
Led4.showColor(neopixel.rgb(0, 0, 0))
basic.showString("Off")
basic.forever(function () {
	
})
