import {
  IFormValues,
  IcardAddOns,
  IcardPlan,
  Inavbar,
  typeAddOns,
  typePlan,
  typeTimePlan,
} from "@/domain";

export const dataNavbar: Inavbar[] = [
  {
    id: 1,
    text: "STEP 1",
    title: "YOUR INFO",
  },
  {
    id: 2,
    text: "STEP 2",
    title: "SELECT PLAN",
  },
  {
    id: 3,
    text: "STEP 3",
    title: "ADD-ONS",
  },
  {
    id: 4,
    text: "STEP 4",
    title: "SUMMARY",
  },
];

export const pricePlan: Record<typeTimePlan, Record<typePlan, number>> = {
  Monthly: {
    Arcade: 9,
    Advanced: 12,
    Pro: 15,
  },
  Yearly: {
    Arcade: 9,
    Advanced: 12,
    Pro: 15,
  },
};

export const priceAddOns: Record<typeAddOns, number> = {
  online: 1,
  larger: 2,
  customizable: 2,
};

export const addOnsData: Record<typeAddOns, string> = {
  online: "Online service",
  larger: "Larger storage",
  customizable: "Customizable profile",
};

export const cardPlans: IcardPlan[] = [
  {
    id: "arcade",
    name: "plan",
    value: "Arcade",
    className: "",
    img: "/icon-arcade.svg",
    title: "Arcade",
    price: 9,
    textPrice: "/mo",
    time: "2 months free",
  },
  {
    id: "advanced",
    name: "plan",
    img: "/icon-advanced.svg",
    title: "Advanced",
    value: "Advanced",
    price: 12,
    textPrice: "/mo",
    time: "2 months free",
  },
  {
    id: "pro",
    name: "plan",
    img: "/icon-pro.svg",
    title: "Pro",
    value: "Pro",
    price: 15,
    textPrice: "/mo",
    time: "2 months free",
  },
];

export const cardAddOns: IcardAddOns[] = [
  {
    title: "Online service",
    text: "Access to multiplayer games",
    price: 1,
    textPrice: "/mo",
    id: "online",
    name: "checkAddOns",
    value: "online",
  },
  {
    title: "Larger storage",
    text: "Extra 1TB of cloud save",
    price: 2,
    textPrice: "/mo",
    id: "larger",
    name: "checkAddOns",
    value: "larger",
  },
  {
    title: "Customizable Profile",
    text: "Custom theme on your profile",
    price: 2,
    textPrice: "/mo",
    id: "customizable",
    name: "checkAddOns",
    value: "customizable",
  },
];

export const initialValues: IFormValues = {
  name: "",
  email: "",
  phoneNumber: "",
  plan: "Arcade",
  timePlan: "Monthly",
  checkAddOns: [],
};
