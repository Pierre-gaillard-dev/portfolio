import { FC } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
/* import pages */
import Home from "./pages/Home/index"
import CookiePolicy from "./pages/CookiePolicy"
import LegalNotices from "./pages/LegalNotices"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import Projects from "./pages/Projects"
/* import components */
import Header from "./components/Header"
import Footer from "./components/Footer"
import Analytics from "./components/Analytics"
import CookieBanner from "./components/CookieBanner"

import "./theme/global.css"

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header sticky />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/legal-notices" element={<LegalNotices />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
      <Footer />
      <Analytics />
      <CookieBanner />
    </BrowserRouter>
  )
}

export default App
