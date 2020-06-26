let runningTotal = 0;
let bufferprev = "0";
let buffer="0";
let op="NaN";
const display = document.querySelector('.display');
const operator = document.querySelector('.operators')
const cancel = document.querySelector('#cancel');
const backspace = document.querySelector('#backspace');

document.querySelector('.nos').addEventListener('click', function(event){

    let num = parseInt(event.target.innerHTML);
    if(buffer==="0")
        buffer = event.target.innerHTML;
    else
        buffer = buffer+num;
    display.innerHTML = buffer;
});


operator.addEventListener('click', function(event){
    if(event.target.innerHTML=="=")
        evaluate();
    else {
        bufferprev = buffer;
        buffer = "0";
        display.innerHTML = buffer;
        op = event.target.innerHTML;
    }

})

cancel.addEventListener('click', function(event){
    buffer="0";
    display.innerHTML = buffer;
})

backspace.addEventListener('click', function(event){
    if(buffer!="0")
    buffer = buffer.substr(0, buffer.length -1);
    display.innerHTML = buffer;
})

function evaluate() {
    if(op=="+")
        display.innerHTML = parseInt(bufferprev) + parseInt(buffer);
    if(op=="-")
        display.innerHTML = parseInt(bufferprev) - parseInt(buffer);
    if(op=="*")
        display.innerHTML = parseInt(bufferprev) * parseInt(buffer);
    if(op=="÷")
        display.innerHTML = parseInt(bufferprev) / parseInt(buffer);
    buffer = "0";
    bufferprev = "0";
}
