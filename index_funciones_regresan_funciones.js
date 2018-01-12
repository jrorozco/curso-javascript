function obtenerAleatorio(){
    return Math.random();
}

console.log( obtenerAleatorio() + 10);

function obtenerNombre()
{
    return "Juan";
}


console.log(obtenerNombre() + "Padilla");

var nombre =obtenerNombre();

console.log(nombre);

function esMayor05()
{
    if(obtenerAleatorio() > 0.5)
    {
        return true;
    }
    else{
        return false;
    }
    
}

console.log(esMayor05());

if(esMayor05()){
    console.log("Es mayor a 0.5");
}else{
    console.log("Es menor a 0.5");
}

function crearPersona(nombre , apellido)
{
   return {
       nombre:nombre,
       apellido:apellido
    }
}
console.log(crearPersona("Maria", "Orozco"));

var persona=crearPersona("Rene", "Orozco");

console.log(persona.nombre);
console.log(persona.apellido);

function creaFunction()
{
    return function(nombre){
        console.log("Me creo !!" + nombre);
        return function(){
            console.log("Seunda Funcion!!");
        }
    }
}

var nuevaFuncion= creaFunction();

var segundaFuncion=nuevaFuncion(persona.nombre);

segundaFuncion();
