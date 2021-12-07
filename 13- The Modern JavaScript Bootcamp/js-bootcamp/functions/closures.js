const createTipper = (baseTip) => {

    return (amount) => {
        return baseTip * amount
    }
}

const tip20 = createTipper(0.20)
const tip30 = createTipper(0.30)
console.log(tip20(100))
console.log(tip30(100))