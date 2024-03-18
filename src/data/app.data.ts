import { Inavbar } from "@/domain";
import {
  StepAddOns,
  StepSelectPlan,
  StepSummary,
  StepYourInfo,
} from "@/shared/components/Steps";

export const dataNavbar: Inavbar[] = [
  {
    id: 1,
    text: "STEP 1",
    title: "YOUR INFO",
    Component: StepYourInfo,
  },
  {
    id: 2,
    text: "STEP 2",
    title: "SELECT PLAN",
    Component: StepSelectPlan,
  },
  {
    id: 3,
    text: "STEP 3",
    title: "ADD-ONS",
    Component: StepAddOns,
  },
  {
    id: 4,
    text: "STEP 4",
    title: "SUMMARY",
    Component: StepSummary,
  },
];
