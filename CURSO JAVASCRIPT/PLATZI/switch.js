var numero = 1

switch (numero) {
    case 1:
        console.log("Soy uno!");
        break; 
    case 10:
        console.log("Soy un 10!");
        break;
    case 100:
        console.log("si, soy un 100");
        break;
    default:
        console.log("no soy nada!!");
}





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






var pregunta = prompt("Ingrese su decisión: piedra, papel o tijera");
var decision = pregunta.toLowerCase();
var options = ["piedra", "papel", "tijera"];
var maquina = options[Math.floor(Math.random() * 3)];

switch (true) {
  case decision == "papel" && maquina == "piedra":
    alert("Ganaste crack! La maquina eligió: " + maquina);
    break;
  case decision == "piedra" && maquina == "tijera":
    alert("Ganaste crack! La maquina eligió: " + maquina);
    break;
  case decision == "tijera" && maquina == "papel":
    alert("Ganaste crack! La maquina eligió: " + maquina);
    break;
  case decision == maquina:
    alert("Ufffs, empate. La maquina eligió: " + maquina + ", también.");
    break;
  default:
    alert(
      "Perdiste mastodonte, suerte en la próxima. La maquina eligió: " + maquina
    );
}

