class Rectangle {
    constructor(sideA, sideB) {
        this.sideA = sideA
        this.sideB = sideB
    }

    calcP() {
        return (this.sideA + this.sideB) * 2
    }

    calcS() {
        return this.sideA * this.sideB
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(sideA, sideB, color, text) {
        super(sideA, sideB)
        this.color = color
        this.text = text
    }

    showMyProps() {
        console.log(`text: ${this.text}, color: ${this.color}, side A: ${this.sideA}, side B: ${this.sideB}`)
    }
}

const redR = new Rectangle(20, 13)
const redRCT = new ColoredRectangleWithText(2, 5, 'red', 'some text')

console.log(redR.calcP())
console.log(redR.calcS())

console.log(redRCT.calcP())
console.log(redRCT.calcS())
redRCT.showMyProps()
