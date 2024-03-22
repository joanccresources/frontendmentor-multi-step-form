import { useMemo, useState } from "react";
import { Form, Formik } from "formik";
import { CardPlan } from "../CardPlan";
import { TogglePlan } from "../TogglePlan";
import { Button } from "../Button";
import { IFormValues, IStep, typeTimePlan } from "@/domain";
import { getDataCardPlanUpdate } from "@/shared/helpers";
import { ContainerStep } from ".";

export const StepSelectPlan: React.FC<IStep> = ({ changeStep, data }) => {
  const [timePlan, setTimePlan] = useState<typeTimePlan>(data.timePlan);

  const handleTimePlan = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTimePlan(e.target.value as typeTimePlan);

  const handleSubmit = (values: IFormValues) =>
    changeStep({ ...values, timePlan }, 1);

  const newCards = useMemo(() => getDataCardPlanUpdate(timePlan), [timePlan]);

  return (
    <>
      <ContainerStep
        title="Select your plan"
        description="You have the option of monthly or yearly billing."
      >
        <Formik initialValues={data} onSubmit={handleSubmit}>
          {({ values }) => (
            <Form>
              <div className="flex-wrap md:flex-nowrap gap-y-3 md:gap-y-0 flex gap-x-5 [&_label]:w-full">
                {newCards.map((card) => (
                  <CardPlan
                    {...card}
                    key={card.id}
                    defaultChecked={card.value === values.plan}
                  />
                ))}
              </div>

              <TogglePlan
                className="mt-6 md:mt-8"
                name="timePlan"
                timePlan={timePlan}
                handleTimePlan={handleTimePlan}
              />

              <div className="flex justify-between md:mt-[70px] | fixed left-0 right-0 bottom-0 p-4 bg-white md:bg-inherit md:p-0 md:static">
                <Button
                  text="Go Back"
                  type="button"
                  onClick={() => changeStep({ ...values, timePlan }, -1)}
                  wrapperClass="text-right"
                  className="text-cool-gray hover:bg-magnolia hover:text-marine-blue/85"
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
      </ContainerStep>
      {timePlan === "Yearly" && <div className="mt-28" />}
    </>
  );
};
