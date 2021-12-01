export function VehicleData({ nextStep }) {
  return (
    <div>
      <h1>Dados do Veículo</h1>
      <input type="text" placeholder="Marca"/>
      <input type="text" placeholder="Modelo e ano"/>
      <input type="text" placeholder="Cor"/>
      <input type="text" placeholder="Placa"/>
      <button onClick={nextStep}>Próximo</button>
    </div>
  );
}
