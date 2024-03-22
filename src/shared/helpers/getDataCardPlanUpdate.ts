import { cardPlans } from "@/data";
import { IcardPlan, typeTimePlan } from "@/domain";

export const getDataCardPlanUpdate = (timePlan: typeTimePlan) => {
  const newCards: IcardPlan[] = cardPlans.map((card) => {
    return {
      ...card,
      textPrice: timePlan === "Monthly" ? "/mo" : "/yr",
      price: timePlan === "Monthly" ? card.price : card.price * 10,
      time: timePlan === "Monthly" ? "" : card.time,
    };
  });
  return newCards;
};
