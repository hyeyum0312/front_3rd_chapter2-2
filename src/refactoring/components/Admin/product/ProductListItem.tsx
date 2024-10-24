import { Product } from "../../../../types";

interface product {
  product: Product;
  setEditingProduct: (product: Product | null) => void; // 타입 수정
}
export const ProductListItem = ({ product, setEditingProduct }: product) => {
  const handleEditProduct = (product: Product) => {
    setEditingProduct({ ...product });
  };

  return (
    <div>
      {product.discounts.map((discount, index) => (
        <div className="mb-2" key={index}>
          <span>
            {discount.quantity}개 이상 구매 시 {discount.rate * 100}% 할인
          </span>
        </div>
      ))}

      <button
        data-testid="modify-button"
        onClick={() => handleEditProduct(product)}
        className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mt-2"
      >
        수정
      </button>
    </div>
  );
};
