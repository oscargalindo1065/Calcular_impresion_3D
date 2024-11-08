import { useState } from 'react';
import { Settings, Edit } from 'lucide-react';

const App = () => {
  const [precioEnergia, setPrecioEnergia] = useState(1000);
  const [tiempoImpresion, setTiempoImpresion] = useState(0);
  const [cantidadMaterial, setCantidadMaterial] = useState(0);
  const [posprocesado, setPosprocesado] = useState(false);
  const [precioImpresion, setPrecioImpresion] = useState(0);

  const calcularPrecio = () => {
    const precioMaterial = (cantidadMaterial / 1000) * 85000;
    const precioEnergiaTotal = (tiempoImpresion * precioEnergia / 60);
    const precioDepreciacion = (tiempoImpresion / 60) * 280;
    const precioTrabajador = posprocesado ? (tiempoImpresion / 60) * 8000 : 0;
    const precioTotal = precioMaterial + precioEnergiaTotal + precioDepreciacion + precioTrabajador;
    const factorFallo = precioTotal * 0.15;
    const precio = precioTotal + factorFallo;
    setPrecioImpresion(precio);
  };

  const actualizarPrecioEnergia = (e) => {
    setPrecioEnergia(parseInt(e.target.value));
  };

  const actualizarTiempoImpresion = (e) => {
    setTiempoImpresion(parseInt(e.target.value));
  };

  const actualizarCantidadMaterial = (e) => {
    setCantidadMaterial(parseInt(e.target.value));
  };

  const actualizarPosprocesado = (e) => {
    setPosprocesado(e.target.checked);
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-8 text-center">Calculadora de Precio de Impresión 3D</h1>
      <div className="flex flex-col mb-8">
        <label className="text-lg font-bold mb-2">Precio de la Energía (COP/min)</label>
        <div className="flex items-center">
          <input type="number" value={precioEnergia} onChange={actualizarPrecioEnergia} className="w-full p-2 pl-10 text-lg border border-gray-400 rounded-lg" />
          <Edit className="w-6 h-6 ml-2 text-gray-400" />
        </div>
      </div>
      <div className="flex flex-col mb-8">
        <label className="text-lg font-bold mb-2">Tiempo de Impresión (min)</label>
        <input type="number" value={tiempoImpresion} onChange={actualizarTiempoImpresion} className="w-full p-2 pl-10 text-lg border border-gray-400 rounded-lg" />
      </div>
      <div className="flex flex-col mb-8">
        <label className="text-lg font-bold mb-2">Cantidad de Material (g)</label>
        <input type="number" value={cantidadMaterial} onChange={actualizarCantidadMaterial} className="w-full p-2 pl-10 text-lg border border-gray-400 rounded-lg" />
      </div>
      <div className="flex items-center mb-8">
        <input type="checkbox" checked={posprocesado} onChange={actualizarPosprocesado} className="mr-2" />
        <label className="text-lg font-bold">Posprocesado</label>
      </div>
      <button onClick={calcularPrecio} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Calcular Precio</button>
      <div className="flex justify-center mt-8">
        <p className="text-3xl font-bold">Precio de la Impresión: {precioImpresion} COP</p>
      </div>
      <div className="flex justify-center mt-4">
        <Settings className="w-6 h-6 text-gray-400" />
      </div>
    </div>
  );
};

export default App;