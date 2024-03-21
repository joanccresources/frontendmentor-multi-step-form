import { useState } from "react";
import {
  Container,
  SideBar,
  StepAddOns,
  StepSelectPlan,
  StepSummary,
  StepYourInfo,
} from "@/shared/components";

import { IFormValues, optionSteps } from "./domain";

const initialValues: IFormValues = {
  name: "",
  email: "",
  phoneNumber: "",
  plan: "arcade",
  timePlan: "Monthly",
  checkAddOns: [],
};

export const App = () => {
  const [data, setData] = useState<IFormValues>(initialValues);
  const [currentStep, setCurrentStep] = useState<optionSteps>(0);

  const changeStep = (data: IFormValues, amount: number) => {
    setData((prev) => ({ ...prev, ...data }));
    setCurrentStep((prev) => (prev + amount) as optionSteps);    
  };

  const handleCurrentStep = (amount: optionSteps) => {
    setCurrentStep(amount);
  };

  const steps = [
    <StepYourInfo changeStep={changeStep} data={data} />,
    <StepSelectPlan changeStep={changeStep} data={data} />,
    <StepAddOns changeStep={changeStep} data={data} />,
    <StepSummary changeStep={changeStep} data={data} />,
  ];

  return (
    <>
      <pre className="absolute left-8 top-0 text-xs">
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
      <Container className="min-h-screen bg-alabaster">
        <SideBar
          className="w-full max-w-[274px]"
          currentStep={currentStep}
          handleCurrentStep={handleCurrentStep}
        />
        <div className="w-full pl-[100px] pr-[calc(100px-16px)]">
          {steps[currentStep]}
        </div>
      </Container>
    </>
  );
};
