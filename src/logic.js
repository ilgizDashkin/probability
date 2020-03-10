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
        result.textContent = "вероятность события равно: " + out + "%"
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
    let m = Number(document.getElementById('combinat_placement1').value)
    let n = Number(document.getElementById('combinat_placement2').value)
    let result = document.getElementById('result_combinat_placement')
    let out = placement(m, n)
    if (out) {
        result.textContent =`варианты комбинации размещение ${m} элементов в ${n} позициях равно: ${out}`
    }else{
        result.textContent ="введены неправильные данные"
    }
}
// комбинаторика сочетания
function combination(m, n) {
    if ((n>m)&&(m>0) && (n > 1)) {
        let num = factorial(n)
        let denom =factorial(m)*factorial(n - m)
        console.log("числительное "+num)
        console.log("знаменательное "+denom)
        return (num / denom).toFixed(2)
    }
}
function combinat_combination() {
    let m = Number(document.getElementById('combinat_combination1').value)
    let n = Number(document.getElementById('combinat_combination2').value)
    let result = document.getElementById('result_combinat_combination')
    let out = combination(m, n)
    if (out) {
        result.textContent = `варианты комбинации сочетания ${m} элементов в ${n} позициях равно: ${out}`
    }else{
        result.textContent ="введены неправильные данные"
    }
}

// комбинаторика перестановка
function transposition(n) {
    if (n>0) {
        let num = factorial(n)        
        console.log("факториал "+num)       
        return num
    }
}
function combinat_transposition() {  
    document.getElementById('combinat_transposition1').style.display="none"  
    let n = Number(document.getElementById('combinat_transposition2').value)
    document.getElementById('combinat_transposition1').value=n
    let result = document.getElementById('result_combinat_transposition')
    let out = transposition(n)
    if (out) {
        result.textContent = `варианты комбинации сочетания ${n} элементов в ${n} позициях равно: ${out}`
    }else{
        result.textContent ="введены неправильные данные"
    }
}
// формула Бернулли
function bernuli(m,n,p){
    let q=1-p
    if ((n>m)&&(m>0) && (n > 1)) {
      let result=combination(m, n)*Math.pow(p, m)*Math.pow(q, n-m)
      return result.toFixed(4)
    }   
}
function view_bernuli(){
    let m = Number(document.getElementById('bernuli_1').value)
    let n = Number(document.getElementById('bernuli_2').value)
    let p = Number(document.getElementById('bernuli_3').value)
    let result = document.getElementById('result_bernuli')
    let out = bernuli(m,n,p)
    if (out) {
        result.textContent = `вероятность наступления события  ${m} раз в ${n} экспериментах равно: ${out}`
    }else{
        result.textContent ="введены неправильные данные"
    }
}
export { simple_probality, combinat_placement,combinat_combination,combinat_transposition,view_bernuli }