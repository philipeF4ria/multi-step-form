export function Payment({ nextStep }) {
  return (
    <div>
      <h1>Pagamento</h1>
      <input type="text" placeholder="Número do cartão"/>
      <input type="text" placeholder="Nome impresso no cartão"/>
      <input type="text" placeholder="CVV"/>
      <input type="text" placeholder="Vencimento"/>
      <button onClick={nextStep} >Próximo</button>
    </div>
  );
}
