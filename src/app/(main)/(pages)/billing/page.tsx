import React from "react";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import Stripe from "stripe";
import BillingDashboard from "./_components/billing-dashboard";

type Props = {
  searchParams?: { [key: string]: string | undefined };
};

const Billing = async (props: Props) => {
  const { session_id } = props.searchParams ?? {
    session_id: "",
  };
  if (session_id) {
    console.log("process.env.STRIPE_SECRET_KEY", process.env.STRIPE_SECRET_KEY);
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
      apiVersion: "2024-12-18.acacia", // Use the latest stable API version
      typescript: true,
    });

    console.log("stripe", stripe);

    const session = await stripe.checkout.sessions.listLineItems(session_id);
    const user = await currentUser();
    if (user) {
      await db.user.update({
        where: {
          clerkId: user.id,
        },
        data: {
          tier: session.data[0].description,
          credits:
            session.data[0].description == "Unlimited"
              ? "Unlimited"
              : session.data[0].description == "Pro"
              ? "100"
              : "10",
        },
      });
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        <span>Billing</span>
      </h1>
      <BillingDashboard />
    </div>
  );
};

export default Billing;
