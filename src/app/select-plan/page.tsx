'use client';

import RadioButtonBox from "@/components/form-elements/RadioButtonBox";
import MultiStepForm from "@/components/MultiStepForm";
import PlanOption, { PlanInterval, PlanOptions } from "@/components/PlanOption";
import styles from './page.module.css';
import Toggle from "@/components/form-elements/Toogle";
import FormDataStep2Type from "@/types/Form";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function SelectPlanPage() {
  const router = useRouter();

  const [formState, setFormState] = useState<FormDataStep2Type>({
      plan: PlanOptions.Arcade,
      interval: PlanInterval.Monthly,
  })

  function onChange(changedValues: {name: string, value: string}) {
    setFormState({
      ...formState,
      [changedValues.name]: changedValues.value
    })

    console.log(changedValues);
  }

  function onNext() {
      router.push('/add-ons');
  }

  function onPrevious() {
      router.push('/your-info');
  }

  return (
    <>
      <MultiStepForm step={2} onNext={onNext} onPrevious={onPrevious}>
        <h1>Select Plan</h1>
        <div className={styles.options}>
          <div className={styles.option}>
            <RadioButtonBox value={PlanOptions.Arcade} name="plan" onChange={onChange} checked={formState.plan === PlanOptions.Arcade}>
              <PlanOption interval={formState.interval} type={PlanOptions.Arcade} />
            </RadioButtonBox>
          </div>
          <div className={styles.option}>
            <RadioButtonBox value={PlanOptions.Advanced} name="plan" onChange={onChange} checked={formState.plan === PlanOptions.Advanced}>
              <PlanOption interval={formState.interval} type={PlanOptions.Advanced} />
            </RadioButtonBox>
          </div>
          <div className={styles.option}>
            <RadioButtonBox value={PlanOptions.Pro} name="plan" onChange={onChange} checked={formState.plan === PlanOptions.Pro}>
              <PlanOption interval={formState.interval} type={PlanOptions.Pro} />
            </RadioButtonBox>
          </div>
        </div>
        <div className={styles.toggleWrapper}>
          <Toggle onChange={onChange} label1="Monthly" value1={PlanInterval.Monthly} label2="Yearly" value2={PlanInterval.Annual} name="interval" selected={formState.interval}/>
        </div>
      </MultiStepForm>
    </>
  );
}
