import { useState } from "react";
import { dataNavbar } from "@/data";
import { SideBarList } from "./SideBarList";

interface IProps {
  className?: string;
  setComponentStep: (Component: React.FC) => void;
}

export const SideBar = ({ className = "", setComponentStep }: IProps) => {
  const [isActive, setIsActive] = useState<number>(0);

  const handleNavbarActive = (i: number, Component: React.FC) => () => {
    setIsActive(i);
    setComponentStep(Component);
  };

  return (
    <aside
      className={`${className} bg-[url('/bg-sidebar-desktop.svg')] bg-cover`}
    >
      <ul className="space-y-[30px] py-[40px] px-[30px]">
        {dataNavbar.map((data, i) => (
          <SideBarList
            key={data.id}
            {...data}
            index={i}
            isActive={isActive}
            setIsActive={(i: number, Component: React.FC) =>
              handleNavbarActive(i, Component)
            }
          />
        ))}
      </ul>
    </aside>
  );
};
