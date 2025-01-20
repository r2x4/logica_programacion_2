//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Juego del Numero Secreto';aqui realisaremos una funcion de texto 

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Escoge un Numero del 1 al 10';
//se ponen dos parametros

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;




function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);//aqui llamamos un strig y debe ser un int por eso se usa parseInt
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el Numero en ${intentos} ${(intentos === 1) ? 'Vez' : 'Veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //usuario no aserto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El Numero es Menor');
        }else{
            asignarTextoElemento('p','El Numero es Mayor');
        }
        intentos++;
        limpiarCaja ();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si el numero generado esta incluido en la lista
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')
    } else {

        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }
} 

function condiconesIniciales() {
   //aqui asignamos la funcion fuera de los bloques osea fuera de los corchetes java lee de arriba hacia abajo enn html se puede llamar pero en eventos
    asignarTextoElemento('h1', 'Juego Del Numero Secreto!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1; 
}

function reiniciarJuego() {
    // limpiar caja
    limpiarCaja();
    // Indicar mjs de intervalo de numeros
    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    condiconesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

condiconesIniciales();


