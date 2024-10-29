import { Button } from "@/components/ui/button";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { PlanFeature, PlanType } from "./Subscription";
import React from "react";

//types
interface SubscriptionCardData {
  planName: string;
  features: PlanFeature[];
  planType: PlanType;
  price: number;
  buttonName: string;
}
interface SubscriptionCardProps {
  data: SubscriptionCardData;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ data }) => {
  return (
    <div className="rounded-xl bg-[#6b5fd5] bg-opacity-20  card p-5 space-y-5 w-[18rem]">
      <p>{data.planName}</p>
      <p>
        <span className="text-xl font-semibold">₹{data.price}/</span>
        <span>{data.planType}</span>
      </p>
      {data.planType == "ANNUALLY" && <p className="text-green-500">30% off</p>}

      <Button className="w-full">{data.buttonName}</Button>
      <div>
        {data.features.map((item) => (
          <div key={item} className="flex items-center gap-2">
            <CheckCircledIcon />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionCard;
