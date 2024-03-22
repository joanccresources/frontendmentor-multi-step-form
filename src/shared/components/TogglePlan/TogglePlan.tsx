import { typeTimePlan } from "@/domain";
import { useField } from "formik";

interface IProps {
  className?: string;
  // input
  timePlan: typeTimePlan;
  handleTimePlan: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  [x: string]: unknown;
}
export const TogglePlan = ({
  className = "",
  timePlan,
  handleTimePlan,
  ...restProps
}: IProps) => {
  const [field] = useField(restProps);

  return (
    <div
      className={`${className} space-x-3 flex items-center justify-center bg-magnolia rounded-lg h-12 font-medium text-cool-gray group`}
    >
      <input
        {...field}
        {...restProps}
        type="radio"
        value="Monthly"
        id="monthly"
        className="hidden peer/monthly"
        checked={timePlan === "Monthly"}
        onChange={handleTimePlan}
      />
      <input
        {...field}
        {...restProps}
        type="radio"
        value="Yearly"
        id="yearly"
        className="hidden peer/yearly"
        checked={timePlan === "Yearly"}
        onChange={handleTimePlan}
      />

      <label
        htmlFor="monthly"
        className="peer-checked/monthly:text-marine-blue"
      >
        <span className="cursor-pointer select-none">Monthly</span>
      </label>
      <div className="bg-marine-blue relative w-11 h-6 rounded-full peer peer-checked/yearly:after:translate-x-[calc(100%+2px)] rtl:peer-checked/yearly:after:-translate-x-full peer-checked/yearly:after:border-white after:content-[''] after:absolute after:top-[3.5px] after:start-[5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all" />
      <label htmlFor="yearly" className="peer-checked/yearly:text-marine-blue">
        <span className="cursor-pointer select-none">Yearly</span>
      </label>
    </div>
  );
};
