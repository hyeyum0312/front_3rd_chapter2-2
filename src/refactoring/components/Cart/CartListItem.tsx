import { CartItem } from "../../../types";
import { getAppliedDiscount } from "../../hooks/utils/cartUtils";
import { Button } from "../Common/Button/Button";

interface Props {
  key: string;
  cartItem: CartItem;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, newQuantity: number) => void;
}

export const CartListItem = ({
  cartItem,
  removeFromCart,
  updateQuantity,
}: Props) => {
  const appliedDiscount = getAppliedDiscount(cartItem);

  return (
    <div className="flex justify-between items-center bg-white p-3 rounded shadow">
      <div>
        <span className="font-semibold">{cartItem.product.name}</span>
        <br />

        <span className="text-sm text-gray-600">
          {cartItem.product.price}원 x {cartItem.quantity}
          {appliedDiscount > 0 && (
            <span className="text-green-600 ml-1">
              ({(appliedDiscount * 100).toFixed(0)}% 할인 적용)
            </span>
          )}
        </span>
      </div>

      <div className="flex gap-1">
        <Button
          label="-"
          variant="secondary"
          fullWidth={false}
          onClick={() =>
            updateQuantity(cartItem.product.id, cartItem.quantity - 1)
          }
        ></Button>
        <Button
          label="+"
          variant="secondary"
          fullWidth={false}
          onClick={() =>
            updateQuantity(cartItem.product.id, cartItem.quantity + 1)
          }
        ></Button>
        <Button
          label="삭제"
          variant="danger"
          fullWidth={false}
          onClick={() => removeFromCart(cartItem.product.id)}
        ></Button>
      </div>
    </div>
  );
};
