import { Form, Formik } from "formik";
import { TextField } from "..";
import { Button } from "../Button";
import { IFormValues, IStep } from "@/domain";

export const StepYourInfo: React.FC<IStep> = ({ changeStep, data }) => {
  const handleSubmit = (values: IFormValues) => {
    changeStep(values, 1);
  };
  return (
    <div className="mt-11">
      <h2 className="text-[2.1rem]/none inline-block text-marine-blue font-bold">
        Personal info
      </h2>
      <p className="text-base/none mt-5 text-cool-gray">
        Please provide your name, email address, and phone number.
      </p>
      <Formik initialValues={data} onSubmit={handleSubmit}>
        {() => (
          <Form className="mt-11">
            <TextField
              label="Name"
              name="name"
              type="text"
              placeholder="e.g. Joan C"
              wrapperClass=""
              className="w-full h-[46px] px-[15px] rounded-md outline outline-1 outline-light-gray focus-visible:outline-purplish-blue text-marine-blue font-medium placeholder:text-light-gray"
            />
            <TextField
              label="Email Address"
              name="email"
              type="email"
              placeholder="e.g. joan@gmail.com"
              wrapperClass="mt-6"
              className="w-full h-[46px] px-[15px] rounded-md outline outline-1 outline-light-gray focus-visible:outline-purplish-blue text-marine-blue font-medium placeholder:text-light-gray"
            />
            <TextField
              label="Phone Number"
              name="phoneNumber"
              type="tel"
              placeholder="e.g. +51900552229"
              wrapperClass="mt-6"
              className="w-full h-[46px] px-[15px] rounded-md outline outline-1 outline-light-gray focus-visible:outline-purplish-blue text-marine-blue font-medium placeholder:text-light-gray"
            />
            <Button
              text="Next Step"
              type="submit"
              wrapperClass="text-right mt-[70px]"
              className="bg-marine-blue text-white hover:bg-marine-blue/85"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};
