var persona={
nombre:"Juana",
apellido:"Herrera",
edad:25,
    direccion:{
        pais :"Costar Rica",
        ciudad:"San Jose",
        edificio:{
            nombre:"Edificio Principal",
            telefon:"2222-3333"
        }
    }
};
 console.log(persona.direccion.pais);
 console.log(persona.direccion);

 persona.direccion.zipcode=11101;
 console.log(persona.direccion.zipcode);

 console.log(persona.direccion.edificio.telefon);

 var edificio = persona.direccion.edificio;

edificio.nopiso="8vo piso";
console.log(persona);
console.log(edificio.nopiso);


console.log("Pesona  nombre ", persona.direccion.edificio.telefon);

var edif=persona.direccion.edificio;
console.log("Edif telefono ", edif.telefon);

var campo="edad";
console.log(persona["nombre"]);
console.log(persona["direccion"]["pais"]);

console.log(persona[campo]);