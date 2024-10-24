import { useState } from "react";
import { Discount, Product } from "../../../../types";
import { AddDiscount } from "./AddDiscount";
import { DiscountInfoItem } from "./DiscountInfoItem";

interface Props {
  product: Product; // 단일 Product로 수정
  onProductUpdate: (updatedProduct: Product) => void;
  editingProduct: Omit<Product, "id">; // id를 제외한 수정 중인 제품 정보
  setEditingProduct: (product: Product | null) => void; // 타입 수정
}

export const ProductDiscountUpdate = ({
  product,
  onProductUpdate,
  editingProduct,
  setEditingProduct,
}: Props) => {
  const [newDiscount, setNewDiscount] = useState<Discount>({
    quantity: 0,
    rate: 0,
  });

  // 수정 완료 핸들러 함수
  const handleEditComplete = () => {
    if (editingProduct) {
      const updatedProduct = { ...product, ...editingProduct }; // 수정된 정보 병합
      onProductUpdate(updatedProduct);
      setEditingProduct(null); // 수정 완료 후 초기화
    }
  };

  // 할인 정보 추가
  const handleAddDiscount = (productId: string, newDiscount: Discount) => {
    const updatedProduct = {
      ...product,
      discounts: [...product.discounts, newDiscount], // 기존 할인 목록에 추가
    };
    onProductUpdate(updatedProduct);
    setEditingProduct(updatedProduct);
    setNewDiscount({ quantity: 0, rate: 0 }); // 새로운 할인 정보 초기화
  };

  // 할인 정보 삭제
  const handleRemoveDiscount = (productId: string, index: number) => {
    const updatedProduct = {
      ...product,
      discounts: product.discounts.filter((_, i) => i !== index), // 특정 할인 삭제
    };
    onProductUpdate(updatedProduct);
    setEditingProduct(updatedProduct);
  };

  return (
    <>
      <div>
        <h4 className="text-lg font-semibold mb-2">할인 정보</h4>
        {product.discounts.map((discount, index) => (
          <DiscountInfoItem
            key={index}
            discount={discount}
            handleRemoveDiscount={handleRemoveDiscount}
            product={product}
            index={index}
          />
        ))}

        {/* 할인 추가 */}
        <AddDiscount product={product} handleAddDiscount={handleAddDiscount} />
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
