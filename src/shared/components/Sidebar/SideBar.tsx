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
      className={`${className} bg-[url('/bg-sidebar-desktop.svg')] bg-cover`}
    >
      <ul className="space-y-[30px] py-[40px] px-[30px]">
        {dataNavbar.map((data, i) => (
          <SideBarList
            key={data.id}
            {...data}
            index={i as optionSteps}
            isActive={isActive}
            setIsActive={handleNavbarActive}
          />
        ))}
      </ul>
    </aside>
  );
};
