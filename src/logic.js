function probabilyty(m, n) {
    if (m && n) {
        return ((m / n) * 100).toFixed(2)
    }
}
function simple_probality() {
    let m = document.getElementById('simple_probality1').value
    let n = document.getElementById('simple_probality2').value
    let result = document.getElementById('result_simple_probality')
    let out = probabilyty(m, n)
    if (out) {
        result.textContent = "вероятность события " + out + "%"
    }
}

function factorial(n) {
     let res=((n !== 1) ? n * factorial(n - 1) : 1)
     console.log("факториал "+res)
     return res
}
// комбинаторика формула размещения
function placement(m, n) {
    if ((n>m)&&(m>0) && (n > 1)) {
        let num = factorial(n)
        let denom = factorial(n - m)
        console.log("числительное "+num)
        console.log("знаменательное "+denom)
        return (num / denom).toFixed(2)
    }
}


function combinat_placement() {
    let m = document.getElementById('combinat_placement1').value
    let n = document.getElementById('combinat_placement2').value
    let result = document.getElementById('result_combinat_placement')
    let out = placement(m, n)
    if (out) {
        result.textContent = "варианты комбинации размещение m элементов в n позициях " + out
    }else{
        result.textContent ="введены неправильные данные"
    }

}

export { simple_probality, combinat_placement }