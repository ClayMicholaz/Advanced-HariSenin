import React, { useState, useEffect } from "react";
import axios from "axios";
import HomeLayouts from '../layouts/HomeLayouts'
import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL + "/products";

export default function Admin() {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [form, setForm] = useState({ title: "", price: "", subtitle: "" });
    const [editingId, setEditingId] = useState(null);

    // Fetch data
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const { data } = await axios.get(API_URL);
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    // Handle input form
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Handle search input
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    // Add or update product
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingId) {
                await axios.put(`${API_URL}/${editingId}`, form);
                alert("Produk berhasil diperbarui!");
            } else {
                await axios.post(API_URL, form);
                alert("Produk berhasil ditambahkan!");
            }
            fetchProducts();
            setForm({ title: "", price: "", subtitle: "" });
            setEditingId(null);
        } catch (error) {
            console.error("Error saving product:", error);
        }
    };

    // Delete product
    const handleDelete = async (id) => {
        if (confirm("Yakin ingin menghapus?")) {
            await axios.delete(`${API_URL}/${id}`);
            fetchProducts();
        }
    };

    // Edit product
    const handleEdit = (product) => {
        setForm({ 
            title: product.title, 
            price: product.price, 
            subtitle: product.subtitle 
        });
        setEditingId(product.id);
    };

    // Filter produk berdasarkan pencarian
    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <HomeLayouts>
                <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md mb-10">
                    <div className="flex items-center mb-4">
                        <Link to={`/`} className="bg-gray-300 px-3 py-1 rounded-md mr-4 hover:bg-gray-400">
                            {`<`}
                        </Link>
                        <h1 className="text-2xl font-bold text-center flex-grow">Admin Produk</h1>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="mb-6">
                        <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Judul Produk"
                            className="w-full p-2 border rounded-md mb-2" required />
                        <input type="text" name="subtitle" value={form.subtitle} onChange={handleChange} placeholder="Subjudul"
                            className="w-full p-2 border rounded-md mb-2" />
                        <input type="number" name="price" value={form.price} onChange={handleChange} placeholder="Harga"
                            className="w-full p-2 border rounded-md mb-2" required />
                        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
                            {editingId ? "Update Produk" : "Tambah Produk"}
                        </button>
                    </form>

                    {/* Search Input */}
                    <input
                        type="text"
                        placeholder="Cari produk..."
                        value={search}
                        onChange={handleSearch}
                        className="w-full p-2 border rounded-md mb-4"
                    />

                    {/* Daftar Produk */}
                    <ul className="space-y-4">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <li key={product.id} className="p-4 border rounded-md flex justify-between items-center">
                                    <div>
                                        <h2 className="font-semibold">{product.title}</h2>
                                        <p className="text-sm text-gray-600">{product.subtitle}</p>
                                        <p className="font-bold text-green-500">Rp{product.price}</p>
                                    </div>
                                    <div className="space-x-2">
                                        <button onClick={() => handleEdit(product)} className="px-3 py-1 bg-yellow-500 text-white rounded-md">
                                            Edit
                                        </button>
                                        <button onClick={() => handleDelete(product.id)} className="px-3 py-1 bg-red-500 text-white rounded-md">
                                            Hapus
                                        </button>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <p className="text-center text-gray-500">Produk tidak ditemukan.</p>
                        )}
                    </ul>
                </div>
            </HomeLayouts>
        </>
    )
}
