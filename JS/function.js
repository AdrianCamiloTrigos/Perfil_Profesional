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

// OPERADORES LOGICOS Y EWSTRUCTURAS CONDICIONALES (INVERSE, INCREMENTO Y DECREMENTO)

// AND && con if - Ampersand

var bool = false
numeric = 10;
if(!bool && numeric === "10") { //bool == true
  console.log("ENTRA IF")
}
else{
  console.log("ENTRA ELSE");
}
// or || con if
if(!bool || numeric == 7){
  console.log("entra if");
  numeric+=3;
}else{
  console.log("entra else");
  numeric--;
}
console.log(numeric);

// FOR
for(let j = 0; j<Array_text.lenght; j++){
  console.log(Array_text[j] + (j+1));
}

//WHILE
let f=0;
while(f<Array_text.length){
  console.log(Array_text[f] + (f+1));
  f++;
}

// DO WHILE
let m=0;
do{
  console.log(Array_text[m] + (m+1));
  m++;
}while(m<Array_text.length);

//FUNCIONES Y EVENTOS
function load_page(){
  //alert("la pagina se ha cargado correctamente");
}

function change_Color(){
  document.body.style.backgroundColor = "red";
  document.body.style.color = "#fff"
}

const btn_Limpar = document.querySelector("#clear_color");

clear_color.addEventListener("dblclick", () => {
  document.body.style.backgroundColor = "#fff";
  document.body.style.color = "#000"
});

//Registro formulario
const form_register = document.getElementById("form_register");
const nombres       = document.getElementById("nombres");
const apellidos       = document.getElementById("apellidos");
const information       = document.getElementById("information");

form_register.addEventListener("submit" , name_event =>  {
  name_event.preventDefault();
  let info ="";
  //console.log(nombres.value);
  if(nombres.ariaValueMax.length <= 2 || apellidos.ariaValueMax.length <= 2){
      info += "Nombres Y/O APELLIDOS INVALIDOS"
      information.style.color = "red";
  }else{
      alert(nombres.value + " " + apellidos)
  }
  information.innerText = info;
})

