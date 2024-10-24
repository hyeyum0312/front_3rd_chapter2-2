import { Dispatch, SetStateAction } from "react";
import { Product } from "../../../../types";
import { RenderProductDetail } from "./RenderProductDetail";

interface Props {
  index: number;
  product: Product;
  setOpenProductIds: Dispatch<SetStateAction<Set<string>>>; // 수정
  openProductIds: Set<string>;
  editingProduct: Product | null;
  onProductUpdate: (updatedProduct: Product) => void;
  setEditingProduct: (product: Product | null) => void;
}

export const ProductAccordion = ({
  index,
  product,
  setOpenProductIds,
  openProductIds,
  editingProduct,
  onProductUpdate,
  setEditingProduct,
}: Props) => {
  // 상품 클릭 시 토글
  const handleToggleAccordion = (productId: string) => {
    setOpenProductIds((prev) =>
      prev.has(productId)
        ? new Set([...prev].filter((id) => id !== productId))
        : new Set(prev).add(productId)
    );
  };

  const { id, name, price, stock } = product;
  return (
    <div
      data-testid={`product-${index + 1}`}
      className="bg-white p-4 rounded shadow"
    >
      <button
        data-testid="toggle-button"
        onClick={() => handleToggleAccordion(id)} // 핸들러 분리
        className="w-full text-left font-semibold"
      >
        {name} - {price}원 (재고: {stock})
      </button>

      {openProductIds.has(id) && (
        <div className="mt-2">
          <RenderProductDetail
            editingProduct={editingProduct}
            product={product}
            onProductUpdate={onProductUpdate}
            setEditingProduct={setEditingProduct}
          />
        </div>
      )}
    </div>
  );
};
