import { Product } from "../../../types";

interface Props {
  product: Product; // 수정할 제품 정보
  editingProduct: Omit<Product, "id">; // id를 제외한 수정 중인 제품 정보
  handleProductNameUpdate: (productId: string, newName: string) => void; // 제품 이름 업데이트 함수
  handlePriceUpdate: (productId: string, newPrice: number) => void; // 가격 업데이트 함수
  handleStockUpdate: (productId: string, newStock: number) => void; // 재고 업데이트 함수
}

export const ProductUpdateForm = ({
  product,
  editingProduct,
  handleProductNameUpdate,
  handlePriceUpdate,
  handleStockUpdate,
}: Props) => {
  return (
    <>
      <div className="mb-4">
        <label className="block mb-1">상품명: </label>
        <input
          type="text"
          value={editingProduct.name}
          onChange={(e) => handleProductNameUpdate(product.id, e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">가격: </label>
        <input
          type="number"
          value={editingProduct.price}
          onChange={(e) =>
            handlePriceUpdate(product.id, parseInt(e.target.value))
          }
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">재고: </label>
        <input
          type="number"
          value={editingProduct.stock}
          onChange={(e) =>
            handleStockUpdate(product.id, parseInt(e.target.value))
          }
          className="w-full p-2 border rounded"
        />
      </div>
    </>
  );
};
