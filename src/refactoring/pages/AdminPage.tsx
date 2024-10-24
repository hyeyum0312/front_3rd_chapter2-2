import { Coupon } from "../../types.ts";
import { CouponManager } from "../components/Admin/coupon/CouponManager.tsx";
import { ProductManager } from "../components/Admin/product/ProductManager.tsx";

interface Props {
  coupons: Coupon[];
  onCouponAdd: (newCoupon: Coupon) => void;
}

export const AdminPage = ({ coupons, onCouponAdd }: Props) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">관리자 페이지</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProductManager />

        <CouponManager coupons={coupons} onCouponAdd={onCouponAdd} />
      </div>
    </div>
  );
};
