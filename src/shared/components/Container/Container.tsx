interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className = "" }: IProps) => {
  return (
    <main className={className}>
      <div className="container">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <div className="h-[600px] max-w-[940px] mx-auto md:my-[30px] xl:my-[52.5px] 3xl:my-[105px]">
              <div className="bg-magnolia rounded-lg flex flex-col md:bg-white md:p-4 md:h-full md:flex-row">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
