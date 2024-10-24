import { Product } from "../../../../types";
import { ProductListItem } from "./ProductListItem";
import { ProductUpdate } from "./ProductUpdate";

interface Props {
  editingProduct: Product | null;
  product: Product;
  onProductUpdate: (updatedProduct: Product) => void;
  setEditingProduct: (product: Product | null) => void;
}

// 상품 아이템의 수정 폼 활성화 여부 체크
export const RenderProductDetail = ({
  editingProduct,
  product,
  onProductUpdate,
  setEditingProduct,
}: Props) => {
  if (editingProduct?.id === product.id) {
    return (
      <ProductUpdate
        product={product}
        onProductUpdate={onProductUpdate}
        editingProduct={editingProduct}
        setEditingProduct={setEditingProduct}
      />
    );
  }

  return (
    <ProductListItem product={product} setEditingProduct={setEditingProduct} />
  );
};
