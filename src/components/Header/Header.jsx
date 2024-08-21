import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Header = () => {
  const [active, setActive] = useState(false);

  window.addEventListener("scroll", function () {
    if (this.window.scrollY > 100) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <header className={active ? "sticky" : "py-4"}>
      <nav className="container mx-auto flex items-center justify-between py-4 px-2 md:px-0">
        {/* Logo */}
        <div>
          <Link to="/" className="flex items-center">
            <img src={logo} alt="logo" />
            <span className="text-2xl text-black uppercase font-inter leading-5 ps-2 hidden md:block">
              <strong>Glyph</strong> Blogs
            </span>
          </Link>
        </div>
        <div>
          <ul className="flex items-center space-x-5">
            <li>
              <Link to="/" className="text-black text-lg pr-2">
                Login
              </Link>
            </li>
            <li>
              <Link to="/" className="primary__btn">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
