basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        basic.showIcon(IconNames.Happy)
    } else if (input.isGesture(Gesture.TiltRight)) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})
