
Variables:


Dentro de JavaScript tenemos tres formas de declarar una variable las cuales son: var, const y let.

Var: Era la forma en que se declaraban las variables hasta ECMAScript 5. Casi ya no se usa porque es de forma global y tiene las siguientes características:

o Se puede reinicializar: osea todas las variables se inicializan, por ejemplo:
Var pokemonType = ‘electric’ entonces reinicializar es:
Var pokemonType = ‘grass’ osea la misma variable con diferentes datos el último dato predomina.
o Se puede reasignar: osea la variable ya inicializada le reasignamos otro valor por ejemplo: inicializamos la variable: Var pokemonType = ‘electric’ ahora la reasignamos pokemonType = ‘grass’ ya no va var
o Su alcance es función global: osea inicializamos la variable, pero la podemos llamar desde cualquier bloque (una llave abierta y una cerrada {}) pero hay que tener mucho cuidado con ello ya que puede haber peligro, no es recomendable usar VAR.

const y let es la forma en que se declaran las variables a partir de ECMAScript 6,

const: sirve para declarar variables que nunca van a ser modificadas:
o No se puede reinicilizar: es una const única no puede haber otra inicializada con el mismo nombre. const pokemonType = ‘electric’ no puede haber:
const pokemonType = ‘grass’
o No se pude re asignar: una vez que la hayamos inicializado no la podemos reasignar solo con su nombre: const pokemonType = ‘electric’ no puede ejecutarse:
pokemonType = ‘grass’
o No es inmutable: osea no puede cambiar con objetos:

Let: Son variables que pueden ser modificadas, se pueden cambiar:
o No se puede reinicilizar: es una const única no puede haber otra inicializada con el mismo nombre. let pokemonType = ‘electric’ no puede haber:
let pokemonType = ‘grass’
o Se puede reasignar: Osea la variable ya inicializada le reasignamos otro valor por ejemplo: inicializamos la variable: let pokemonType = ‘electric’ ahora la reasignamos pokemonType = ‘grass’
o Su contexto de es bloque: Solo funciona dentro de un bloque {}, fuera de ello no.






FUNCIONES



Funciones
Las funciones son las tareas que va a llevar a cabo el navegador. Existen 2 tipos de funciones
1) Declarativas
2) De expresión
Ambas pueden llevar parámetros, que son los datos que necesitan para ejecutarse.
Cada parámetro va separado por una coma.
Cada instrucción que tenga la función debe terminar con ; .
Si queremos que una función nos dé un numero o dato tenemos que usar la siguiente sintaxis:

return El dato que queremos que nos dé;

Las funciones declarativas tienen la siguiente sintaxis:
function Nombre de la función (Parámetros de la función) {Instrucciones}

Un ejemplo de una función puede ser una suma:
_
function suma (a,b) {return a+b;}_

Las funciones de expresión son aquellas que guardamos en una variable, por lo tanto, no es necesario nombrarlas y tienen la siguiente sintaxis:
_var Nombre de la variable = function(Parametros){Instrucciones}.
_

Un ejemplo de una función de expresión sería:

var suma = function(a,b){return a+b;}

Para ejecutar las funciones debemos usar la siguiente sintaxis:
_Nombre de la funcion(Parametros función); _

Si la función no tiene ningún parámetro, únicamente se escribe:

_Nombre de la función(); _













TRUTHY Y FALSY 

//Ejemplos en los que Boolean devuelve Falso:
Boolean(0); //false
Boolean(null); //false
Boolean(NaN); //false
Boolean(undefined); //false
Boolean(false); //false
Boolean(""); //false

//Ejemplos en los que Boolean devuelve verdadero:
Boolean(1); //true para 1 o cualquier número diferente de cero (0)
Boolean("a"); //true para cualquier caracter o espacio en blanco en el string
Boolean([]); //true aunque el array esté vacío
Boolean({}); //true aunque el objeto esté vacío
Boolean(function(){}); //Cualquier función es verdadera también


Faltaría tener cuidado con los números negativos.
Sólo el 0 es false.
Cualquier otro número incluso los negativos es true

Boolean(-1); // true















¿Cuándo utilizar una función declarativa y una expresiva?



Cuando hablamos de funciones en JavaScript, tenemos dos tipos de funciones: Funciones Declarativas (function declaration / function statement) y Expresiones de función (function expression / funciones anónimas).

Funciones Declarativas:
En las funciones declarativas, utilizamos la palabra reservada function al inicio para poder declarar la función:

function saludar(nombre) {
	console.log(`Hola ${nombre}`);
}

saludar('Diego');

Expresión de función:
En la expresión de función, la declaración se inicia con la palabra reservada var, donde se generará una variable que guardará un función anónima.

var nombre = function(nombre){
    console.log(`Hola ${nombre}`)
}

nombre(‘Diego’);

En la expresión de función, la función podría o no llevar nombre, aunque es más común que se hagan anónimas.

Diferencias:
A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.

Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.












<h1>OPERADORES: ASIGNACION, LOGICOS Y ARITMETICOS</h1>




Operador de asignacion
Simbolo	Descripcion
=	operador de asignacion
Operadores de comparacion
Simbolo	Descripcion
==	igual que
===	estrictamente igual que
> or >= or >==	mayor o mayor igual que
< or <= or <==	menor o menor igual que
!= or !==	diferente que
Operadores aritmeticos
Simbolo	Descripcion
+	operador suma este se utiliza para concatener dos cadenas de texto.
-	operador resta
*	operador de multicacion
/	operador de division
%	operador de modulo
**	operador de potenciacion
tambien se les conoce como operadores binarios. por que toman dos valores y generan un resultado.

Operadores logicos
Simbolo	Descripcion
!	NOT niega un valor
&&	AND
||	OR






var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function(user, cpu){
    if (user != cpu){
        if (
		(user === op1 && cpu === op3) || 
		(user === op2 && cpu === op1) || 
		(user === op3 && cpu === op2) 
){
            console.log("el usuario GANO")
        }
        else{
            console.log("La CPU Gano!!")
        }
    }
    else if(user === cpu){
        console.log("Empate")
    }
};





SWITCH

var pregunta = prompt("Ingresa tu opción: piedra, papel o tijera "); 
var user = pregunta.toLowerCase();
var options = ["piedra", "papel", "tijera"];
var machine = options[Math.floor(Math.random() * 3)];


// let numero = 'a';
//con true los casos van a pasar 
switch (true) {
    case (user === machine):
        console.log('es un empate');
        break;
    case (machine === 'piedra' && user === 'papel'):
        console.log('Ganaste')
        break;
    case (machine === 'papel'  && user === 'tijera'):
        console.log('Ganaste')
        break;
    case (machine === 'tijera' && user === 'piedra'):
        console.log('Ganaste')
        break;
    default:
        console.log('¡Perdiste!');       
}









ARRAY

Un Array es un tipo de estructura de datos, objeto. Puede guardar datos distintos dentro, guarda los datos en forma de lista.
.lenght devuelve la longitud del array.
.push() agrega elementos al final de array.
.pop() elimina un elemento del array.
.unshift() agrega un elemento al array, pero lo agrega en primer lugar.
**.shift() **elimina el elemento que está en el inicio del array.
**.indexOf ** devuelve la posición de un elemento del array.

Solo para hacer una precisión, los arreglos (al igual que todos los demás tipos de datos) en Javascript no tienen tipado fuerte, es decir que tu puedes guardar datos de diversos tipos en un arreglo sin problema alguno.
A lo que me refiero es que esto funciona en JS:

const ary = new Array("hi", true, 3, [2, false], {name: "Cosme"});
console.log(ary);





loops: for y for 


Los bucles pueden ejecutar un bloque de código varias veces. JavaScript admite diferentes tipos de bucles:

for - recorre un bloque de código varias veces

for/in - recorre las propiedades de un objeto

for/of - recorre los valores de un objeto iterable

while - recorre un bloque de código mientras se cumple una condición específica

do/while - también recorre un bloque de código mientras se cumple una condición específica









OBJETOS



Solo con el ánimo de aclarar un detalle. JS no fue diseñado dentro del paradigma orientado a objetos (a pesar de que esta basado en Java).
Originalmente era un lenguaje diseñado solo para que fuera posible interactuar con el HTML de las páginas web de los 90s, (es decir un lenguaje de scripting liviano y sencillo).
Lo que paso con JS es que a través del tiempo y debido a su entrada en auge de unos años para aca, se han ido incluyendo caracteristicas de diversos paradigmas de programación (si, también programacion orientada a objetos) en su forma de funcionar. Pero para ser sinceros JS lo que tiene es una serie de palabras clave que le permiten emular la programación orientada a objetos.
O en palabras de la MDN: “Las clases de JavaScript, introducidas en ECMAScript 2015, son principalmente azúcar sintáctica sobre la herencia existente basada en prototipos de JavaScript. La sintaxis de clase no introduce un nuevo modelo de herencia orientado a objetos a JavaScript.” Classes en JS.
Sin embargo existen herramientas que si permiten trabajar JS dentro del paradigma de orientación a objetos de forma mucho más adecuada, por ejemplo typescriptlang.
Espero que esto sirva de ayuda para ampliar conocimientos y conceptos. Saludos 😃






recorrido de arrays

Por si a alguien le quedó alguna duda con respecto a la diferencia entre find y filter:

El método find () devuelve el primer valor que coincide de la colección. Una vez que coincida con el valor en los resultados, no verificará los valores restantes en la colección de matriz.

El método filter () devuelve los valores coincidentes en una matriz de la colección. Verificará todos los valores de la colección y devolverá los valores coincidentes en una matriz.



