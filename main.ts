function SetDicePattern () {
    DiceValue = [
    images.createImage(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . . . # .
        . . . . .
        . # . . .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . . . # .
        . . # . .
        . # . . .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . # . # .
        . # . # .
        . # . # .
        . . . . .
        `)
    ]
}
function RollDice () {
    DiceValue[randint(0, 5)].showImage(0)
}
input.onGesture(Gesture.Shake, function () {
    RollDice()
})
let DiceValue: Image[] = []
SetDicePattern()
RollDice()
