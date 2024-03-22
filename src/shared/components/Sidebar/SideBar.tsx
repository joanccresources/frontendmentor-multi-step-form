import { useEffect, useState } from "react";
import { dataNavbar } from "@/data";
import { SideBarList } from "./SideBarList";
import { optionSteps } from "@/domain";

interface IProps {
  className?: string;
  currentStep: optionSteps;
  handleCurrentStep: (amount: optionSteps) => void;
}

export const SideBar = ({
  className = "",
  currentStep,
  handleCurrentStep,
}: IProps) => {
  const [isActive, setIsActive] = useState<optionSteps>(currentStep);

  const handleNavbarActive = (i: optionSteps) => {
    setIsActive(i);
    handleCurrentStep(i);
  };

  useEffect(() => {
    handleNavbarActive(currentStep);
  }, [currentStep]);

  return (
    <aside
      className={`${className} bg-[url('bg-sidebar-mobile.svg')] bg-cover md:bg-[url('/bg-sidebar-desktop.svg')] `}
    >
      <ul className="flex justify-center gap-x-[15px] mt-8 mb-[106px] md:mt-0 md:mb-0 md:block md:space-y-[30px] md:py-[40px] md:px-[30px]">
        {dataNavbar.map((data, i) => (
          <SideBarList
            {...data}
            key={data.id}
            index={i as optionSteps}
            isActive={isActive}
          />
        ))}
      </ul>
    </aside>
  );
};
