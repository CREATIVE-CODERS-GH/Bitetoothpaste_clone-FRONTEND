
import { useState, useEffect } from "react";
import { User, ShoppingBag } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex justify-between items-center py-4 px-6 fixed z-50 w-full transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white" : "bg-transparent"
      } backdrop-blur-sm border-b border-black`}
    >
      {/* Logo */}
      <div
        className="text-4xl font-bold cursor-pointer transition-all duration-300 ease-in-out"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? (
          <span className="text-sm">BECAUSE IT'S THE EARTH</span>
        ) : (
          "Bite"
        )}
      </div>

      {/* Links */}
      <div className="space-x-6 text-sm">
        {['SHOP', 'ABOUT', 'OUR IMPACT'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            className="text-black hover:text-black relative group uppercase"
          >
            {item}
            <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </a>
        ))}
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <a href="#account" className="text-black">
          <User className="h-6 w-6" />
        </a>
        <a href="#cart" className="text-black">
          <ShoppingBag className="h-6 w-6" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;