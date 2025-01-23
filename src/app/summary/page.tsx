import Container from "@/components/Container";
import Stepper from "@/components/Stepper";
import STEPPER_STEPS from "@/constants/StepperSteps";

export default function SummaryPage() {
  return (
    <>
      <Container>
        <Container backgroundColor="#463EF6">
          <Stepper active={4} steps={STEPPER_STEPS} />
        </Container>
        <h1>Summary</h1>
      </Container>
    </>
  );
}
