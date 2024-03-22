import { Container, SideBar } from "@/shared/components";
import { useStepData } from "./shared/hooks";

export const App = () => {
  const { currentStep, handleCurrentStep, Step } = useStepData();

  return (
    <Container className="md:min-h-screen">
      <SideBar
        className="w-full md:max-w-[274px]"
        currentStep={currentStep}
        handleCurrentStep={handleCurrentStep}
      />
      <div className="mx-auto max-w-[343px] md:mx-0 md:max-w-full w-full md:pl-[25px] md:pr-[calc(25px-16px)] lg:pl-[100px] lg:pr-[calc(100px-16px)]">
        {Step}
      </div>
    </Container>
  );
};
