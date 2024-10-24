import { create } from "zustand";
import { Coupon } from "../../types";

interface UseCouponStore {
  coupons: Coupon[]; // 쿠폰 목록
  setCoupons: (coupons: Coupon[]) => void; // 쿠폰 목록 설정 함수
  addCoupon: (newCoupon: Coupon) => void; // 쿠폰 추가 함수
}

export const useCouponStore = create<UseCouponStore>((set) => ({
  coupons: [],

  // 쿠폰 목록을 초기화하는 함수
  setCoupons: (coupons: Coupon[]) => set({ coupons }),

  // 새로운 쿠폰을 추가하는 함수
  addCoupon: (newCoupon: Coupon) =>
    set((state) => ({
      coupons: [...state.coupons, newCoupon],
    })),
}));
