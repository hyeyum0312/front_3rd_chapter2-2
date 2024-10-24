import { useState } from "react";
import { Discount, Product } from "../../../../../types";
import { ProductAddDiscount } from "./ProductAddDiscount";
import { ProductDiscountInfoItem } from "./ProductDiscountInfoItem";
import { useProductStore } from "../../../../store/useProductStore";

interface Props {
  product: Product; // 단일 Product로 수정
}

export const ProductDiscountUpdate = ({ product }: Props) => {
  const { editingProduct, setEditingProduct, updateProduct } =
    useProductStore();

  const [newDiscount, setNewDiscount] = useState<Discount>({
    quantity: 0,
    rate: 0,
  });

  // 수정 완료 핸들러 함수

  const handleEditComplete = () => {
    if (editingProduct) {
      const updatedProduct = { ...product, ...editingProduct }; // 수정된 정보 병합
      updateProduct(updatedProduct);
      setEditingProduct(null); // 수정 완료 후 초기화
    }
  };

  // 할인 정보 추가
  const handleAddDiscount = (newDiscount: Discount) => {
    const updatedProduct = {
      ...product,
      discounts: [...product.discounts, newDiscount], // 기존 할인 목록에 추가
    };
    updateProduct(updatedProduct);
    setEditingProduct(updatedProduct);
    setNewDiscount({ quantity: 0, rate: 0 }); // 새로운 할인 정보 초기화
  };

  return (
    <>
      <div>
        <h4 className="text-lg font-semibold mb-2">할인 정보</h4>
        {product.discounts.map((discount, index) => (
          <ProductDiscountInfoItem
            key={index}
            product={product}
            discount={discount}
            index={index}
          />
        ))}

        {/* 할인 추가 */}
        <ProductAddDiscount
          product={product}
          handleAddDiscount={handleAddDiscount}
        />
      </div>

      {/* 수정 완료 버튼 */}
      <button
        onClick={handleEditComplete}
        className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 mt-2"
      >
        수정 완료
      </button>
    </>
  );
};
