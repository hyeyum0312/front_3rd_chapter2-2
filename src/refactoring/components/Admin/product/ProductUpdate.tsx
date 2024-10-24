import { Product } from "../../../../types";
import { ProductDiscountUpdate } from "./ProductDiscount/ProductDiscountUpdate";
import { ProductUpdateForm } from "./ProductUpdateForm";

interface Props {
  product: Product;
}

export const ProductUpdate = ({ product }: Props) => {
  return (
    <div>
      <ProductUpdateForm />

      {/* 할인 정보 수정 부분 */}
      <ProductDiscountUpdate product={product} />
    </div>
  );
};
