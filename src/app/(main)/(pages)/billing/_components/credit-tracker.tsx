import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Progress } from "@radix-ui/react-progress";

type Props = {
  credits: number;
  tier: string;
};

const CreditTracker = ({ credits, tier }: Props) => {
  console.log(credits);
  return (
    <div className="p-6">
      <Card className="p-6">
        <CardContent className="flex flex-col gap-6">
          <CardTitle className="font-light">Credit Tracker</CardTitle>

          <div>
            <Progress
              value={
                tier == "Free"
                  ? credits * 10
                  : tier == "Unlimited"
                  ? 100
                  : credits
              }
              className="w-full"
            />
            <div className="flex justify-end">
              <p>
                {credits}/
                {tier == "Free" ? 10 : tier == "Pro" ? 100 : "Unlimited"}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreditTracker;
