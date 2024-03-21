import { IFormValues, IStep } from "@/domain";
import { Form, Formik } from "formik";
import { Button } from "../Button";

export const StepSummary: React.FC<IStep> = ({ changeStep, data }) => {
  
  const handleSubmit = (values: IFormValues) => {
    console.log(values);
  };

  return (
    <div className="mt-11">
      <h2 className="text-[2.1rem]/none inline-block text-marine-blue font-bold">
        Finishing up
      </h2>
      <p className="text-base/none mt-5 text-cool-gray">
        Double-check everything looks OK before confirming.
      </p>
      <Formik initialValues={data} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form className="mt-11">
            <div className="flex flex-wrap gap-y-4 [&_label]:w-full"></div>

            <div className="flex justify-between mt-[70px]">
              <Button
                text="Go Back"
                type="button"
                onClick={() => changeStep(values, -1)}
                wrapperClass="text-right"
                className="text-cool-gray hover:bg-magnolia hover:text-marine-blue hover:font-medium"
              />
              <Button
                text="Next Step"
                type="submit"
                wrapperClass="text-right"
                className="bg-purplish-blue text-white hover:bg-purplish-blue/85"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
