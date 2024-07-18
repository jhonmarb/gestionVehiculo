import  VehiculoHibrido  from './clases/vehiculoHibrido.js';

const vehiculoHibrido = new VehiculoHibrido();

vehiculoHibrido.cargarBateria(30);
vehiculoHibrido.usarBateria(20);
vehiculoHibrido.llenarTanque(40);
vehiculoHibrido.usarCombustion(20);
vehiculoHibrido.mostrarEstado();
