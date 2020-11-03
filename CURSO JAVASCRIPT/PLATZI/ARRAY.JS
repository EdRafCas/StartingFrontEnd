var frutas = ["manzana", "platano", "cereza", "fresa"]

console.log(frutas); 


//EN ARRAY SE CUENTA DESDE 0, EL PRIMER ELEMENTO DE LA LISTA (A LA IZQUIERDA) siempre va  ala izquierda

//push agrega elemento de ultimo//
var masfrutas = frutas.push("uvas")


//pop elimina un elemento//
var ultimo = frutas.pop("uvas");


//unshift agrega un elemento nuevo al inicio//
var nuevaLongitud = frutas.unshift("uvas")


//shift borra el elemento al inicio//
var borrarfruta = frutas.shift("uvas")

//indexof dice que posicion ocupa el elemento en el array//
var posicion = frutas.indexOf("cereza")





----------------------------------------------------------------------------------------------------------------------------

var estudiantes = ["maria", "sergio", "rosa", "daniel"]

function saludarestudiantes(estudiantes) {
    console.log(`Hola, ${estudiantes}`);
}

for(var i=0; i < estudiantes.length; i++ ) {
    saludarestudiantes(estudiantes[i])
}





var estudiantes = ["maria", "sergio", "rosa", "daniel"]

function saludarestudiantes(estudiantes) {
    console.log(`Hola, ${estudiantes}`);
}

for(var estudiante of estudiantes) {
    saludarestudiantes(estudiante);
    
}



----------------------------------------------------------------------------------------------------------------------




var estudiantes = ["maria", "sergio", "rosa", "daniel"]

function saludarestudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}
// shift se va a encargar de ir sacando los componentes del array  uno por uno
while(estudiantes.length > 0){
    estudiante = estudiantes.shift();
    saludarestudiantes(estudiantes);
}



