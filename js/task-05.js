
const inputString = document.querySelector('#name-input');
const outputString = document.querySelector('#name-output');


inputString.addEventListener('input', () =>{
    if (inputString.value === '') {
        outputString.innerHTML = outputString.textContent;
    } else{
        outputString.innerHTML = inputString.value;
    }
});