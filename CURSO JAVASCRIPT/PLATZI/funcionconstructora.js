


var miAuto = {
    marca: "toyota",
    modelo: "corolla",
    annio: 2020,
    detalleDelAuto:function() {
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
    
    };

// en () se especifican las propiedades que se esperande los objetos en cuestion

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}



var autonuevo = new auto("tesla", "model 3", 2020)

var autonuevo2 = new auto("tesla", "model x", 2018)

var autonuevo = new auto("toyota", "corolla", 2020)


-------------------------------------------------------------------------

<//Función constructora:
function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}


//new genera una instancia, una instacia es generar un objeto que proviene de un objeto:
var numero = prompt("How many cars?")
var autos = []; //array
for(var i = 0; i < numero; i++){

    var marca = prompt("brand?");
    var modelo = prompt("model?");
    var annio = prompt("year?");
    autos.push(new auto(marca, modelo, annio));
}

for(var i = 0; i < autos.length; i++) {
    console.log(autos[i])
}
>