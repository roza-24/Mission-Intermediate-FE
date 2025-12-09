import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`${
          isScrolled ? "bg-black/90 shadow-lg" : "bg-black/40 backdrop-blur-md"
        } 
  fixed top-0 left-0 w-full z-50 py-4`} // <--- perhatikan py-4
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* LOGO */}
          <Link
            to="/"
            className="text-3xl font-extrabold text-red-500 tracking-wide"
          >
            Chill
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8 text-white font-medium">
            <Link to="/" className="hover:text-red-400 transition">
              Home
            </Link>
            <Link to="/favorites" className="hover:text-red-400 transition">
              My Favorites
            </Link>

            <Link
              to="/login"
              className="px-5 py-2 rounded-full bg-red-600 hover:bg-red-700 
              transition shadow-md hover:shadow-red-600/30"
            >
              Login
            </Link>
          </div>

          {/* MOBILE */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* MOBILE SIDE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black/95 text-white z-[60] 
        transform transition-transform duration-300 
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex justify-between items-center border-b border-white/10">
          <span className="text-2xl font-bold text-red-500">Menu</span>

          <button onClick={() => setMenuOpen(false)}>
            <X size={30} />
          </button>
        </div>

        <div className="flex flex-col space-y-6 p-6 text-lg font-medium">
          <Link
            to="/"
            className="hover:text-red-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/favorites"
            className="hover:text-red-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            My Favorites
          </Link>

          <Link
            to="/login"
            className="py-2 px-4 rounded-full text-center bg-red-600 hover:bg-red-700 shadow-md 
            hover:shadow-red-600/30 transition"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      </div>

      {/* BACKDROP (untuk tutup menu) */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
}
