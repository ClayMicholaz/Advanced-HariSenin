import { create } from "zustand";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL + "/courses";

const useProductStore = create((set, get) => ({
  // State
  products: [],
  loading: false,
  error: null,

  // Actions
  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      const { data } = await axios.get(API_URL);
      set({ products: data, loading: false });
    } catch (error) {
      console.error("Error fetching products:", error);
      set({ error: error.message, loading: false });
    }
  },

  addProduct: async (productData) => {
    set({ loading: true, error: null });
    try {
      await axios.post(API_URL, productData);
      // Refresh products list after adding
      await get().fetchProducts();
      return { success: true, message: "Produk berhasil ditambahkan!" };
    } catch (error) {
      console.error("Error adding product:", error);
      set({ error: error.message, loading: false });
      return { success: false, message: "Gagal menambahkan produk" };
    }
  },

  updateProduct: async (id, productData) => {
    set({ loading: true, error: null });
    try {
      await axios.put(`${API_URL}/${id}`, productData);
      // Refresh products list after updating
      await get().fetchProducts();
      return { success: true, message: "Produk berhasil diperbarui!" };
    } catch (error) {
      console.error("Error updating product:", error);
      set({ error: error.message, loading: false });
      return { success: false, message: "Gagal memperbarui produk" };
    }
  },

  deleteProduct: async (id) => {
    set({ loading: true, error: null });
    try {
      await axios.delete(`${API_URL}/${id}`);
      // Refresh products list after deleting
      await get().fetchProducts();
      return { success: true, message: "Produk berhasil dihapus!" };
    } catch (error) {
      console.error("Error deleting product:", error);
      set({ error: error.message, loading: false });
      return { success: false, message: "Gagal menghapus produk" };
    }
  },

  // Search functionality
  searchProducts: (searchTerm) => {
    const { products } = get();
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },

  // Clear error
  clearError: () => set({ error: null }),

  // Reset loading state
  setLoading: (loading) => set({ loading }),
}));

export default useProductStore;
