import { Form, Formik } from "formik";
import * as Yup from "yup";
import { ContainerStep, TextField } from "..";
import { Button } from "../Button";
import { IFormValues, IStep } from "@/domain";

export const StepYourInfo: React.FC<IStep> = ({ changeStep, data }) => {
  const handleSubmit = (values: IFormValues) => changeStep(values, 1);
  return (
    <ContainerStep
      title="Personal info"
      description="Please provide your name, email address, and phone number."
    >
      <Formik
        initialValues={data}
        validationSchema={Yup.object({
          name: Yup.string().required("This field is required"),
          email: Yup.string()
            .email("It must be a valid email")
            .required("This field is required"),
          phoneNumber: Yup.string()
            .matches(/^[0-9]{9}$/, "El número de teléfono no es válido")
            .required("This field is required"),
        })}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="mt-7 md:mt-11">
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
              maxLength={9}
              placeholder="e.g. 900552229"
              wrapperClass="mt-6"
              className="w-full h-[46px] px-[15px] rounded-md outline outline-1 outline-light-gray focus-visible:outline-purplish-blue text-marine-blue font-medium placeholder:text-light-gray"
            />
            <Button
              text="Next Step"
              type="submit"
              wrapperClass="text-right md:mt-[70px] | fixed left-0 right-0 bottom-0 p-4 bg-white md:bg-inherit md:p-0 md:static"
              className="bg-marine-blue text-white hover:bg-marine-blue/85"
            />
          </Form>
        )}
      </Formik>
    </ContainerStep>
  );
};
