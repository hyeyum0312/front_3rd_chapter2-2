import { create } from "zustand";
import { Product } from "../../types";

const initialProducts: Product[] = [
  {
    id: "p1",
    name: "상품1",
    price: 10000,
    stock: 20,
    discounts: [
      { quantity: 10, rate: 0.1 },
      { quantity: 20, rate: 0.2 },
    ],
  },
  {
    id: "p2",
    name: "상품2",
    price: 20000,
    stock: 20,
    discounts: [{ quantity: 10, rate: 0.15 }],
  },
  {
    id: "p3",
    name: "상품3",
    price: 30000,
    stock: 20,
    discounts: [{ quantity: 10, rate: 0.2 }],
  },
];

interface ProductStore {
  newProduct: Product; // id를 제외한 새 제품 정보
  editingProduct: Product | null; // 수정 중인 제품 정보
  products: Product[]; // 제품 목록
  setProducts: (product: Product[]) => void; // 수정 중인 제품 설정

  setNewProduct: (product: Product) => void;
  clearNewProduct: () => void; // 새 제품 초기화
  setEditingProduct: (product: Product | null) => void; // 수정 중인 제품 설정

  addProduct: (newProduct: Product) => void; // 제품 추가
  updateProduct: (updatedProduct: Product) => void; // 제품 업데이트
  setInitialProducts: (initialProducts: Product[]) => void; // 초기 제품 설정
}

export const useProductStore = create<ProductStore>((set) => ({
  newProduct: {
    id: "",
    name: "",
    price: 0,
    stock: 0,
    discounts: [],
  },
  editingProduct: null,
  products: initialProducts, // 초기 제품 배열

  // 새 제품 설정
  setNewProduct: (product) => set({ newProduct: product }),

  // 새 제품 초기화
  clearNewProduct: () =>
    set({
      newProduct: { id: "", name: "", price: 0, stock: 0, discounts: [] },
    }),

  // 수정 중인 제품 설정
  setEditingProduct: (product) => set({ editingProduct: product }),

  // 제품 추가
  addProduct: (newProduct) =>
    set((state) => ({
      products: [...state.products, newProduct],
    })),

  // 제품 업데이트
  updateProduct: (updatedProduct) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      ),
    })),

  // 초기 제품 설정
  setProducts: (initialProducts: Product[]) =>
    set({ products: initialProducts }),

  setInitialProducts: (initialProducts: Product[]) =>
    set({ products: initialProducts }),
}));
