var persona={
    nombre:"Maria", 
    apellido:"Dubon",
    imprimirNombre:function(){

        console.log(this.nombre + " " + this.apellido);

    },
    direccion:{
        pais:"Costa Rica",
        obterPais:function(){
            var self=this;
            //console.log("La Direccion es en : "+ this.pais);
            var nuevaDireccion=function(){
                console.log(self);
                console.log("La Direccion es en : "+ self.pais);
            }
            nuevaDireccion();
        }
    }
}
persona.nombre= "Andres";
persona.imprimirNombre();
persona.direccion.obterPais();