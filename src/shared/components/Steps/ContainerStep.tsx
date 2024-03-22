interface IProps {
  children: React.ReactNode;
  title: string;
  description: string;
}
export const ContainerStep = ({ title, description, children }: IProps) => {
  return (
    <div className="-mt-[72px] bg-white rounded-lg py-8 px-6 md:py-0 md:px-0 md:rounded-none md:bg-inherit md:mt-11">
      <h2 className="text-[2.1rem]/none inline-block text-marine-blue font-bold">
        {title}
      </h2>
      <p className="text-base md:leading-none mt-5 text-cool-gray">
        {description}
      </p>
      <div className="mt-7 md:mt-11">{children}</div>
    </div>
  );
};
