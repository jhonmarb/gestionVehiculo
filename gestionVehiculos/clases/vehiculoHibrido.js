import VehiculoElectrico from "./vehiculoElectrico.js"
import { VehiculoCombustion } from "./vehiculoCombustion.js"

export default class vehiculoHibrido extends VehiculoElectrico{
    constructor(){
        super()
        this.nivelCombustible = 100
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
    mostrarEstado(){
        console.log(`combustible: ${this.nivelCombustible}%`)
        console.log(`bateria: ${this.nivelBateria}%`)
    }
       
    }


