import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

export const useStripe = () => {
  //stripe payment
  const stripe = require("stripe")(
    "sk_test_u7nRb1Q7LLtLAtIHB9GQZ2TV00nhUCeEFQ"
  );

  const paymentIntent = async (
    amount,
    currency,
    payment_method_types = "card",
    order_id = 0
  ) => {
    return await stripe.paymentIntents.create({
      amount: amount,
      currency: currency,
      payment_method_types: payment_method_types,
      metadata: {
        order_id: order_id,
      },
    });
  };

  return;
  {
    paymentIntent;
  }
};
