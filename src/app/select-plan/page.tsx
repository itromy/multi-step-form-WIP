import Container from "@/components/Container";
import Stepper from "@/components/Stepper";
import STEPPER_STEPS from "@/constants/StepperSteps";

export default function SelectPlanPage() {
  return (
    <>
      <Container>
        <h1>Select Plan</h1>
        <Container backgroundColor="#463EF6">
          <Stepper active={2} steps={STEPPER_STEPS} />
        </Container>
      </Container>
    </>
  );
}
