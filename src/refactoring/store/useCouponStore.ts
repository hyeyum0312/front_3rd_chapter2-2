import { create } from "zustand";
import { Coupon } from "../../types";

const initialCoupons: Coupon[] = [
  {
    name: "5000원 할인 쿠폰",
    code: "AMOUNT5000",
    discountType: "amount",
    discountValue: 5000,
  },
  {
    name: "10% 할인 쿠폰",
    code: "PERCENT10",
    discountType: "percentage",
    discountValue: 10,
  },
];

interface UseCouponStore {
  coupons: Coupon[]; // 쿠폰 목록
  newCoupon: Coupon; // 새 쿠폰 상태

  setCoupons: (coupons: Coupon[]) => void; // 쿠폰 목록 설정 함수
  addCoupon: (newCoupon: Coupon) => void; // 쿠폰 추가 함수
  setNewCoupon: (coupon: Coupon) => void; // 새 쿠폰 상태 설정 함수
}

export const useCouponStore = create<UseCouponStore>((set) => ({
  coupons: initialCoupons,
  newCoupon: {
    name: "",
    code: "",
    discountType: "percentage",
    discountValue: 0,
  },

  // 쿠폰 목록을 초기화하는 함수
  setCoupons: (coupons: Coupon[]) => set({ coupons }),

  // 새로운 쿠폰을 추가하는 함수
  addCoupon: (newCoupon: Coupon) =>
    set((state) => {
      const updatedCoupons = [...state.coupons, newCoupon];

      // 새 쿠폰 추가 후 초기화
      return {
        coupons: updatedCoupons,
        newCoupon: {
          name: "",
          code: "",
          discountType: "percentage",
          discountValue: 0,
        }, // 초기화
      };
    }),

  // 새 쿠폰 상태 설정 함수
  setNewCoupon: (coupon: Coupon) => set({ newCoupon: coupon }),
}));
