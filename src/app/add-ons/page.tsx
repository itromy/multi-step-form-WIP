import Container from "@/components/Container";
import Stepper from "@/components/Stepper";
import STEPPER_STEPS from "@/constants/StepperSteps";

export default function AddOnsPage() {
  return (
    <>
      <Container>
        <h1>Add Ons</h1>
        <Container backgroundColor="#463EF6">
          <Stepper active={3} steps={STEPPER_STEPS} />
        </Container>
      </Container>
    </>
  );
}
