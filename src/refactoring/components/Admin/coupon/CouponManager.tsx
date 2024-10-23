import { useState } from "react";
import { Coupon } from "../../../../types";
import { AddCoupon } from "./AddCoupon";
import { CouponListItem } from "./CouponListItem";

interface Props {
  coupons: Coupon[];
  onCouponAdd: (newCoupon: Coupon) => void;
}

export const CouponManager = ({ coupons, onCouponAdd }: Props) => {
  const [newCoupon, setNewCoupon] = useState<Coupon>({
    name: "",
    code: "",
    discountType: "percentage",
    discountValue: 0,
  });

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">쿠폰 관리</h2>
      <div className="bg-white p-4 rounded shadow">
        <AddCoupon newCoupon={newCoupon} onCouponAdd={onCouponAdd} />

        <div>
          <h3 className="text-lg font-semibold mb-2">현재 쿠폰 목록</h3>
          <div className="space-y-2">
            {coupons.map((coupon, index) => (
              <CouponListItem key={index} coupon={coupon} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
