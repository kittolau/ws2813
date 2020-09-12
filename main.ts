grove.onGesture(GroveGesture.Right, function () {
    basic.showString("Hello!")
})
function doSomething () {
    rainbow.clear()
    strip.showRainbow(1, 360)
    strip = rainbow.range(position, position + 10)
    position = position + 1
    if (position > 50) {
        position = 0
    }
}
let position = 0
let strip: neopixel.Strip = null
let rainbow: neopixel.Strip = null
rainbow = neopixel.create(DigitalPin.P1, 300, NeoPixelMode.RGB)
basic.forever(function () {
    rainbow.showRainbow(1, 360)
})
