import React from 'react'
import Navbar from '../components/organisems/Navbar'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      const form = e.target;
      const data = {
        email: form.email.value,
        password: form.password.value,
      };

      try {
        const res = await fetch("http://localhost:3001/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        const result = await res.json();
        if (res.ok) {
          alert("Login berhasil, selamat datang " + result.user.name);
          navigate("/");
        } else {
          alert(result.error || "Login gagal");
        }
      } catch (err) {
        alert("Gagal koneksi ke server");
      }
    };

    return (
      <>
        <Navbar />
        <div className="flex items-center justify-center min-h-[90vh]">
          <div className="w-full max-w-md bg-white p-8 rounded-lg border-[0.1px]">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Masuk ke Akun
              </h2>
              <p className="text-gray-500 font-normal font-s">
                Yuk, lanjutin belajarmu di videobelajar.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  for="email"
                >
                  E-Mail <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>

              <div className="mb-4 relative">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  for="password"
                >
                  Kata Sandi <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>

              <div className="text-right my-4">
                <a
                  href="./forgotpassword.html"
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Lupa Password?
                </a>
              </div>

              <div className="flex items-center justify-between mb-6">
                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md"
                >
                  Masuk
                </button>
              </div>

              <div className="flex items-center justify-center mb-4">
                <a
                  href="./register"
                  className="w-full bg-green-100 hover:bg-green-200 text-green-700 font-semibold py-2 px-4 rounded-md text-center"
                >
                  Daftar
                </a>
              </div>

              <img className="my-4" src="./assets/images/atau.png" alt="" />

              <div className="flex items-center justify-center">
                <button className="w-full flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 rounded-md">
                  <svg
                    className="mr-2"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                    <path d="M1 1h22v22H1z" fill="none" />
                  </svg>
                  Masuk dengan Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
}
