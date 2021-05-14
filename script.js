let digits = document.querySelectorAll(".digit")
let result = 0
let temp1 = ""
let temp = 0
let act = 1
let fns = document.querySelectorAll(".op")
let paraprev = document.querySelector(".po")
let paraop = document.querySelector(".operation")
let para = document.querySelector(".co")
digits.forEach(digit => {
    digit.addEventListener('click', () => {
        para.innerHTML += digit.innerHTML
    })
})
let ac = document.querySelector(".ac")
let sum = document.querySelector("#sum")
let sub = document.querySelector("#sub")
let mul = document.querySelector("#mul")
let di = document.querySelector("#di")
let c = document.querySelector(".c")
let eq = document.querySelector(".eq")
ac.addEventListener('click', () => {
    paraprev.innerHTML = ''
    paraop.innerHTML = null
    para.innerHTML = null
    result = 0
    temp1 = ""
    temp = 0
    act = 1
}
)
c.addEventListener('click', () => {
    let str = para.innerHTML.toString()
    para.innerHTML = str.substring(0, str.length - 1)
}
)
sum.addEventListener('click', () => {
    aloo()
    paraprev.innerHTML = result
    paraop.innerHTML = '+'
    para.innerHTML = null
    act = 1
}
)
sub.addEventListener('click', () => {
    aloo()
    paraprev.innerHTML = result
    paraop.innerHTML = '-'
    para.innerHTML = null
    act = 2
}
)
mul.addEventListener('click', () => {
    aloo()
    paraprev.innerHTML = result
    paraop.innerHTML = '*'
    para.innerHTML = null
    act = 3
}
)
di.addEventListener('click', () => {
    aloo()
    paraprev.innerHTML = result
    paraop.innerHTML = '/'
    para.innerHTML = null
    act = 4

}
)
eq.addEventListener('click', () => {
    aloo()
    para.innerHTML = result
    paraprev.innerHTML = null
    result = 0
    temp1 = ""
    temp = 0
    act = 1
    paraop.innerHTML = null
}
)
function aloo() {
    paraprev.innerHTML = para.innerHTML
    temp1 = para.innerHTML.toString()
    temp = parseFloat(temp1)
    if (act == 1)
        result += temp
    else if (act == 2)
        result -= temp
    else if (act == 3)
        result *= temp
    else if (act == 4)
        result /= temp
}

