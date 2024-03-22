import { Inavbar, optionSteps } from "@/domain";

interface ISideBarList extends Inavbar {
  index: optionSteps;
  isActive: number;
}
export const SideBarList = ({
  id,
  text,
  title,
  //
  index,
  isActive,
}: ISideBarList) => {
  return (
    <li className={`${index === isActive ? "isActive" : ""} group select-none`}>
      <div className="flex items-center gap-x-4">
        <span className="rounded-full w-[33px] h-[33px] flex items-center justify-center text-white text-md font-medium shadow-md outline outline-[0.5px] outline-white group-[.isActive]:outline-purplish-blue group-[.isActive]:bg-light-blue group-[.isActive]:text-marine-blue">
          {id}
        </span>
        <div className="hidden md:flex text-left h-[33px] flex-col justify-between">
          <span className="block text-cool-gray text-xs/none">{text}</span>
          <span className="block text-white text-base/none">{title}</span>
        </div>
      </div>
    </li>
  );
};
