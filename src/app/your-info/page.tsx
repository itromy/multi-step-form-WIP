import Container from "@/components/Container";
import Stepper from "@/components/Stepper";
import STEPPER_STEPS from "@/constants/StepperSteps";

export default function YoutInfoPage() {
  return (
    <>
        <Container>
          <Container backgroundColor="#463EF6">
            <Stepper active={0} steps={STEPPER_STEPS}/>
          </Container>
          <h1>Your Personal Info</h1>
        </Container>
    </>
  );
}
