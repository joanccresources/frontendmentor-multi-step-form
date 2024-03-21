import { Form, Formik } from "formik";
import { CardPlan } from "../CardPlan";
import { TogglePlan } from "../TogglePlan";
import { Button } from "../Button";
import { IFormValues, IStep, typeTimePlan } from "@/domain";
import { cardPlans } from "@/data";
import { useState } from "react";

export const StepSelectPlan: React.FC<IStep> = ({ changeStep, data }) => {
  const [timePlan, setTimePlan] = useState<typeTimePlan>(data.timePlan);
  const handleTimePlan = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTimePlan(e.target.value as typeTimePlan);

  const handleSubmit = (values: IFormValues) => {
    changeStep({ ...values, timePlan }, 1);
  };

  const newCards = cardPlans.map((card) => {
    return {
      ...card,
      textPrice: timePlan === "Monthly" ? "/mo" : "/yr",
      price: timePlan === "Monthly" ? card.price : card.price * 10,
      time: timePlan === "Monthly" ? "" : card.time,
    };
  });

  return (
    <div className="mt-11">
      <h2 className="text-[2.1rem]/none inline-block text-marine-blue font-bold">
        Select your plan
      </h2>
      <p className="text-base/none mt-5 text-cool-gray">
        You have the option of monthly or yearly billing.
      </p>
      <Formik initialValues={data} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form className="mt-11">
            <div className="flex gap-x-5 [&_label]:w-full">
              {newCards.map((card) => (
                <CardPlan
                  {...card}
                  key={card.id}
                  defaultChecked={card.value === values.plan}
                />
              ))}
            </div>

            <TogglePlan
              className="mt-8"
              name="timePlan"
              timePlan={timePlan}
              handleTimePlan={handleTimePlan}
            />

            <div className="flex justify-between mt-[70px]">
              <Button
                text="Go Back"
                type="button"
                onClick={() => changeStep({ ...values, timePlan }, -1)}
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
