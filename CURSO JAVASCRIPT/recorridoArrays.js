var articulos = [
    {nombre: "Bici", costo:3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "libro", costo: 320},
    {nombre: "celular", costo: 10000},
    {nombre: "laptop", costo: 20000},
    {nombre: "Teclaro", costo: 500},
    {nombre: "audifonos", costo:1700},

]

// filter, va a filtrar Y GENERAR UN NUEVO ARRAY

var articulosfiltrados = articulos.filter(function(articulo) {
    return articulo.costo <= 500
})


// el metodo de MAP, genera un "mapeado" del array principal, no lo altera

var nombrearticulos = articulos.map(function(articulo){
    return articulo.nombre
})


// meodo find, encuentra y muestra elementos si existen


var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
})




// FOR EACH NO GENERA UN NUEVO ARRAY POR LO CUAL SE EMPIEZA CITANDO EL ARRAY EXISTENTE


articulos.forEach(function(articulo){
    console.log(articulo.nombre);
})

// SOME arroja SOLAMENTE una validacion de verdadero o falso si existe un elemento que cumpla la condicion



var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700; 
})