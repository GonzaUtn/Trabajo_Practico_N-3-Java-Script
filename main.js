
//Introduccion Java Script
 function IntroduccionJs(){
    console.log("---Ejercicio 1 - Introduccion Java Script----");
    let a=5,b=10,c;
    c=a+b;

    
    console.log("La suma entre a y b es: "+ c);

//Ejercicio 2

let nombre = prompt("¿Como te llamas?");
console.log("Hola " + nombre + "!")

}
//Operadores logicos y condicionales
function OperadoresLogicosCondicionales(){
//Ejercicio 3
console.log("---Ejercicio 2 - Operadores logicos y condicionales----");
let a = prompt("Ingrese el valor de a");
let b = prompt("Ingrese el valor de b");
let c = prompt("Ingrese el valor de c");

a= parseInt(a);
b= parseInt(b);
c= parseInt(c);

if(isNaN(a)||isNaN(b)||isNaN(c)){
    prompt("Ingrese los valores nuevamente");
    let a = prompt("Ingrese el valor de a");
    let b = prompt("Ingrese el valor de b");
    let c = prompt("Ingrese el valor de c");
    
}else{
    if(a<b && b<c){
        console.log("valor de a: "+a);
        console.log("valor de b: "+b);
        console.log("valor de c: "+c);
        console.log("El mayor numero de los tres es: "+c);
    }   
    if(b<a && c<a){
        console.log("valor de a: "+a);
        console.log("valor de b: "+b);
        console.log("valor de c: "+c);
        console.log("El mayor numero de los tres es: "+a);
    }   
    if(a<b && c<b){
        console.log("valor de a: "+a);
        console.log("valor de b: "+b);
        console.log("valor de c: "+c);
        console.log("El mayor numero de los tres es: "+b);
    }   
}

    
//Ejercicio 4
function ParInpar(numero){
    if(numero%2 === 0){
        console.log("El numero "+numero+", es par");
     } else{
            console.log("El numero "+numero+", es impar");
        }        
}

let numero = prompt("Ingrese un numero y te dire si es par o impar");
numero= parseInt(numero);

if(isNaN(numero)){
    console.log("Ingrese nuevamente el valor");
}else{
    ParInpar(numero);
}

}
//Operadores de asignacion y bucles
function OperadoresAsignacionBucles(){

    console.log("---Ejercicio 3 - Operadores de asignacion y bucles----");
    
    function decrementar(a){
        let bandera = a;
        while (bandera > 0) {
            console.log(bandera);
            --bandera;
        }  
    }
    
    let numero = prompt("Ingrese un numero");
    numero=parseInt(numero);
    if(isNaN(numero)){
        console.log("Ingrese nuevamente");
    }else{
        decrementar(numero);
    }

    //Ejercicio 2

    let a;
    do{  
        a = prompt("Ingrese un numero mayor a 100");
        a=parseInt(a);
            if(a>100){
                console.log("Ingresaste un numero mayor a 100:"+a);
            }else if(isNaN(a)){
                console.log("Ingrese nuevamente");
           
            }else {
                console.log("Ingrese nuevamente");
            }
    
    }while(a<100);

    
}
//Funcion en javaScript
function funcionesJS(){
    console.log("---Ejercicio 4 - Funciones en javaScript----");
    function esPar(a){
        if(a%2===0){
            return true;
        }else{
            return false;
        }
    }
    
    let a = prompt("Ingrese un numero ");
    a=parseInt(a);
    if(isNaN(a)){
        console.log("Ingrese nuevamente un numero");
    }else{
       
        console.log("El numero "+a+" es par: " + esPar(a));
    }
    
    //Ejercicio 2
    
    function convertirCelsiusAFahrenheit (celsius){
        let fahrenheit= celsius*1.8 +32;
        let valor= console.log(celsius+"°C son equivalantes a "+fahrenheit+"°F")
        return valor;
    }
    
    let celsius = prompt("Ingrese temperatura en grados celsius");
    celsius= parseFloat(celsius);
    convertirCelsiusAFahrenheit(celsius);
}
function ejecutarObjetosJS(){
    console.log("---Ejercicio 5 - Objetos en javaScript----");
    let Persona={
        nombre:"gonzalo",
        edad: 24,
        ciudad:"paris" ,
        cambiarCiudad: function cambiarCiudad(ciudad){
            this.ciudad=ciudad;
        },
    }
    console.log(Persona);
    Persona.cambiarCiudad("Mendoza");
    
    
    let libro ={
        titulo: "El quijote",
        autor: "Miguel de Cervantes",
        año:2014,
        getAntiguedad : function getAntiguedad(año){
            let antiguedad= año-this.año;
            if(antiguedad>10){
                return true;
            }else{
                return false;
            }
        }
    }
    let año=2024;
    console.log("El libro "+libro.titulo+" es antiguo: "+libro.getAntiguedad(2025));
}
function ejecutarArraysJs(){   
    console.log("---Ejercicio 6 - Arrays en javaScript----");
    let numeros=[1,2,3,4,5,6,7,8,9,10];
    let numerosMultiplicados=[];
    numeros.forEach((elemento) => {numerosMultiplicados.push(elemento*2)})
    console.log("Numeros originales: "+numeros);
    console.log("Numeros multiplicados: "+numerosMultiplicados);
    
    
    
    let pares=[];
    for (let i=0 ; i <= 20 ; i++){
        if(i%2 === 0){
        pares.push(i);
        }
      }
      console.log("Primero 10 numeros pares:\n"+pares);
}
// Introduccion al DOM

//Ejercicio 1
document.addEventListener("DOMContentLoaded",() => {
    const boton = document.getElementById("button1");
    const contentText = document.getElementsByClassName("contentText");
   
    const ChangeColorText = () => {
        Array.from(contentText).forEach(contenido =>{
            
            if (contenido.classList.contains('textBlue')) {
                contenido.classList.remove('textBlue');
                
               
            } else {
                contenido.classList.add('textBlue');
            }
        });       
    }
    boton.addEventListener("click", () => {
        console.log("El usuario cambio de color el texto");
        ChangeColorText();      
    });
})

//Ejercicio2

document.addEventListener("DOMContentLoaded",() => {
    const button2 = document.getElementById("button2");
    const input= document.getElementsByClassName("input")[0];

    const mostrarAlerta = () =>{
        const mensaje = input.value;
        alert("Has ingresado: "+ mensaje );
    } 

    button2.addEventListener("click",() =>{
        mostrarAlerta();
    })  
})


//Eventos en DOM

//Ejercicio 1

document.addEventListener("DOMContentLoaded",()=>{
    const item = document.getElementsByClassName("item");

    Array.from(item).forEach(elemento=>{
        elemento.addEventListener("click",()=>{
            console.log(elemento.textContent);
        })
    })
})
//Ejercicio 2

document.addEventListener("DOMContentLoaded",()=>{
    const inputTexto = document.getElementsByClassName("inputTexto")[0];
    const buttonDeshabilitar = document.getElementById("button3");
    const buttonHabilitar = document.getElementById("button4");

    buttonDeshabilitar.addEventListener("click",()=>{
       inputTexto.disabled = true;
    })

    buttonHabilitar.addEventListener("click", ()=>{
        inputTexto.disabled = false
    })
})

//LocalStorage
document.addEventListener("DOMContentLoaded",()=>{

    const inputCorreo = document.getElementsByClassName("inputCorreo");
    const mail = inputCorreo[inputCorreo.length-1];
    const button5 = document.getElementById("button5");
    const button6 = document.getElementById("button6");
    const mostrar = document.getElementsByClassName("mostrar")[0];

    const getData = () =>{
        const email = mail.value;
        localStorage.setItem("mail",JSON.stringify({
            email,
        }));
    }

    const deleteData= () =>{
        localStorage.removeItem("mail");
    } 

    button5.addEventListener("click",()=>{
        getData();
        const contenido = localStorage.getItem("mail");
        
            const parsedContent = JSON.parse(contenido);
            mostrar.textContent = `Correo guardado: ${parsedContent.email}`;     
    })

    button6.addEventListener("click",()=>{
        deleteData();
    })

})











