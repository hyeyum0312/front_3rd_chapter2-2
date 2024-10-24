import { Product } from "../../../../types";
import { useProductStore } from "../../../store/useProductStore";

interface product {
  product: Product;
}
export const ProductListItem = ({ product }: product) => {
  const { setEditingProduct } = useProductStore();

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
