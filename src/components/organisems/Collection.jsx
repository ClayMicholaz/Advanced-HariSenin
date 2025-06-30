import React, { useState, useEffect } from "react";
import Card from "../molecules/Card";
import useProductStore from "../../zustand/store";

const defaultAvatar = "https://via.placeholder.com/150";

export default function Collection() {
  const {
    products,
    loading,
    error,
    fetchProducts,
    clearError,
    filterProductsByCategory,
  } = useProductStore();

  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "Semua Kelas" },
    { id: "pemasaran", name: "Pemasaran" },
    { id: "desain", name: "Desain" },
    { id: "pengembangan-diri", name: "Pengembangan Diri" },
    { id: "bisnis", name: "Bisnis" },
  ];

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, [fetchProducts, products.length]);

  const filteredProducts =
    activeCategory === "all"
      ? products
      : filterProductsByCategory(activeCategory);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <>
      <section className="pt-16 bg-[#FFFDF3]">
        <div className="container max-w-[1200px] mx-auto px-4 text-start">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Koleksi Video Pembelajaran Unggulan
          </h2>
          <p className="text-gray-700 text-lg md:text-xl mb-10">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>

          <div className="flex justify-start space-x-7 mb-12 overflow-x-auto whitespace-nowrap">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`font-semibold pb-2 transition-colors ${
                  activeCategory === category.id
                    ? "text-red-500 border-b-4 border-red-500"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
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
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
              <p className="mt-4 text-gray-600">Memuat produk...</p>
            </div>
          )}

          {!loading && (
            <>
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product) => (
                    <Card
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      subtitle={product.subtitle}
                      avatar={
                        product.title
                          ? `https://robohash.org/${product.title}.png?set=set2`
                          : defaultAvatar
                      }
                      mentor={product.mentor}
                      rolementor={product.rolementor}
                      price={product.price ? `Rp${product.price}` : "Gratis"}
                      photos={
                        product.photos || "https://via.placeholder.com/300"
                      }
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    {activeCategory === "all"
                      ? "Tidak ada produk tersedia."
                      : `Tidak ada produk dalam kategori "${
                          categories.find((c) => c.id === activeCategory)?.name
                        }".`}
                  </p>
                </div>
              )}

              {filteredProducts.length > 0 && (
                <div className="mt-12 text-center">
                  <a
                    href="#"
                    className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-colors"
                  >
                    Lihat Semua Video
                  </a>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
