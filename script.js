let inputName = document.querySelector('#input-name')
let inputNums = document.querySelector('#input-nums')
let inputMm = document.querySelector('#input-mm')
let inputYy = document.querySelector('#input-yy')
let inputCvc = document.querySelector('#input-cvc')
let confirmButton = document.querySelector('button')

inputName.addEventListener('input', getName)
inputNums.addEventListener('input', getNums)
inputMm.addEventListener('input', getMm)
inputYy.addEventListener('input', getYy)
inputCvc.addEventListener('input', getCvc)
confirmButton.addEventListener('click', checkSubmit)


function getName(){
    if(inputName.value !== ''){
        console.log(inputName.value) 
        document.querySelector('.card-name').innerHTML= inputName.value;
    }
}

function getNums(){
    console.log(inputNums.value);
    document.querySelector('.card-nums').innerHTML = inputNums.value;
}

function getMm(){
    console.log(inputMm.value)
    document.querySelector('.card-month').innerHTML = inputMm.value 
}


function getYy(){
    console.log(inputYy.value)
    document.querySelector('.card-year').innerHTML = inputYy.value
}

function getCvc(){
    console.log(inputCvc.value)
    document.querySelector('.tri-zero').innerHTML = inputCvc.value

}

function checkSubmit(e) {
        if (inputNums.value.match(/[a-zA-Z]/g) || inputNums.value === ''){
        document.querySelector('.msg-format').style.display = 'block';
        e.preventDefault();
        document.querySelector('#input-nums').style.border = '1px solid hsl(0, 100%, 66%)'
        return false;
    } 
    
    if (inputMm.value === '' || inputYy.value === ''){
        document.querySelector('.cant-blank-one').style.display = 'block';
        document.querySelector('#input-mm').style.border = '1px solid hsl(0, 100%, 66%)'
        document.querySelector('#input-yy').style.border = '1px solid hsl(0, 100%, 66%)'
        e.preventDefault();
        return false;
    }
    
    if (inputCvc.value === '' ){
        document.querySelector('.cant-blank-two').style.display = 'block';
        document.querySelector('#input-cvc').style.border = '1px solid hsl(0, 100%, 66%)'
        e.preventDefault();
        return false;
} else {
    document.querySelector('.inputs-sec').style.display = 'none'
    document.querySelector('.thank-you').style.display = 'flex'
    event.preventDefault()
}

     

    }
