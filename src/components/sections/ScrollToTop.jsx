import { useEffect } from "react";
import {useLocation} from 'react-router-dom'

export default function ScrollToTop() {
  // Ambil info alamat url
  const {pathname} = useLocation()

  useEffect(() => {
    // Setiap kali url berganti jalankan ini, yaitu paksa ke atas
    window.scrollTo(0,0)
  }, [pathname]) // jalankan ulang saat url berubah

  return null
} 