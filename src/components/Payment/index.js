import { 
  Container, 
  Input, 
  ButtonsArea, 
  Button,
} from '../../styles/forms';


export function Payment({ comeBack }) {
  return (
    <Container>
      <Input type="text" placeholder="Número do cartão"/>
      <Input type="text" placeholder="Nome impresso no cartão"/>
      <Input type="text" placeholder="CVV"/>
      <Input type="text" placeholder="Vencimento"/>
      <ButtonsArea>
        <Button 
          onClick={comeBack}
          backgroundColor="transparent"
          fontColor="#666"
        >
          Voltar
        </Button>
      </ButtonsArea>
    </Container>
  );
}
