import { useState } from 'react';

import { PersonalData } from '../../components/PersonalData';
import { VehicleData } from '../../components/VehicleData';
import { Payment } from '../../components/Payment';

import { Container, Header } from './styles';

export function Dashboard() {
  const [step, setStep] = useState(1);

  function handleNextStep(event) {
    event.preventDefault();

    if (step === 3) return;

    setStep(prevState => prevState + 1);
  }
  
  return (
    <Container>
      <Header>
        <h1><span>Go</span>Parker</h1>
      </Header>
      <div>
        {step === 1 && <PersonalData nextStep={handleNextStep} />}
        {step === 2 && <VehicleData nextStep={handleNextStep} />}
        {step === 3 && <Payment nextStep={handleNextStep}/>}
      </div>
    </Container>
  );
}