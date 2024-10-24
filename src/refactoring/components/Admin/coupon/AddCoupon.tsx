import { Coupon } from "../../../../types";
import { useCouponStore } from "../../../store/useCouponStore";

interface Props {
  newCoupon: Coupon;
  onCouponAdd: (newCoupon: Coupon) => void;
}

export const AddCoupon = ({ onCouponAdd }: Props) => {
  const { newCoupon, setNewCoupon } = useCouponStore();

  const handleCouponCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCoupon({ ...newCoupon, code: e.target.value });
  };

  const handleCouponNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCoupon({ ...newCoupon, name: e.target.value });
  };

  const handleDiscountTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setNewCoupon({
      ...newCoupon,
      discountType: e.target.value as "amount" | "percentage",
    });
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // 필요에 따라 기본 동작 방지
    handleAddCoupon(newCoupon);
  };

  const handleDiscountValueChange = (value: string) => {
    setNewCoupon({
      ...newCoupon,
      discountValue: value ? parseInt(value) : 0,
    });
  };

  const handleAddCoupon = (newCoupon: Coupon) => {
    onCouponAdd(newCoupon);
    setNewCoupon({
      name: "",
      code: "",
      discountType: "percentage",
      discountValue: 0,
    });
  };

  return (
    <div className="space-y-2 mb-4">
      <input
        type="text"
        placeholder="쿠폰 이름"
        value={newCoupon.name}
        onChange={handleCouponNameChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="쿠폰 코드"
        value={newCoupon.code}
        onChange={handleCouponCodeChange}
        className="w-full p-2 border rounded"
      />
      <div className="flex gap-2">
        <select
          value={newCoupon.discountType}
          onChange={handleDiscountTypeChange}
          className="w-full p-2 border rounded"
        >
          <option value="amount">금액(원)</option>
          <option value="percentage">할인율(%)</option>
        </select>

        <input
          type="number"
          placeholder="할인 값"
          value={newCoupon.discountValue || ""}
          onChange={(e) => handleDiscountValueChange(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        onClick={handleClick}
        className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
      >
        쿠폰 추가
      </button>
    </div>
  );
};
