import React from "react";

export const Payment = () => {
  return (
    <div>
      <form action="/create-checkout-session" method="POST">
        <button type="submit">Checkout</button>
      </form>
    </div>
  );
};
