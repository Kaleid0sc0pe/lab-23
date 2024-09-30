controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    number_string3 = number1 + number2
    game.splash(number_string3)
    number1 = number2
    number2 = number_string3
})
let number_string3 = 0
let number2 = 0
let number1 = 0
number1 = 1
number2 = 1
