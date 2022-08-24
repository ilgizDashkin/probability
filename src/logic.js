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
    let res = ((n !== 1) ? n * factorial(n - 1) : 1)
    console.log("факториал " + res)
    return res
}
// комбинаторика формула размещения
function placement(m, n) {
    if ((n > m) && (m > 0) && (n > 1)) {
        let num = factorial(n)
        let denom = factorial(n - m)
        console.log("числительное " + num)
        console.log("знаменательное " + denom)
        return (num / denom).toFixed(2)
    }
}

function combinat_placement() {
    let m = Number(document.getElementById('combinat_placement1').value)
    let n = Number(document.getElementById('combinat_placement2').value)
    let result = document.getElementById('result_combinat_placement')
    let out = placement(m, n)
    if (out) {
        result.textContent = `варианты комбинации размещение ${m} элементов в ${n} позициях равно: ${out}`
    } else {
        result.textContent = "введены неправильные данные"
    }
}
// комбинаторика сочетания
function combination(m, n) {
    if ((n > m) && (m > 0) && (n > 1)) {
        let num = factorial(n)
        let denom = factorial(m) * factorial(n - m)
        console.log("числительное " + num)
        console.log("знаменательное " + denom)
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
    } else {
        result.textContent = "введены неправильные данные"
    }
}

// комбинаторика перестановка
function transposition(n) {
    if (n > 0) {
        let num = factorial(n)
        console.log("факториал " + num)
        return num
    }
}
function combinat_transposition() {
    document.getElementById('combinat_transposition1').style.display = "none"
    let n = Number(document.getElementById('combinat_transposition2').value)
    document.getElementById('combinat_transposition1').value = n
    let result = document.getElementById('result_combinat_transposition')
    let out = transposition(n)
    if (out) {
        result.textContent = `варианты комбинации сочетания ${n} элементов в ${n} позициях равно: ${out}`
    } else {
        result.textContent = "введены неправильные данные"
    }
}

// комбинаторика формула сочетания с повторениями (могут быть одинаковые несколько штук)
function placement_repetition(m, n) {
    if ((n > m) && (m > 0) && (n > 1)) {
        let num = factorial(n)
        let denom = factorial(m) * factorial(n - m)
        console.log("числительное " + num)
        console.log("знаменательное " + denom)
        return (num / denom).toFixed(2)
    }
}
function combinat_placement_repetition() {
    let m = Number(document.getElementById('combinat_placement_repetition1').value)
    let n = Number(document.getElementById('combinat_placement_repetition2').value)
    let result = document.getElementById('result_combinat_placement_repetition')
    let out = placement_repetition(m, n + m - 1)
    if (out) {
        result.textContent = `варианты комбинации размещение ${m} элементов в ${n} позициях равно: ${out}`
    } else {
        result.textContent = "введены неправильные данные"
    }
}

// комбинаторика формула размещения с повторениями (могут быть одинаковые несколько штук)
function placement_combination(m, n) {
    if ((m > 0) && (n > 1)) {
        return (Math.pow(m, n)).toFixed(2)
    }
}
function combinat_repetition() {
    let m = Number(document.getElementById('combinat_repetition1').value)
    let n = Number(document.getElementById('combinat_repetition2').value)
    let result = document.getElementById('result_combinat_repetition')
    let out = placement_combination(n, m)
    if (out) {
        result.textContent = `варианты комбинации размещение ${m} элементов в ${n} позициях равно: ${out}`
    } else {
        result.textContent = "введены неправильные данные"
    }
}

// комбинаторика формула перестановка с повторениями из n элементов по к раз
function val_ey_cell(id) {
    // вытаскиваем все элементы в массив
    let text_in = document.getElementById(id).value
    let text_out = []
    if (text_in.length > 2) {
        let text_split = text_in.split(',')
        if (text_split[0]) {
            text_out = text_split
            return text_out
        }
    } else {
        text_out[0] = text_in
        return text_out
    }
}
function repetition(m, n) {
    let num = factorial(n)
    console.log(`num=${num}`)
    let control = m.reduce(function (res, elm) {
        console.log(`result_control ${res}`)//промежуточная сумма
        console.log(`current_control ${elm}`)//следующий элемент
        return res + Number(elm)
    }, 0);//0 - это промежуточная сумма при первом прогоне функции
    if (control === n) {//проверяем на количество введеных элементов и находим число перестановок
        let denom = m.reduce(function (res, elm) {
            console.log(`result ${res}`)
            console.log(`current ${elm}`)
            return res * factorial(Number(elm))
        }, 1);
        console.log("числительное " + num)
        console.log("знаменательное " + denom)
        return (num / denom).toFixed(2)
    } else {
        return "ошибка!!! сумма количества повторений элементов должна быть равна количеству мест перестановок с повторениями!"
    }
}
function permutation_repetition() {
    let m = val_ey_cell('permutation_repetition1')
    console.log(`povtorenia =${m}`)
    let n = Number(document.getElementById('permutation_repetition2').value)
    let result = document.getElementById('result_permutation_repetition')
    let out = repetition(m, n)
    if (out) {
        result.textContent = `варианты комбинации размещение ${m} элементов в ${n} позициях равно: ${out}`
    } else {
        result.textContent = "введены неправильные данные"
    }
}

// формула Бернулли
function bernuli(m, n, p) {
    let q = 1 - p
    if ((n > m) && (m > 0) && (n > 1)) {
        let result = combination(m, n) * Math.pow(p, m) * Math.pow(q, n - m)
        return result.toFixed(4)
    }
}
function view_bernuli() {
    let m = Number(document.getElementById('bernuli_1').value)
    let n = Number(document.getElementById('bernuli_2').value)
    let p = Number(document.getElementById('bernuli_3').value)
    let result = document.getElementById('result_bernuli')
    let out = bernuli(m, n, p)
    if (out) {
        result.textContent = `вероятность наступления события  ${m} раз в ${n} экспериментах равно: ${out}`
    } else {
        result.textContent = "введены неправильные данные"
    }
}
// формула вероятности наступления события А и B (произведения вероятностей) для независимых событий
function independent_events(a, b) {
    return (a * b).toFixed(3)
}
function view_independent_events() {
    let a = Number(document.getElementById('independent_events_1').value)
    let b = Number(document.getElementById('independent_events_2').value)
    let result = document.getElementById('result_independent_events')
    let out = independent_events(a, b)
    if (out) {
        result.textContent = `вероятность наступления события  А и B (произведения вероятностей) для независимых событий равно: ${out}`
    } else {
        result.textContent = "введены неправильные данные"
    }
}
// формула вероятности наступления события А и B (произведения вероятностей) для зависимых событий
function dependency_events(a, b_zav_a) {
    return (a * b_zav_a).toFixed(3)
}
function view_dependency_events() {
    let a = Number(document.getElementById('dependency_events_1').value)
    let b_zav_a = Number(document.getElementById('dependency_events_2').value)
    let result = document.getElementById('result_dependency_events')
    let out = dependency_events(a, b_zav_a)
    if (out) {
        result.textContent = `вероятность наступления события  А и B (произведения вероятностей) для зависимых событий равно: ${out}`
    } else {
        result.textContent = "введены неправильные данные"
    }
}
// формула вероятности наступления события А или B (суммы вероятностей) для совместных событий (события которые могут происходить одновременно)
function join_events(a, b, ab) {
    return (a + b - ab).toFixed(3)
}
function view_join_events() {
    let a = Number(document.getElementById('join_events_1').value)
    let b = Number(document.getElementById('join_events_2').value)
    let ab = Number(document.getElementById('join_events_3').value)
    let result = document.getElementById('result_join_events')
    let out = join_events(a, b, ab)
    if (out) {
        result.textContent = `вероятности наступления события А или B (суммы вероятностей) для совместных событий (события которые могут происходить одновременно) равно: ${out}`
    } else {
        result.textContent = "введены неправильные данные"
    }
}
// формула вероятности наступления события А или B (суммы вероятностей) для несовместных событий (события которые не могут происходить одновременно)
function nojoin_events(a, b) {
    return (a + b).toFixed(3)
}
function view_nojoin_events() {
    let a = Number(document.getElementById('nojoin_events_1').value)
    let b = Number(document.getElementById('nojoin_events_2').value)
    let result = document.getElementById('result_nojoin_events')
    let out = nojoin_events(a, b)
    if (out) {
        result.textContent = `вероятности наступления события А или B (суммы вероятностей) для не совместных событий (события которые не могут происходить одновременно) равно: ${out}`
    } else {
        result.textContent = "введены неправильные данные"
    }
}

export {
    simple_probality, combinat_placement, combinat_combination, combinat_transposition, combinat_placement_repetition, combinat_repetition, permutation_repetition, view_bernuli, view_independent_events, view_dependency_events, view_join_events,
    view_nojoin_events

}