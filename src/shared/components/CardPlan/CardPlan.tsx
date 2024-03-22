import { useField } from "formik";
import { IcardPlan } from "@/domain";

interface IProps extends IcardPlan {}

export const CardPlan = (props: IProps) => {
  const {
    className = "",
    img,
    title,
    price,
    textPrice,
    time,
    ...restProps
  } = props;
  const [field] = useField(restProps);
  return (
    <label
      htmlFor={restProps.id}
      className={`${className} p-[18px] cursor-pointer rounded-lg outline outline-1 outline-light-gray has-[:checked]:outline-pastel-blue has-[:checked]:bg-magnolia hover:outline-pastel-blue flex md:block gap-x-[13px]`}
    >
      <input
        {...field}
        {...restProps}
        type="radio"
        className="hidden"
        defaultChecked={restProps.defaultChecked}
      />
      <div>
        <img src={img} alt={title} />
      </div>
      <div className="md:mt-[46px] leading-none">
        <p className="inline-block text-marine-blue font-medium">{title}</p>
        <p className="mt-1.5 md:mt-[10px] text-cool-gray">
          ${price}
          {textPrice}
        </p>
        {time && <p className="mt-1.5 md:mt-[10px] text-sm text-marine-blue">{time}</p>}
      </div>
    </label>
  );
};
