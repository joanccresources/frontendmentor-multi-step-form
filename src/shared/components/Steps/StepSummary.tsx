import { useMemo, useState } from "react";
import { IFormValues, IStep } from "@/domain";
import { Form, Formik } from "formik";
import { Button } from "../Button";
import { ContainerStep, StepThank } from ".";
import { getDataSummary } from "@/shared/helpers";

export const StepSummary: React.FC<IStep> = ({ changeStep, data }) => {
  const [showThank, setShowThank] = useState<boolean>(false);

  const handleSubmit = (values: IFormValues) => {
    console.log("Send to server", { values });
    setShowThank(true);
  };

  const { textPrice, addOns, selectPlan, total } = useMemo(
    () => getDataSummary(data),
    [data]
  );

  return showThank ? (
    <StepThank />
  ) : (
    <ContainerStep
      title="Finishing up"
      description="Double-check everything looks OK before confirming."
    >
      <Formik initialValues={data} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form>
            <div className="p-6 bg-magnolia rounded-md">
              <div className="flex items-center justify-between">
                <div className="leading-tight">
                  <p className="text-marine-blue font-medium">
                    {selectPlan.title}
                  </p>
                  <button
                    className="text-xs underline text-cool-gray hover:text-purplish-blue"
                    onClick={() => changeStep(values, -2)}
                  >
                    Change
                  </button>
                </div>
                <div>
                  <span className="text-marine-blue font-medium">
                    ${selectPlan.pricePlan}
                    {textPrice}
                  </span>
                </div>
              </div>
              <hr className="my-5" />
              <div className="space-y-5">
                {addOns.services.map((service, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <p className="text-cool-gray">{service.name}</p>
                    <span className="text-cool-gray">
                      +${service.price}
                      {textPrice}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="px-6 mt-4 flex justify-between">
              <p className="text-cool-gray">
                Total(per {values.timePlan.toLowerCase()})
              </p>
              <p className="text-purplish-blue font-bold text-lg">
                +${total}
                {textPrice}
              </p>
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
                text="Confirm"
                type="submit"
                wrapperClass="text-right"
                className="bg-purplish-blue text-white hover:bg-purplish-blue/85"
              />
            </div>
          </Form>
        )}
      </Formik>
    </ContainerStep>
  );
};
