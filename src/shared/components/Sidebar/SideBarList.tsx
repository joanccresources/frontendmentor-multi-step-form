import { Inavbar, optionSteps } from "@/domain";

interface ISideBarList extends Inavbar {
  index: optionSteps;
  isActive: number;
  setIsActive: (i: optionSteps) => void;
}
export const SideBarList = ({
  id,
  text,
  title,
  //
  index,
  isActive,
  setIsActive,
}: ISideBarList) => {
  return (
    <li className={`${index === isActive ? "isActive" : ""} group`}>
      <button
        className="flex items-center gap-x-4"
        onClick={() => setIsActive(index)}
      >
        <span className="rounded-full w-[33px] h-[33px] flex items-center justify-center text-white text-md font-medium shadow-md outline outline-[0.5px] outline-white group-[.isActive]:outline-purplish-blue group-[.isActive]:bg-light-blue group-[.isActive]:text-marine-blue">
          {id}
        </span>
        <div className="text-left h-[33px] flex flex-col justify-between">
          <span className="block text-cool-gray text-xs/none">{text}</span>
          <span className="block text-white text-base/none">{title}</span>
        </div>
      </button>
    </li>
  );
};
