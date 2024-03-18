import { useField } from "formik";

interface IProps {
  wrapperClass?: string;
  label: string;
  // input
  name: string;
  type: "text" | "email" | "password" | "tel" | "number";
  className?: string;
  placeholder?: string;
  [x: string]: unknown;
}

export const TextField = (props: IProps) => {
  const { wrapperClass = "", label = "", className = "", ...restProps } = props;
  // restProps: "Propiedades del input enviadas"
  // field:{ name, onBlur, onChange, value }
  // meta: {error: undefined, initialError: undefined, initialTouched: false,initialValue: undefined, touched: false, value: undefined }
  const [field, meta] = useField(restProps);
  return (
    <label className={`${wrapperClass} block group`}>
      <div className="flex justify-between items-center mb-1 leading-none">
        <span className="text-sm text-marine-blue font-medium">{label}</span>
        {/* This field is required */}
        {meta.touched && meta.error && (
          <span className="font-medium text-strawberry-red error">
            {meta.error}
          </span>
        )}
      </div>
      <input
        {...field}
        {...restProps}
        className={`${className} group-has-[.error]:outline-strawberry-red`}
      />
    </label>
  );
};
