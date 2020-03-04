function probabilyty(m,n){
    if (m&&n){
        return ((m/n).toFixed(2))
    }
}

export default function set_result(){
    let m=document.getElementById('1').value
    let n=document.getElementById('2').value
    let result=document.getElementById('result')
    result.textContent="вероятность события "+(probabilyty(m,n)*100)+"%"
}

