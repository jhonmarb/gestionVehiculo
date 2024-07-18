export default class VehiculoElectrico {
    constructor() {
        this.nivelBateria = 100;
    }
    
    cargarBateria(cantidad){
        this.nivelBateria = Math.min(100, this.nivelBateria + cantidad)
        console.log(`bateria: ${this.nivelBateria}%` )
    }

    usarBateria(cantidad){
         if (cantidad <= this.nivelBateria){
            this.nivelBateria -= cantidad 
            console.log(`bateria: ${this.nivelBateria}%`)
         } 
    }
}
