import React from "react";
import Navbar from "../components/organisems/Navbar";

export default function Register() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.fullName.value,
      email: form.email.value,
      password: form.password.value,
      gender: form.gender.value,
      phoneNumber: form.phoneNumber.value,
    };

    try {
      const res = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok) {
        alert("Berhasil daftar, silakan login");
      } else {
        alert(result.error || "Gagal daftar");
      }
    } catch (err) {
      alert("Gagal koneksi ke server");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-yellow-50/80 font-sans">
        <div className="flex justify-center items-center px-5 md:px-30 py-16 min-h-screen">
          <div className="w-full max-w-lg bg-white rounded border border-gray-200 p-6 md:p-9 shadow-sm">
            <div className="text-center mb-9">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                Pendaftaran Akun
              </h3>
              <p className="text-sm md:text-base text-gray-500">
                Yuk, daftarkan akunmu sekarang juga!
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm md:text-base text-gray-500 mb-2">
                    Nama Lengkap <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    className="w-full h-12 px-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm md:text-base text-gray-500 mb-2">
                    E-Mail <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full h-12 px-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm md:text-base text-gray-500 mb-2">
                    Jenis Kelamin <span className="text-orange-500">*</span>
                  </label>
                  <select
                    name="gender"
                    className="w-full h-12 px-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    required
                  >
                    <option value="">Pilih Jenis Kelamin</option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm md:text-base text-gray-500 mb-2">
                    No. Hp <span className="text-orange-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <div className="flex items-center border border-gray-200 rounded-md">
                      <div className="flex items-center justify-center w-11 h-12 border-r border-gray-200 px-2">
                        <span className="text-lg">🇮🇩</span>
                      </div>
                      <select className="w-20 h-12 border-none focus:outline-none text-sm">
                        <option value="+62">+62</option>
                      </select>
                    </div>
                    <input
                      type="tel"
                      name="phoneNumber"
                      className="flex-1 h-12 px-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm md:text-base text-gray-500 mb-2">
                    Kata Sandi <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="w-full h-12 px-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm md:text-base text-gray-500 mb-2">
                    Konfirmasi Kata Sandi{" "}
                    <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="w-full h-12 px-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    required
                  />
                </div>

                <div className="text-right">
                  <a
                    href="./forgotpassword.html"
                    className="text-sm md:text-base text-gray-500 hover:text-gray-700 underline"
                  >
                    Lupa Password?
                  </a>
                </div>

                <div className="space-y-4">
                  <button
                    type="submit"
                    className="w-full h-11 bg-green-400 text-white font-bold rounded-lg hover:bg-green-500 transition-colors"
                  >
                    Daftar
                  </button>
                  <a
                    href="./login"
                    className="w-full h-11 bg-green-100 text-green-400 font-bold rounded-lg hover:bg-green-200 transition-colors flex items-center justify-center"
                  >
                    Masuk
                  </a>
                </div>
              </div>
            </form>

            <div className="flex items-center justify-center my-6">
              <div className="flex-1 h-0.5 bg-gray-200"></div>
              <div className="px-4 bg-white">
                <p className="text-sm md:text-base text-gray-600">atau</p>
              </div>
              <div className="flex-1 h-0.5 bg-gray-200"></div>
            </div>

            <button
              type="button"
              className="w-full h-11 flex items-center justify-center gap-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-sm md:text-base text-gray-700 font-bold">
                Daftar dengan Google
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
