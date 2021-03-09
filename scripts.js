// CLOSURES
function outerFunc() {
    let num = 2
    console.log(num)

    function addFunc() {
        console.log(num)
        num = num + num
        console.log(num)//8
    }

    function multiplyFunc() {
        console.log(num)
        num = num * num
        console.log(num)//4
    }


    console.log(num)
    multiplyFunc()//4
    addFunc()//8
    multiplyFunc()//64
    console.log(num)
}

outerFunc()

/**
 * multiplyFunc
 * addFunc
 * multiplyFunc
 * outerFunc
 */