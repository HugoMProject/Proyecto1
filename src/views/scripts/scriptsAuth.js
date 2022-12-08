//lg
const formulario = document.getElementById('form');
const formulario1 = document.querySelector('.formLogin');
const inputs = document.querySelectorAll('#form input');

const expression = { //         expresiones regulares, para permitir solo ciertos caracteres.S
    name: /^[a-zA-ZÀ-ÿ\s\_\-]{1,40}$/,            
    surname: /^[a-zA-ZÀ-ÿ\s\_\-]{1,40}$/,
    password: /^[a-zA-ZÀ-ÿ0-9\s\_\-]{1,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

//                  manejos de errores errores 
const errorName = 'Ingresa un nombre valido, solo se permiten letras';
const errorSurname ='Ingresa un apellido valido, solo se permiten letras';
const errorPassword ='Ingresa un constaseña valida, solo se permiten letras y numeros y _';
const errorEmail ='Ingresa un email valido, solo se permiten letras, @ y numeros';
const errorForm = 'Debe completar los campos con sus datos, no puede haber campos vacio.'

const inputValidator = {
    Name: false,
    Surname: false,
    Password: false,
    Email: false
}

const validatorForm = (e)=>{  //swich para llamar a cada input e inyectarle la funcion para validar el input. 
    switch (e.target.name) {
        case "name":
            validarInput(expression.name,e.target,'Name',errorName)
            break;
    
        case "surname":
            validarInput(expression.surname,e.target,'Surname',errorSurname)
            break;
    
        case "password":
            validarInput(expression.password,e.target,'Password',errorPassword)
            break;
    
        case "email":
            validarInput(expression.email,e.target,'Email',errorEmail)
            break;
            
        }
    };
    //  validamos el input si esta correcto, de lo contrario le inyectamos un error.
const validarInput = (expresion, input, campo,error)=>{
        if(expresion.test(input.value)){
            document.getElementById(`error${campo}`).innerHTML= '';
            document.getElementById(`error${campo}`).style.color= "";
            document.getElementById("errorForm").innerHTML = "";
            document.getElementById("errorForm").style.color= "";
            inputValidator[campo]= true;
        }else{
            document.getElementById(`error${campo}`).innerHTML =`${error}`;
            document.getElementById(`error${campo}`).style.color="red";
            inputValidator[campo]= false;
        }
    };
    // iteramos por todos los input le agregamos los eventos.
inputs.forEach((input)=>{
    input.addEventListener('keyup',validatorForm);
    input.addEventListener('blur',validatorForm);
});

formulario.addEventListener('submit', (e) => {
    // e.preventDefault();
    if(inputValidator.Name && inputValidator.Surname && inputValidator.Password && inputValidator.Email){
        document.getElementById("errorForm").innerHTML = "";
        document.getElementById("errorForm").style.color= "";
        
        return formulario.submit();
    }else{
        e.preventDefault();
        document.getElementById("errorForm").innerHTML =`${errorForm}`;
        document.getElementById("errorForm").style.color="red";
    }

});
formulario1.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(inputValidator.Password && inputValidator.Email){
        document.getElementById("errorForm").innerHTML = "";
        document.getElementById("errorForm").style.color= "";
        
        return formulario1.submit();
    }else{
        e.preventDefault();
        document.getElementById("errorForm").innerHTML =`${errorForm}`;
        document.getElementById("errorForm").style.color="red";
    }

});







//rgr
// window.addEventListener('load', () => {
//     const $inputEmail = document.querySelector('#correo');
//     const $errorEmail = document.querySelector('#errorEmail');
//     const $form = document.querySelector('#FORM');
//     const $errorForm = document.querySelector('#errorForm');
//     const regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
//     $inputEmail.addEventListener('blur', () => {
//       const iconEmail = document.querySelector('.isEmail');
//       switch (true) {
//         case !$inputEmail.value.trim():
//           $errorEmail.innerHTML = 'El campo email es obligatorio';
//           break;
//         case !regExEmail.test($inputEmail.value):
//           $errorEmail.innerHTML = 'Ingresa un email valido';
//           break;
//         default:
//           iconEmail.classList.remove('fa-times-circle');
//           $errorEmail.innerHTML = '';
//           break;
//       }
//     });
//     $form.addEventListener('submit', function (e) {
//       let error = false;
//         e.preventDefault();
//       const elementsForm = this.elements;
//       for (let i = 0; i < elementsForm.length - 1; i++) {
//         if (elementsForm[i].value === '') {
//           $errorForm.innerHTML = 'Los campos señalados son obligatorios';
//           error = true;
//         }
//       }
//       if (!error) {
//         $form.submit();
//       }
//     });
//   });