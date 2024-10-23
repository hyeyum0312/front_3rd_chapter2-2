import { Discount } from "../../../types";

interface Props {
  discount: Discount;
}
export const DiscountItem = ({ discount }: Props) => {
  return (
    <li>
      {discount.quantity}개 이상: {(discount.rate * 100).toFixed(0)}% 할인
    </li>
  );
};
