import { Product } from "../../../../types";
import { ProductItem } from "./ProductItem";
interface product {
  product: Product;
  setEditingProduct: (product: Product | null) => void; // 타입 수정
}
export const ProductListItem = ({ product, setEditingProduct }: product) => {
  // 수정 창 띄우기
  const handleEditProduct = (product: Product) => {
    setEditingProduct({ ...product });
  };

  return (
    <div>
      {product.discounts.map((discount, index) => (
        <ProductItem discount={discount} key={index} />
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
