import { IFormValues, IStep } from "@/domain";
import { Form, Formik } from "formik";
import { Button } from "../Button";
import { CardPickAddOns } from "../CardPickAddOns";
import { cardAddOns } from "@/data";

export const StepAddOns: React.FC<IStep> = ({ changeStep, data }) => {
  const handleSubmit = (values: IFormValues) => {
    changeStep(values, 1);
  };

  const newCardAddOns = cardAddOns.map((card) => {
    return {
      ...card,
      price: data.timePlan === "Yearly" ? card.price * 10 : card.price,
      textPrice: data.timePlan === "Yearly" ? "/yr" : "/mo",
      defaultChecked: !!data.checkAddOns.find((item) => item === card.value),
    };
  });

  return (
    <div className="mt-11">
      <h2 className="text-[2.1rem]/none inline-block text-marine-blue font-bold">
        Pick add-ons
      </h2>
      <p className="text-base/none mt-5 text-cool-gray">
        Add-ons help enhanced your gaming experience.
      </p>
      <Formik initialValues={data} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form className="mt-11">
            <div className="flex flex-wrap gap-y-4 [&_label]:w-full">
              {newCardAddOns.map((card) => (
                <CardPickAddOns {...card} key={card.id} className="w-full" />
              ))}
            </div>

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
                className="bg-marine-blue text-white hover:bg-marine-blue/85"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
