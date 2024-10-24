import { Product, UpdatedProduct } from "../../../../types";
import { useProductStore } from "../../../store/useProductStore";

export const ProductUpdateForm = () => {
  const { editingProduct, setEditingProduct, updateProduct } =
    useProductStore();

  // 상품이름 업데이트
  const handleProductNameUpdate = (newName: string) => {
    if (!editingProduct) return;
    const updatedProduct: UpdatedProduct = { ...editingProduct, name: newName };
    setEditingProduct(updatedProduct);
  };

  // 상품가격 업데이트
  const handlePriceUpdate = (newPrice: number) => {
    if (!editingProduct) return;
    const updatedProduct: UpdatedProduct = {
      ...editingProduct,
      price: newPrice,
    };
    setEditingProduct(updatedProduct);
  };

  // 상품재고 업데이트
  const handleStockChange = (newStock: number) => {
    if (!editingProduct) return;

    const updatedProduct: UpdatedProduct = {
      ...editingProduct,
      stock: newStock,
    };

    // 여기에서 id가 반드시 있어야 한다고 가정
    if (!updatedProduct.id) {
      throw new Error("Product ID is missing");
    }

    // ID가 존재할 때만 updateProduct 호출
    updateProduct(updatedProduct as Product); // Product로 타입 강제 변환
    setEditingProduct(updatedProduct);
  };

  return (
    <>
      <div className="mb-4">
        <label htmlFor="product-name" className="block mb-1">
          상품명:{" "}
        </label>
        <input
          id="product-name"
          type="text"
          value={editingProduct?.name || ""}
          onChange={(e) => handleProductNameUpdate(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="product-price" className="block mb-1">
          가격:{" "}
        </label>
        <input
          id="product-price"
          type="number"
          value={editingProduct?.price || 0} // 기본값을 0으로 설정
          onChange={(e) =>
            handlePriceUpdate(Math.max(0, parseInt(e.target.value) || 0))
          }
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="product-stock" className="block mb-1">
          재고:{" "}
        </label>
        <input
          id="product-stock"
          type="number"
          value={editingProduct?.stock || 0} // 기본값을 0으로 설정
          onChange={(e) =>
            handleStockChange(Math.max(0, parseInt(e.target.value) || 0))
          }
          className="w-full p-2 border rounded"
        />
      </div>
    </>
  );
};
