const resultCh = document.querySelector('.result');
resultCh.innerText = '0';
let number = 0;
let secondNumber = 0;
let operators = [];
document.querySelectorAll('.key').forEach(item => {
    item.addEventListener('click', event => {
        const pressedKey = event.target.innerText;
        if(number)
        {
            number += pressedKey;
        }else{
            number = pressedKey;
        }
        updateResult(number);
    })
})
document.querySelector('.operator-plus').addEventListener('click',(event)=>{
    
    updateResult(0);
    if(operators[operators.length-1] == "+")
    {
        sumResult(number,secondNumber);
        secondNumber = parseFloat(resultCh.innerText);
    }
    else
    {
        secondNumber = number;
        number=0;
    }
    operators.push('+');
    console.log(operators);
    
})
document.querySelector('.operator-divide').addEventListener('click',(event)=>{
    updateResult(0);
    operators.push('/');
    console.log(operators);
    secondNumber = number;
    number=0;
})
document.querySelector('.operator-multiplication').addEventListener('click',(event)=>{
    updateResult(0);
    operators.push('*');
    console.log(operators);
    secondNumber = number;
    number=0;
})
document.querySelector('.operator-subtraction').addEventListener('click',(event)=>{
    updateResult(0);
    operators.push('-');
    console.log(operators);
    secondNumber = number;
    number=0;
})
const updateResult = (value) =>{
    resultCh.innerText = value;
}
const sumResult = (value,secondValue)=>{
    let a=parseFloat(value);
    let b = parseFloat(secondValue);
    const sum = a+b;
    
    updateResult(sum);
}
const dividedResult=(value,secondValue)=>{
    let a = parseFloat(value);
    let b = parseFloat(secondValue);
    const sum = a/b;
    updateResult(sum);
}
const multiplicationResult = (value,secondValue)=>{
    let a = parseFloat(value);
    let b = parseFloat(secondValue);
    const sum = a*b;
    updateResult(sum);
}
const subtractionResult = (value,secondValue)=>{
    let a = parseFloat(value);
    let b = parseFloat(secondValue);
    const sum = a-b;
    updateResult(sum);
}
document.querySelector('.operator-equals').addEventListener('click',(event)=>{
    //sumResult(number,secondNumber);
    //subtractionResult(secondNumber,number);
})

updateResult(0);

