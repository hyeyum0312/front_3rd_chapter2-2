import { Product } from "../../../../types";
import { useProductStore } from "../../../store/useProductStore";
import { ProductListItem } from "./ProductListItem";
import { ProductUpdate } from "./ProductUpdate";

interface Props {
  product: Product;
}

// 상품 아이템의 수정 폼 활성화 여부 체크
export const RenderProductDetail = ({ product }: Props) => {
  const { editingProduct } = useProductStore();
  if (editingProduct?.id === product.id) {
    return <ProductUpdate product={product} />;
  }

  return <ProductListItem product={product} />;
};
