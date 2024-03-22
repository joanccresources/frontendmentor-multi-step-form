import { initialValues } from "@/data";
import { IFormValues, optionSteps } from "@/domain";
import { useState } from "react";
import {
  StepAddOns,
  StepSelectPlan,
  StepSummary,
  StepYourInfo,
} from "../components";

export const useStepData = () => {
  const [data, setData] = useState<IFormValues>(initialValues);
  const [currentStep, setCurrentStep] = useState<optionSteps>(0);

  const changeStep = (data: IFormValues, amount: number) => {
    setData((prev) => ({ ...prev, ...data }));
    setCurrentStep((prev) => (prev + amount) as optionSteps);
  };
  const handleCurrentStep = (amount: optionSteps) => setCurrentStep(amount);

  const steps = [
    <StepYourInfo changeStep={changeStep} data={data} />,
    <StepSelectPlan changeStep={changeStep} data={data} />,
    <StepAddOns changeStep={changeStep} data={data} />,
    <StepSummary changeStep={changeStep} data={data} />,
  ];

  return {
    // properties
    currentStep,
    // methods
    handleCurrentStep,
    Step: steps[currentStep],
  };
};
