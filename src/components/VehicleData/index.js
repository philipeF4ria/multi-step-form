import { 
  Container,
  Input,
  ButtonsArea,
  Button,
} from '../../styles/forms';

export function VehicleData({ nextStep, comeBack }) {
  return (
    <Container>
      <Input type="text" placeholder="Marca"/>
      <Input type="text" placeholder="Modelo e ano"/>
      <Input type="text" placeholder="Cor"/>
      <Input type="text" placeholder="Placa"/>
      <ButtonsArea>
        <Button 
          onClick={comeBack}
          backgroundColor="transparent"
          fontColor="#666"
        >
          Voltar
        </Button>
        <Button onClick={nextStep}>Próximo</Button>
      </ButtonsArea>
    </Container>
  );
}
