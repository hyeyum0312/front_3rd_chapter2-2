import { Product } from "../../../../types";
import { ProductDiscountUpdate } from "./ProductDiscount/ProductDiscountUpdate";
import { ProductUpdateForm } from "./ProductUpdateForm";

interface Props {
  product: Product;
  onProductUpdate: (updatedProduct: Product) => void;
  editingProduct: Product; // id를 제외하지 않음
  setEditingProduct: (product: Product | null) => void;
}

export const ProductUpdate = ({
  product,
  onProductUpdate,
  editingProduct,
  setEditingProduct,
}: Props) => {
  // 상품이름 업데이트
  const handleProductNameUpdate = (newName: string) => {
    const updatedProduct = { ...editingProduct, name: newName };
    setEditingProduct(updatedProduct);
  };

  // 상품가격 업데이트
  const handlePriceUpdate = (newPrice: number) => {
    const updatedProduct = { ...editingProduct, price: newPrice };
    setEditingProduct(updatedProduct);
  };

  // 상품재고 업데이트
  const handleStockUpdate = (newStock: number) => {
    const updatedProduct = { ...editingProduct, stock: newStock };
    onProductUpdate(updatedProduct);
    setEditingProduct(updatedProduct);
  };

  return (
    <div>
      <ProductUpdateForm
        editingProduct={editingProduct}
        handleProductNameUpdate={handleProductNameUpdate}
        handlePriceUpdate={handlePriceUpdate}
        handleStockUpdate={handleStockUpdate}
      />

      {/* 할인 정보 수정 부분 */}
      <ProductDiscountUpdate
        product={product}
        onProductUpdate={onProductUpdate}
        editingProduct={editingProduct}
        setEditingProduct={setEditingProduct}
      />
    </div>
  );
};
