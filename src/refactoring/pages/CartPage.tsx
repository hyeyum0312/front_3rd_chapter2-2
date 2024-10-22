import { Coupon, Product } from "../../types.ts";
import { useCart } from "../hooks/index.ts";
import { calculateCartTotal } from "../hooks/utils/cartUtils.ts";
import { CartItemList } from "../components/Cart/CartItemList.tsx";
import { CouponSelector } from "../components/Cart/CouponSelector.tsx";
import { ProductList } from "../components/Cart/ProductList.tsx";

interface Props {
  products: Product[];
  coupons: Coupon[];
}

export const CartPage = ({ products, coupons }: Props) => {
  const { cart, addToCart, removeFromCart, updateQuantity, applyCoupon, selectedCoupon } = useCart();
  const { totalBeforeDiscount, totalAfterDiscount, totalDiscount } = calculateCartTotal(cart, selectedCoupon);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">장바구니</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">상품 목록</h2>
          <ProductList products={products} cart={cart} addToCart={addToCart} />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">장바구니 내역</h2>
          <CartItemList cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />

          <div className="mt-6 bg-white p-4 rounded shadow">
            <h2 className="text-2xl font-semibold mb-2">쿠폰 적용</h2>
            <CouponSelector coupons={coupons} applyCoupon={applyCoupon} />
            {selectedCoupon && (
              <p className="text-green-600">
                적용된 쿠폰: {selectedCoupon.name}({selectedCoupon.discountType === "amount" ? `${selectedCoupon.discountValue}원` : `${selectedCoupon.discountValue}%`} 할인)
              </p>
            )}
          </div>

          <div className="mt-6 bg-white p-4 rounded shadow">
            <h2 className="text-2xl font-semibold mb-2">주문 요약</h2>
            <div className="space-y-1">
              <p>상품 금액: {totalBeforeDiscount.toLocaleString()}원</p>
              <p className="text-green-600">할인 금액: {totalDiscount.toLocaleString()}원</p>
              <p className="text-xl font-bold">최종 결제 금액: {totalAfterDiscount.toLocaleString()}원</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
