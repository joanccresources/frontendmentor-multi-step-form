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
            <div className="h-[600px] max-w-[940px] mx-auto mt-[30px] xl:mt-[52.5px] 2xl:mt-[105px]">
              <div className="h-full p-4 bg-white rounded-lg flex">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
