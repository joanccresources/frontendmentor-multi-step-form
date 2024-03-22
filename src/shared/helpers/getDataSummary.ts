import { addOnsData, priceAddOns, pricePlan } from "@/data";
import { IFormValues } from "@/domain";

export const getDataSummary = (data: IFormValues) => {
  const textPrice = data.timePlan === "Yearly" ? "/yr" : "/mo";

  const selectPlan = {
    title: `${data.plan} (${data.timePlan})`,
    pricePlan:
      data.timePlan === "Yearly"
        ? pricePlan[data.timePlan][data.plan] * 10
        : pricePlan[data.timePlan][data.plan],
  };
  const addOns = {
    services: data.checkAddOns.map((addon) => {
      return {
        name: addOnsData[addon],
        price:
          data.timePlan === "Yearly"
            ? priceAddOns[addon] * 10
            : priceAddOns[addon],
      };
    }),
  };
  const total =
    selectPlan.pricePlan +
    addOns.services.reduce((acum, data) => acum + data.price, 0);

  return { textPrice, selectPlan, addOns, total };
};
