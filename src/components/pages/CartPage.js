import React from "react";
import { useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";
import { Toast } from "primereact/toast";

import {
  CardElement,
  Elements,
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

export const CartPage = () => {
  const stripe = useStripe();
  const elements = useElements();

  const toast = React.useRef(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart);

  const cartTotal = useSelector((state) => state.total);
  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(elements);

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    const element = elements.getElement(CardElement);
    console.log(element);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: element,
    });
    if (error) {
      console.log(error);
    } else {
      console.log(paymentMethod);
      toast.current.show({
        severity: "success",
        summary: " payment intended added",
        detail: "Your payment intended added",
      });
    }
    var myElements = stripe.elements({
      //clientSecret: "sk_test_u7nRb1Q7LLtLAtIHB9GQZ2TV00nhUCeEFQ",
      clientSecret: paymentMethod.id,
    });
    const result = await stripe.confirmPayment({
      elements,
    });

    if (result.error) {
      console.log(result.error.message);
      toast.current.show({
        severity: "error",
        summary: " error on payment intend",
        detail: "Error occurred on payment intend",
      });
    } else {
      toast.current.show({
        severity: "success",
        summary: " payment intended added",
        detail: "Your payment intended added",
      });
    }
  };

  console.log(cartItems.total);
  return (
    <div>
      <h1>Cart Page</h1>

      {cartItems.items.length > 0 ? (
        cartItems.items.map((item) => (
          <div key={item.menuId}>
            <img src={item.menuImage} width={75} height={75} alt="menu" />
            <p>{item.menuName}</p>
            <p>{item.price}</p>
          </div>
        ))
      ) : (
        <p>No items in cart</p>
      )}
      <div>
        {cartItems.total === 0 ? (
          <h1>Cart is Empty</h1>
        ) : (
          <h1>Cart Total is {cartItems.total}</h1>
        )}
      </div>
      <div>
        <h1>Credit Card Informations</h1>
        <div className="card ">
          <form id="payment-form" onSubmit={onSubmit}>
            <div id="card-element">
              {/* <CardElement /> */}
              <PaymentElement />
            </div>

            <input
              className="bg-fuchsia-800 w-full rounded-lg text-white p-2"
              type="submit"
              value="PAY NOW"
            />
          </form>
        </div>
      </div>
      <Toast ref={toast} />
    </div>
  );
};
