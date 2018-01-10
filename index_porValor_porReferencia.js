/**
 * Tipos de datos javascript primitivos y objetos.
 */
var num =10;
var str = "texto";
var bol = true;
var und = undefined;
var nul = null;

var obj={
    numero : 10,
    texto :"Nuevo texto",
    objHijo:{
        numero2: 20,
        texto2:"Nuevo Texto 2 "
    }
};
console.log( obj );
/**
 * Por valor y por referencia...
 * Las variable primitivas siempres se pasan por valor
 * 
 * Los objetos siempre pasan valor por referencia estan amarrados en pocas palabras...
 */
var a= 10;
var b = a;
console.log("a : " ,a);
console.log("b : ", b);
 
a =20;
console.log("a : " ,a);
console.log("b : ", b); 

var c = {
    nombre:"Juana"
}
var d = c;
console.log("C: " , c);
console.log("D: ", d);

c.nombre= "Maria";
console.log("C: " , c);
console.log("D: ", d);

d.nombre="Pedro";
console.log("C: " , c);
console.log("D: ", d);