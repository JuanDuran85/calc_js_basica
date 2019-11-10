//archivo en JavaScript para calucladora básica
document.addEventListener('DOMContentLoaded', function() {

let acc=0, ac2c=0, operacion = ""; 

let numero = document.querySelector("#numero");
numero.value = "";
numero.focus();

let suma = document.querySelector('#suma');
let resta = document.querySelector("#resta");
let multiplica = document.querySelector("#multiplica");
let dividir = document.querySelector("#dividir");
let potencia = document.querySelector("#potencia");
let cuadrado = document.querySelector("#cuadrado");
let inverso = document.querySelector("#inverso");
let raiz = document.querySelector("#raiz");
let limpiar = document.querySelector("#limpiar");
let igual_centrado = document.querySelector(".igual_centrado");

suma.addEventListener('click', ()=> {
    acc=parseInt(numero.value);
    operacion = "+";
    numero.value="";
    numero.focus();
});

resta.addEventListener('click', ()=> {
    acc=parseInt(numero.value);
    operacion = "-";
    numero.value="";
    numero.focus();
});

multiplica.addEventListener('click', ()=> {
    acc=parseInt(numero.value);
    operacion = "*";
    numero.value="";
    numero.focus();
});

dividir.addEventListener('click', ()=> {
    acc=parseInt(numero.value);
    operacion = "/";
    numero.value="";
    numero.focus();
});

potencia.addEventListener('click', ()=> {
    acc=parseInt(numero.value);
    operacion = "^";
    numero.value="";
    numero.focus();
});

cuadrado.addEventListener('click', ()=> {
    acc=parseInt(numero.value);
    operacion = "dos";
    numero.value="Presione Igual";
    numero.focus();
});

inverso.addEventListener('click', ()=> {
    acc=parseInt(numero.value);
    operacion = "inver";
    numero.value="Presione Igual";
    numero.focus();
});

raiz.addEventListener('click', ()=> {
    acc=parseInt(numero.value);
    operacion = "raiz";
    numero.value="Presione Igual";
    numero.focus();
});

limpiar.addEventListener('click', () => {
    numero.value = "";
    acc = 0;
    acc2 = 0;
    operacion = "";
    numero.focus();
});

igual_centrado.addEventListener('click', () => {
    switch (operacion) {
        case "+":
            acc2=parseInt(numero.value);
            numero.value = (acc+acc2);
        break;
        
        case "-":
            acc2=parseInt(numero.value);
            numero.value = (acc-acc2);
        break;   
        
        case "*":
            acc2=parseInt(numero.value);
            numero.value =(acc*acc2);
        break;   
        
        case "/":
            acc2=parseInt(numero.value);
            numero.value = (acc/acc2);
        break;

        case "^":
            acc2=parseInt(numero.value);
            numero.value = Math.pow(acc,acc2);
        break;

        case "dos":
            numero.value = (acc*acc);
        break; 

        case "inver":
            numero.value = (1/acc);
        break;

        case "raiz":
            numero.value = Math.sqrt(acc);
        break; 

        default:
            numero.value = "No valido";
            break;
    };
});
});