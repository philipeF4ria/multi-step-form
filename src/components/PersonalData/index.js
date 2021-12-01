export function PersonalData({ nextStep }) {
  return (
    <div>
      <h1>Dados Pessoais</h1>
      <input type="text" placeholder="Seu nome completo"/>
      <input type="text" placeholder="Seu CPF"/>
      <input type="text" placeholder="Seu endereço"/>
      <button onClick={nextStep}>Próximo</button>
    </div>
  );
}
