import React from "react";
import { HttpPostwithToken } from "../../configs/HttpConfig";
import { useUserContext } from "../../contexts/UserContext";
import { CartContextValue } from "../../contexts/ContextProvider";
import { toast } from "react-toastify";

export default function AllSockPageAddToCartButton({ sock }) {
  const [cartData, dispatch] = CartContextValue();

  const addCartApi = (sockObj) => {
    let obj = {
      sockId: sockObj.id,
      quantity: 1,
      price: sockObj.price,
    };
    HttpPostwithToken("addToCart/addSock", obj)
      .then((res) => {
        console.log("obj", obj);
        res.json().then((data) => {
          if (res.ok) {
            dispatch({
              type: "add_cart",
              data: data,
            });
            toast.success("Ürün sepetinize eklendi");
          } else {
            toast.error(data.message);
          }
        });
      })
      .catch(function (res) {
        console.log("Error ", res);
        //alert(error.message);
      });
  };

  return (
    <div>
      <a
        className="add-cart"
        style={{ cursor: "pointer" }}
        onClick={() => addCartApi(sock)}
        href="javascript:void(0)"
      >
        + Sepete Ekle
      </a>
    </div>
  );
}
