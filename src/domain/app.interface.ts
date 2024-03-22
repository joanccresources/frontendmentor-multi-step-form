export interface Inavbar {
  id: number;
  text: string;
  title: string;
  // Component: React.FC;
}

export type optionSteps = 0 | 1 | 2 | 3;
export type typePlan = "Arcade" | "Advanced" | "Pro";
export type typeTimePlan = "Monthly" | "Yearly";
export type typeAddOns = "online" | "larger" | "customizable";

export interface IFormValues {
  name: string;
  email: string;
  phoneNumber: string;
  plan: typePlan;
  timePlan: typeTimePlan;
  checkAddOns: typeAddOns[];
}
export interface IStep {
  changeStep: (data: IFormValues, amount: number) => void;
  data: IFormValues;
}

export interface IcardPlan {
  // Input
  id: string;
  name: string;
  value: typePlan;
  defaultChecked?: boolean;
  [x: string]: unknown;
  // Card
  className?: string;
  img: string;
  title: string;
  price: number;
  textPrice: string;
  time?: string;
}

export interface IcardAddOns {
  // card
  className?: string;
  title: string;
  text: string;
  price: number;
  textPrice: string;
  // input
  id: string;
  name: string;
  value: typeAddOns;
  defaultChecked?: boolean;
  [x: string]: unknown;
}
