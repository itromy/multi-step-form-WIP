import RadioButtonBox from "@/components/form-elements/RadioButtonBox";
import MultiStepForm from "@/components/MultiStepForm";
import PlanOption, { PlanOptions } from "@/components/PlanOption";
import styles from './page.module.css';

export default function SelectPlanPage() {
  return (
    <>
      <MultiStepForm step={2}>
        <h1>Select Plan</h1>
        <div className={styles.options}>
          <div className={styles.option}>
            <RadioButtonBox value={PlanOptions.Arcade} name="plan">
              <PlanOption type={PlanOptions.Arcade} />
            </RadioButtonBox>
          </div>
          <div className={styles.option}>
            <RadioButtonBox value={PlanOptions.Advanced} name="plan">
              <PlanOption type={PlanOptions.Advanced} />
            </RadioButtonBox>
          </div>
          <div className={styles.option}>
            <RadioButtonBox value={PlanOptions.Pro} name="plan">
              <PlanOption type={PlanOptions.Pro} />
            </RadioButtonBox>
          </div>
        </div>
      </MultiStepForm>
    </>
  );
}
