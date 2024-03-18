import { useState } from "react";
import { SideBar, StepYourInfo } from "@/shared/components";

export const App = () => {
  const [componentStep, setComponentStep] = useState<React.ReactNode>(
    <StepYourInfo />
  );

  const handleComponentStep = (Component: React.FC) => {
    setComponentStep(<Component />);
  };

  return (
    <main className="min-h-screen bg-alabaster">
      <div className="container">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <div className="h-[600px] max-w-[940px] mx-auto mt-[30px] xl:mt-[52.5px] 2xl:mt-[105px]">
              <div className="h-full p-4 bg-white rounded-lg flex">
                <SideBar
                  className="w-full max-w-[274px]"
                  setComponentStep={handleComponentStep}
                />
                <div className="w-full pl-[100px] pr-[calc(100px-16px)]">{componentStep}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
