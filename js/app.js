function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else {
        return getPin();
    }
}
function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}
document.getElementById('keypad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
})
function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-numbers').value;
    const displaySuccess = document.getElementById('notify-success');
    const displayFail = document.getElementById('notify-fail');
    if(pin == typedNumber){
       displaySuccess.style.display = 'block';
       displayFail.style.display = 'none';
    }
    else{
        displaySuccess.style.display = 'none';
        displayFail.style.display = 'block';
    }
}