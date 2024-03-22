import { cardAddOns } from "@/data";
import { IFormValues, IcardAddOns } from "@/domain";

export const getDataAddOns = (data: IFormValues) => {
  const newCardAddOns: IcardAddOns[] = cardAddOns.map((card) => {
    return {
      ...card,
      price: data.timePlan === "Yearly" ? card.price * 10 : card.price,
      textPrice: data.timePlan === "Yearly" ? "/yr" : "/mo",
      defaultChecked: !!data.checkAddOns.find((item) => item === card.value),
    };
  });
  return newCardAddOns;
};
