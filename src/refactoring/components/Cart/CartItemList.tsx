import { CartItem } from "../../../types";
import { getAppliedDiscount } from "../../hooks/utils/cartUtils";
import { Button } from "../Common/Button";

interface Props {
  cart: CartItem[];
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, newQuantity: number) => void;
}

export const CartItemList = ({ cart, removeFromCart, updateQuantity }: Props) => {
  return (
    <div className="space-y-2">
      {cart.map((item) => {
        const appliedDiscount = getAppliedDiscount(item);
        return (
          <div key={item.product.id} className="flex justify-between items-center bg-white p-3 rounded shadow">
            <div>
              <span className="font-semibold">{item.product.name}</span>
              <br />

              <span className="text-sm text-gray-600">
                {item.product.price}원 x {item.quantity}
                {appliedDiscount > 0 && <span className="text-green-600 ml-1">({(appliedDiscount * 100).toFixed(0)}% 할인 적용)</span>}
              </span>
            </div>

            <div className="flex gap-1">
              <Button label="-" onClick={() => updateQuantity(item.product.id, item.quantity - 1)}></Button>
              <Button label="+" onClick={() => updateQuantity(item.product.id, item.quantity + 1)}></Button>
              <Button label="삭제" variant="danger" onClick={() => removeFromCart(item.product.id)}></Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
