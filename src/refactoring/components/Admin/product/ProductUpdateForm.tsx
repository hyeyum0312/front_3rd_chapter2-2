import { Product } from "../../../../types";
import { useState, useEffect } from "react";

interface Props {
  editingProduct: Product; // id를 제외하지 않음
  handleProductNameUpdate: (newName: string) => void; // 제품 이름 업데이트 함수
  handlePriceUpdate: (newPrice: number) => void; // 가격 업데이트 함수
  handleStockUpdate: (newStock: number) => void; // 재고 업데이트 함수
}

export const ProductUpdateForm = ({
  editingProduct: initialEditingProduct,
  handleProductNameUpdate,
  handlePriceUpdate,
  handleStockUpdate,
}: Props) => {
  const [editingProduct, setEditingProduct] = useState<Omit<Product, "id">>(
    initialEditingProduct
  );

  // editingProduct가 변경될 때마다 상태를 업데이트
  useEffect(() => {
    setEditingProduct(initialEditingProduct);
  }, [initialEditingProduct]);

  const handleNameChange = (newName: string) => {
    setEditingProduct((prev) => ({ ...prev, name: newName }));
    handleProductNameUpdate(newName);
  };

  const handlePriceChange = (newPrice: number) => {
    setEditingProduct((prev) => ({ ...prev, price: newPrice }));
    handlePriceUpdate(newPrice);
  };

  const handleStockChange = (newStock: number) => {
    setEditingProduct((prev) => ({ ...prev, stock: newStock }));
    handleStockUpdate(newStock);
  };

  return (
    <>
      <div className="mb-4">
        <label className="block mb-1">상품명: </label>
        <input
          type="text"
          value={editingProduct.name}
          onChange={(e) => handleNameChange(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">가격: </label>
        <input
          type="number"
          value={editingProduct.price}
          onChange={(e) => handlePriceChange(parseInt(e.target.value) || 0)} // 기본값을 0으로 설정
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">재고: </label>
        <input
          type="number"
          value={editingProduct.stock}
          onChange={(e) => handleStockChange(parseInt(e.target.value) || 0)} // 기본값을 0으로 설정
          className="w-full p-2 border rounded"
        />
      </div>
    </>
  );
};
