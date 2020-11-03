// los objetos quedan determinados por el "{}"

var miAuto = {
marca: "toyota",
modelo: "corolla",
annio: 2020,
detalleDelAuto:function() {
    console.log(`Auto ${this.modelo} ${this.annio}`);
}

};


// al darle enter, arroja la marca, annio, modelo (denominada como propiedad del objeto)
miAuto.marca 
miAuto.modelo
miAuto.annio

// arroja de forma simultanea propiedades concatenadas mediante una funcion
miAuto.detalleDelAuto();

//this hace una referencia al elemento padre en este caso seria "miauto", puede tener otros contextos en otros casos
this 