import { CartItem, Product } from "../../../types";
import { getMaxDiscount, getRemainingStock } from "../../hooks/utils/cartUtils";
import { Button } from "../Common/Button/Button";
import { DiscountItem } from "./DiscountItem";

interface Props {
  product: Product;
  cart: CartItem[];
  addToCart: (product: Product) => void;
}

export const ProductList = ({ product, cart, addToCart }: Props) => {
  const remainingStock = getRemainingStock(cart, product);

  return (
    <div
      data-testid={`product-${product.id}`}
      className="bg-white p-3 rounded shadow"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold">{product.name}</span>
        <span className="text-gray-600">
          {product.price.toLocaleString()}원
        </span>
      </div>

      <div className="text-sm text-gray-500 mb-2">
        <span
          className={`font-medium ${remainingStock > 0 ? "text-green-600" : "text-red-600"}`}
        >
          재고: {remainingStock}개
        </span>
        {product.discounts.length > 0 && (
          <span className="ml-2 font-medium text-blue-600">
            최대 {(getMaxDiscount(product.discounts) * 100).toFixed(0)}% 할인
          </span>
        )}
      </div>

      {product.discounts.length > 0 && (
        <ul className="list-disc list-inside text-sm text-gray-500 mb-2">
          {product.discounts.map((discount, index) => (
            <DiscountItem key={index} discount={discount} />
          ))}
        </ul>
      )}
      <Button
        label="-"
        onClick={() => addToCart(product)}
        fullWidth={true}
        variant="primary"
        isDisabled={remainingStock <= 0}
      >
        {remainingStock > 0 ? "장바구니에 추가" : "품절"}
      </Button>
    </div>
  );
};
