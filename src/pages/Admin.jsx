import React, { useState, useEffect } from "react";
import HomeLayouts from "../layouts/HomeLayouts";
import { Link } from "react-router-dom";
import useProductStore from "../zustand/store";

export default function Admin() {
  const {
    products,
    loading,
    error,
    fetchProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    searchProducts,
    clearError,
  } = useProductStore();

  const [search, setSearch] = useState("");
  const [form, setForm] = useState({ judul: "", subjudul: "", harga: "" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    return () => clearError();
  }, [clearError]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let result;
    if (editingId) {
      result = await updateProduct(editingId, form);
    } else {
      result = await addProduct(form);
    }

    if (result.success) {
      alert(result.message);
      setForm({ judul: "", subjudul: "", harga: "" });
      setEditingId(null);
    } else {
      alert(result.message);
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Yakin ingin menghapus?")) {
      const result = await deleteProduct(id);
      alert(result.message);
    }
  };

  const handleEdit = (product) => {
    setForm({
      judul: product.judul,
      subjudul: product.subjudul,
      harga: product.harga,
    });
    setEditingId(product.id);
  };

  const filteredProducts = search ? searchProducts(search) : products;

  return (
    <HomeLayouts>
      <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md mb-10">
        <div className="flex items-center mb-4">
          <Link
            to={`/`}
            className="bg-gray-300 px-3 py-1 rounded-md mr-4 hover:bg-gray-400"
          >
            {`<`}
          </Link>
          <h1 className="text-2xl font-bold text-center flex-grow">
            Admin Produk
          </h1>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <span className="block sm:inline">{error}</span>
            <button
              onClick={clearError}
              className="float-right text-red-700 hover:text-red-900"
            >
              ×
            </button>
          </div>
        )}

        {loading && (
          <div className="text-center py-4">
            <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
            <span className="ml-2">Loading...</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mb-6">
          <input
            type="text"
            name="judul"
            value={form.judul}
            onChange={handleChange}
            placeholder="Judul Produk"
            className="w-full p-2 border rounded-md mb-2"
            required
            disabled={loading}
          />
          <input
            type="text"
            name="subjudul"
            value={form.subjudul}
            onChange={handleChange}
            placeholder="Subjudul Produk"
            className="w-full p-2 border rounded-md mb-2"
            disabled={loading}
          />
          <input
            type="number"
            name="harga"
            value={form.harga}
            onChange={handleChange}
            placeholder="Harga Produk"
            className="w-full p-2 border rounded-md mb-2"
            required
            disabled={loading}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 disabled:bg-blue-300"
            disabled={loading}
          >
            {loading
              ? "Processing..."
              : editingId
              ? "Update Produk"
              : "Tambah Produk"}
          </button>
        </form>

        <input
          type="text"
          placeholder="Cari produk..."
          value={search}
          onChange={handleSearch}
          className="w-full p-2 border rounded-md mb-4"
          disabled={loading}
        />

        <ul className="space-y-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <li
                key={product.id}
                className="p-4 border rounded-md flex justify-between items-center"
              >
                <div>
                  <h2 className="font-semibold">{product.judul}</h2>
                  <p className="text-sm text-gray-600">{product.subjudul}</p>
                  <p className="font-bold text-green-500">Rp{product.harga}</p>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => handleEdit(product)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 disabled:bg-yellow-300"
                    disabled={loading}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 disabled:bg-red-300"
                    disabled={loading}
                  >
                    Hapus
                  </button>
                </div>
              </li>
            ))
          ) : (
            <p className="text-center text-gray-500">
              {search ? "Produk tidak ditemukan." : "Belum ada produk."}
            </p>
          )}
        </ul>
      </div>
    </HomeLayouts>
  );
}