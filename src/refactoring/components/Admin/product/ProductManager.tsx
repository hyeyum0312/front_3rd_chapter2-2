import { useState } from "react";
import { NewProductForm } from "./NewProductForm";
import { Product } from "../../../../types";
import { ProductAccordion } from "./ProductAccordion";
import { useProductStore } from "../../../store/useProductStore";

interface Props {
  products: Product[];
  onProductUpdate: (updatedProduct: Product) => void;
  onProductAdd: (newProduct: Product) => void;
}

export const ProductManager = ({ onProductAdd, onProductUpdate }: Props) => {
  const [openProductIds, setOpenProductIds] = useState<Set<string>>(new Set());
  const [showNewProductForm, setShowNewProductForm] = useState(false);

  const {
    products,
    newProduct,
    setNewProduct,
    editingProduct,
    setEditingProduct,
  } = useProductStore(); // 수정

  // 상품 추가
  const handleAddNewProduct = () => {
    const productWithId = { ...newProduct, id: `p${products.length + 1}` };
    console.log("productWithId", productWithId);

    setNewProduct(productWithId);
    onProductAdd(productWithId);
    clearNewProductForm();
    setShowNewProductForm(false);
  };

  const clearNewProductForm = () => {
    setNewProduct({
      name: "",
      price: 0,
      stock: 0,
      discounts: [],
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">상품 관리</h2>
      <button
        onClick={() => setShowNewProductForm(!showNewProductForm)}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4 hover:bg-green-600"
      >
        {showNewProductForm ? "취소" : "새 상품 추가"}
      </button>

      {/* 상품 추가 폼 */}
      {showNewProductForm && (
        <NewProductForm handleAddNewProduct={handleAddNewProduct} />
      )}

      {/* 상품 목록 및 상품 수정 */}
      <div className="space-y-2">
        {products.map((product, index) => (
          <ProductAccordion
            index={index}
            key={product.id}
            product={product}
            openProductIds={openProductIds}
            onProductUpdate={onProductUpdate}
            setOpenProductIds={setOpenProductIds}
            editingProduct={editingProduct} // 추가
            setEditingProduct={setEditingProduct} // 추가
          />
        ))}
      </div>
    </div>
  );
};
