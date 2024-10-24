import { Discount, Product } from "../../../../types";

interface Props {
  discount: Discount;
  handleRemoveDiscount: (index: number) => void;
  product: Product;
  index: number;
}
export const DiscountInfoItem = ({
  discount,
  handleRemoveDiscount,
  index,
}: Props) => {
  return (
    <div className="flex justify-between items-center mb-2">
      <span>
        {discount.quantity}개 이상 구매 시 {discount.rate * 100}% 할인
      </span>
      <button
        onClick={() => handleRemoveDiscount(index)} // 인자 전달
        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
      >
        삭제
      </button>
    </div>
  );
};
