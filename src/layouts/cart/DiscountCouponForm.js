import React from "react";

export default function DiscountCouponForm() {
  return (
    <div className="cart__discount">
      <h6>İndirim Kodu Uygula</h6>
      <form>
        <input type="text" placeholder="Kupon Kodu" />
        <button type="submit">Uygula</button>
      </form>
    </div>
  );
}
