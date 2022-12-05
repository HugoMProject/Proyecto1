//lg
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordAlert = document.getElementById('passwordAlert');
const btn = document.getElementById('btn')
const form = document.forms['search']
form.addEventListener ('submit', emailValidator)
btn.addEventListener('click', e);



function emailValidator(event){
    if(as){
        alert('el mail es demacioado corto')
        email.focus()
        return false 
    }

}
const validación = (e) => {
    e.preventDefault();
    if (password.value === " " || email.value === " " ) {

    }
}

function e(){

}

//rgr