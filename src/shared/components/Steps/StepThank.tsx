export const StepThank = () => {
  return (
    <div className="-mt-[72px] px-6 md:px-0 py-[78px] md:py-0 bg-white md:bg-inherit rounded-lg md:rounded-none text-center md:mt-40">
      <img src="/icon-thank-you.svg" alt="ThankYou" className="mx-auto"/>
      <h2 className="text-[2.1rem]/none inline-block text-marine-blue font-bold mt-9">
        Thank you!
      </h2>
      <p className="text-base/snug mt-5 text-cool-gray">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at{" "}
        <a href="mailto:support@loremgaming.com">support@loremgaming.com</a>.
      </p>
    </div>
  );
};
