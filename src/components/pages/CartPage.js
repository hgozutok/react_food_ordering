import React from "react";
import { useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";

export const CartPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart);

  const cartTotal = useSelector((state) => state.total);
  const onSubmit = (data, event) => {
    event.preventDefault();
    console.log(data);
    // dispatch(cartItems(data));
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
        <h1>credit Card informations</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col ">
            <label htmlFor="cardNumber">cardNumber</label>
            <input
              type="cardNumber"
              {...register("cardNumber", { required: true, maxLength: 20 })}
            />
            <span className="text-red-600	">
              {errors.cardNumber?.type === "required" &&
                "cardNumber is required"}
            </span>
          </div>
          <div className="flex flex-col ">
            <label htmlFor="expirationDate">expirationDate</label>
            <input
              type="expirationDate"
              {...register("expirationDate", { required: true, maxLength: 20 })}
            />
            <span className="text-red-600	">
              {errors.expirationDate?.type === "required" &&
                "expirationDate is required"}
            </span>
          </div>

          <div className="flex flex-col ">
            <label htmlFor="cvv">cvv</label>
            <input
              type="cvv"
              {...register("cvv", { required: true, maxLength: 20 })}
            />
            <span className="text-red-600	">
              {errors.cvv?.type === "required" && "cvv is required"}
            </span>
          </div>
          <input
            className="bg-fuchsia-800 w-full rounded-lg text-white p-2"
            type="submit"
            value="PAY NOW"
          />
        </form>
      </div>
    </div>
  );
};
