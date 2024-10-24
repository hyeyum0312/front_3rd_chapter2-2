import { useState } from "react";
import { NewProductForm } from "./NewProductForm";
import { Product } from "../../../../types";
import { RenderProductDetail } from "./RenderProductDetail";

interface Props {
  products: Product[];
  onProductUpdate: (updatedProduct: Product) => void;
  onProductAdd: (newProduct: Product) => void;
}
export const ProductManager = ({
  products,
  onProductAdd,
  onProductUpdate,
}: Props) => {
  const [openProductIds, setOpenProductIds] = useState<Set<string>>(new Set());
  const [showNewProductForm, setShowNewProductForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [newProduct, setNewProduct] = useState<Omit<Product, "id">>({
    name: "",
    price: 0,
    stock: 0,
    discounts: [],
  });

  // 상품 클릭 시 토글
  const toggleProductAccordion = (productId: string) => {
    setOpenProductIds((prev) => {
      const newSet = new Set(prev);
      newSet.has(productId) ? newSet.delete(productId) : newSet.add(productId);
      return newSet;
    });
  };

  // 상품 추가
  const handleAddNewProduct = () => {
    const productWithId = { ...newProduct, id: Date.now().toString() };
    onProductAdd(productWithId);
    resetNewProductForm();
    setShowNewProductForm(false);
  };

  const resetNewProductForm = () => {
    setNewProduct({
      name: "",
      price: 0,
      stock: 0,
      discounts: [],
    });
  };

  const handleToggleAccordion = (productId: string) => {
    toggleProductAccordion(productId);
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
        <NewProductForm
          newProduct={newProduct}
          setNewProduct={setNewProduct}
          handleAddNewProduct={handleAddNewProduct}
        />
      )}

      {/* 상품 목록 및 상품 수정 */}
      <div className="space-y-2">
        {products.map((product, index) => {
          const { id, name, price, stock } = product;

          return (
            <div
              key={id}
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
        })}
      </div>
    </div>
  );
};
