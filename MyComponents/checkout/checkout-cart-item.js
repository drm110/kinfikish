import MyImage from "../MyImage";
import { isEmpty } from "lodash";

const CheckoutCartItem = ({ item }) => {
  console.log("CheckoutCartItem :> ", item);

  const productImg = item?.data?.images?.[0] ?? "";

  return (
    <tr className="woo-next-cart-item" key={item?.productId ?? ""}>
      <td className="woo-next-cart-element">
        <figure>
          <MyImage
            width={61}
            height={96}
            altText={productImg?.alt ?? ""}
            sourceUrl={!isEmpty(item.images[0].src) ? item.images[0].src : ""} // use normal <img> attributes as props
          />
        </figure>
      </td>
      <td className="woo-next-cart-element">{item.name ?? ""}</td>
      {/* <td className="woo-next-cart-element">{item.currency ?? ''}{item.line_subtotal ?? ''}</td> */}
      <td className="woo-next-cart-element">{item.totalPrice}</td>
    </tr>
  );
};

export default CheckoutCartItem;
