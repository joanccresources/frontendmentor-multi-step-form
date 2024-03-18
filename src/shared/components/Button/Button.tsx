interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {}

interface IProps extends ButtonProps {
  text: string;
  wrapperClass?: string;
}

export const Button = (props: IProps) => {
  const { className, text, wrapperClass = "", ...restProps } = props;
  return (
    <div className={wrapperClass}>
      <button
        className={`rounded-lg px-6 py-3 transition-all duration-300 ${className}`}
        {...restProps}
      >
        {text}
      </button>
    </div>
  );
};
