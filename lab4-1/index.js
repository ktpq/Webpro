const button = document.querySelector('.btn');

button.addEventListener('click', calculate);

let count = 0;

let tmp1 = 0;
let tmp2 = 0;
let tmpAns = 0;

function calculate(){
    const input1 = document.querySelector('.input-1').value;
    const input2 = document.querySelector('.input-2').value;

    let resultTag = document.querySelector('.result');
    let ans = Number(input1) + Number(input2);

    let history = document.querySelector('.history');
    if (input1.length !== 0 && input2.length !== 0 && count === 0){
        resultTag.innerHTML = `Result : ${ans}`;
        count = 1;
    } else if (input1.length !== 0 && input2.length !== 0 && count === 1){
        resultTag.innerHTML = `Result : ${ans}`;
        let p = document.createElement('p');
        p.innerHTML = `${tmp1} + ${tmp2} = ${tmpAns}`
        history.append(p);
    }
    tmp1 = input1;
    tmp2 = input2;
    tmpAns = ans;
}