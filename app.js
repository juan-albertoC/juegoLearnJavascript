let numeroSecreto = 0; 

let intentos = 0;

//para cambiar aquellos valores estaticos
let numeroMaximo = 10;

//declarar lista de numeros sorteados
let listaNumerosSorteados = [];

console.log(numeroSecreto);

//----------------------FUNCIONES DEL PROGRAMA--------------------------

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    

    
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        
        
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez':'veces'}`);
        
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        } else{  
            asignarTextoElemento('p','El numero secreto es mayor');
        }
       intentos++; 
       limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    
   let valorCaja = document.querySelector('#valorUsuario');
   valorCaja.value = ''; 

}

//almacenar elementos de la lista en el array para ello una funcion
function generarNumeroSecreto(){
    //return Math.floor(Math.random()*10)+1;
    
     let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
      
     //console.log para la lista y numero generado
     console.log(numeroGenerado);
     console.log(listaNumerosSorteados);

     //si ya sorteamos todos los numeros
     if(listaNumerosSorteados.length == numeroMaximo){
         
          //texto
          asignarTextoElemento('p', 'ya se sorteron todos los numeros posibles');

     } else {
        //si numero generado esta en la lista es decir si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            //elemento ya existe en la lista recursividad llamar misma funcion
            return generarNumeroSecreto(); //reutilizar la funcionalidad
            

        } else {
            //elemnto no existe manda el nuevo elemento al final con el metodo push
            listaNumerosSorteados.push(numeroGenerado);
            

            return numeroGenerado;
        }
    }
}


function condicionesIniciales(){

asignarTextoElemento('h1','Juego del numero secreto!');

//template strings
asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);

   numeroSecreto = generarNumeroSecreto();
   
   intentos = 1;
}


function reiniciarJuego(){
    
    limpiarCaja();
    
    condicionesIniciales();
    
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}


condicionesIniciales();