import { 
  Container, 
  Input, 
  ButtonsArea, 
  Button,
} from '../../styles/forms';

export function PersonalData({ nextStep }) {
  return (
    <Container>
      <Input type="text" placeholder="Seu nome completo"/>
      <Input type="text" placeholder="Seu CPF"/>
      <Input type="text" placeholder="Seu telefone"/>
      <Input type="text" placeholder="Seu endereço"/>
      <ButtonsArea>
        <Button onClick={nextStep} style={{ marginLeft: 'auto' }}>Próximo</Button>
      </ButtonsArea>
    </Container>
  );
}
