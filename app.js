let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    //console.log(typeof(numeroDeUsuario));
    //console.log(numeroSecreto);
    // console.log(typeof(numeroSecreto))
    // console.log(numeroDeUsuario);
    
    // Cuando usamos doble igual solo compara que el valor sea el mismo
    //console.log(numeroDeUsuario == numeroSecreto );
    
    // Cuando usamos tres iggual comparamos tanto valor como tipo de dato sean del mismo tipo
    //console.log(numeroDeUsuario === numeroSecreto );
    
    if (numeroDeUsuario === numeroSecreto){
     asignarTextoElemento('p',`acertaste el numero en ${intentos} ${(intentos ===1) ? 'vez': 'veces'}`);   
     document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acerto
        if (numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','el numero secreto es  menor');
        }
        else {
            asignarTextoElemento('p','el numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return; 
}


function limpiarCaja(){
    document.querySelector('#valorUsuario').value ='';

    //otra forma de hacer la instruccion de la funcion
    /* 
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value='';
    */
}

function generaNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Ya se sorteraon todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos numeros posibles');
    } else{
    //Si, el numero generado esta incluido en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generaNumeroSecreto();
    }else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }  
  }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generaNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();


/*
Crear funcion con las siguientes reglas:
    Si el número es mayor que cero, el mensaje debe ser: "El número es positivo."
    Si el número es menor que cero, el mensaje debe ser: "El número es negativo."
    Si el número es igual a cero, el mensaje debe ser: "El número es cero."


function verificarNumero(numero){
    if(numero>0){
        console.log("el numero es positivo");
    }
    else if (numero<0){
        console.log("el numero es negativo");
    } else {
        console.log("el numero es cero");
    }
}
*/

/*
EXISTEN VARIOS TIPOS DE USOS DE FUNCIONES

function saludo(){ }   -- funcion sin retorno y sin parametros --- se usa en la ejecucion de un bloque de codigo simple(s)

function saludar(nombre){ }   -- funcion sin retorno y con parametros --- se usa en la ejecucion de un bloque de codigo con argumentos

function generaNumeroAleatorio(){....}   -- funcion con retorno y sin parametros --- se usa en la ejecucion de calculo y retorno de un valor especifico

function sumar(a,b){....}   -- funcion con retorno y con parametros --- se usa en la ejecucion de calculo y retorno basado en argumentos

let saludo = function(){....};   -- funcion anonima --- se usa en la ejecucion definir una funcion sin nombre localmente

let cuadrado = x=> x* x;   -- funcion de flecha (arrow function del ingles) --- se usa en la ejecucion definicion concisa de funciones cortas


*/