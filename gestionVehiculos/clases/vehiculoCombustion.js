export class VehiculoCombustion {
    constructor(nivelCombustible) {
        this.nivelCombustible = nivelCombustible;
    }

    llenarTanque(cantidad){
        this.nivelCombustible = Math.min(100, this.nivelCombustible + cantidad)
        console.log(`tanque lleno ${this.nivelCombustible}%`)
    }
    usarCombustible(cantidad){
        if (cantidad <= this.nivelCombustible){
           this.nivelCombustible -= cantidad 
           console.log(`combustible usado: ${this.nivelBateria}%`)
        } 
    }
    
}
