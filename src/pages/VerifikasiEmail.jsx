import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

export default function VerifikasiEmail() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  useEffect(() => {
    if (token) {
      axios
        .get(`http://localhost:3001/auth/verifikasi-email?token=${token}`)
        .then((res) => {
          alert(res.data.message);
        })
        .catch((err) => {
          alert(err.response?.data?.error || "Gagal verifikasi");
        });
    }
  }, [token]);

  return <div>Verifikasi email...</div>;
}