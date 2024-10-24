import { Discount, Product } from "../../../../../types";
import { useProductStore } from "../../../../store/useProductStore";

interface Props {
  discount: Discount;
  product: Product;
  index: number;
}
export const ProductDiscountInfoItem = ({
  product,
  discount,
  index,
}: Props) => {
  const { updateProduct, setEditingProduct } = useProductStore();

  // 할인 정보 삭제
  const handleRemoveDiscount = (index: number) => {
    const updatedProduct = {
      ...product,
      discounts: product.discounts.filter((_, i) => i !== index),
    };

    updateProduct(updatedProduct);
    console.log("updatedProduct >> ", updatedProduct);

    // 상태 업데이트 후, 바로 DOM에 반영되도록 처리
    setEditingProduct(updatedProduct);
  };

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
