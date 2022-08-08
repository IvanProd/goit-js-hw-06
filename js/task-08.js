const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', formSubmitHandle);
    
function formSubmitHandle(event){
    event.preventDefault();
    const emailValidInput = document.querySelector('[name="email"]').value;
    const passwordValidInput = document.querySelector('[name="password"]').value;

    if (emailValidInput === '' || passwordValidInput === ''){
        alert('All fields must be fielled')
        //console.log(typeof passwordValidInput === '');
        //console.log(typeof emailValidInput === '');
        
    } else{
        const formData = new FormData(event.currentTarget);
        formData.forEach((value, name) => {
        console.log(name,':',value );
        formEl.reset();
        });
    }
    
};
