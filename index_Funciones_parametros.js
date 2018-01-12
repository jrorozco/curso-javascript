/*
******+Mandar parametros
function imprimir( nombre, apellido)
{
    apellido= apellido || "xxx";
   
    console.log(nombre + " " +  apellido);
}

imprimir( "Juan", "Padilla" );*/

/*
******Mandar Objetos.
function imprimir( persona )
{
    console.log(persona.nombre + " "  + persona.apellido);
}

var persona={
    nombre: "Juan",
    apellido: "Padilla"
};


imprimir( persona );*/

function imprimir( fn )
{
    fn();
}

var miFuncion=function()
{
    console.log("Mi Funcion");
}
/*imprimir(function(){
    console.log("Funcion Anonima");
});*/

imprimir(miFuncion);