import { create } from "zustand";
import { Product } from "../../types";

interface ProductStore {
  newProduct: Omit<Product, "id">; // id를 제외한 새 제품 정보
  editingProduct: Product | null; // 수정 중인 제품 정보
  products: Product[]; // 제품 목록

  setNewProduct: (product: Omit<Product, "id">) => void; // 새 제품 설정
  clearNewProduct: () => void; // 새 제품 초기화
  setEditingProduct: (product: Product | null) => void; // 수정 중인 제품 설정

  addProduct: (newProduct: Product) => void; // 제품 추가
  updateProduct: (updatedProduct: Product) => void; // 제품 업데이트
}

export const useProductStore = create<ProductStore>((set) => ({
  newProduct: {
    name: "",
    price: 0,
    stock: 0,
    discounts: [],
  },
  editingProduct: null,
  products: [], // products 배열을 추가

  setNewProduct: (product) => set({ newProduct: product }),
  clearNewProduct: () =>
    set({
      newProduct: { name: "", price: 0, stock: 0, discounts: [] },
    }),
  setEditingProduct: (product) => set({ editingProduct: product }),

  addProduct: (newProduct) =>
    set((state) => ({
      products: [...state.products, newProduct],
    })),

  updateProduct: (updatedProduct) => {
    set((state) => ({
      products: state.products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      ),
    }));
  },
}));
