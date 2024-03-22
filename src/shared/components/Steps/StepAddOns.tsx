import { useMemo } from "react";
import { Form, Formik } from "formik";
import { ContainerStep } from ".";
import { Button } from "../Button";
import { CardPickAddOns } from "../CardPickAddOns";
import { getDataAddOns } from "@/shared/helpers";
import { IFormValues, IStep } from "@/domain";

export const StepAddOns: React.FC<IStep> = ({ changeStep, data }) => {
  const handleSubmit = (values: IFormValues) => {
    changeStep(values, 1);
  };

  const newCardAddOns = useMemo(() => getDataAddOns(data), [data]);

  return (
    <ContainerStep
      title="Pick add-ons"
      description="Add-ons help enhanced your gaming experience."
    >
      <Formik initialValues={data} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form>
            <div className="flex flex-wrap gap-y-4 [&_label]:w-full">
              {newCardAddOns.map((card) => (
                <CardPickAddOns {...card} key={card.id} className="w-full" />
              ))}
            </div>
            
            <div className="flex justify-between md:mt-[70px] | fixed left-0 right-0 bottom-0 p-4 bg-white md:bg-inherit md:p-0 md:static">
              <Button
                text="Go Back"
                type="button"
                onClick={() => changeStep(values, -1)}
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
  );
};
