//alert("FUNTION ACTIVO")
// ########## tipo de variables
//const para valores constantes
const pi = 3.1416
const pul = 2.54;
// var para variables globales
var days = 10;
var name = "Adrian camilo";
// let para variables de bloque o locales
let count = 1;

//########### formas de impresion
//alert
//alert(name);
//console.log
console.log(name);
//body pantalla
document.write(name + "##Adrian Camilo");
document.getElementById("box_one").innerHTML = "<h1>Adrian Camilo</h1>";
document.getElementById("box_two").innerText = "<h1>Adrian Camilo</h1>";

// librerias

//Swal.fire(
  //  'The Internet?',
    //'That thing is still around?',
    //'question'
  //)

  //Swal.fire({
    //icon: 'error',
    //showConfirmButton: false,
    //title: name,
    //text: name,
    //footer: " footer: " + name,
   // background: 'green',
    //position: 'center'
  //});


//#### tipos de datos
//numericos
var number_one = 20;
var number_two = 5.5;
//texto
var class_type = "Electiva tecnica 1";
// booleanos
var boolean = true; //false
//arrays - vectores
var array_num = [1,2,3,4,5,6,7,8,9];
var Array_text = ["lunes","martes","miercoles","jueves","viernes"];
var array_mix = [1,"a",2, "c"];
var array_mul = [
    {name: "Adrian", last_name: "Trigos", age: "18"},
    {name: "Pipe", last_name: "Sepulveda", age: "17"},
    {name: "Sophia", last_name: "Ospina", age: "17"},
    {name: "laly", last_name: "ariza", age: "18"}
]
// ####### operadores basicos
// suma
var suma = number_one + number_two;
console.log("suma " + suma);
//resta
var resta = number_one - number_two;
console.log("resta " + resta);
// multiplicacion
var multiplicacion = number_one * number_two;
console.log( "multiplicacion " + multiplicacion);
// division
var division = number_one / number_two;
console.log( "divison " + division.toFixed(2));
// modulo
var modulo = number_one % number_two;
console.log("modulo " + modulo);






