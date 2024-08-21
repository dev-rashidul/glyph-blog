import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header>
      <nav className="container mx-auto flex items-center justify-between py-4 px-2 md:px-0">
        {/* Logo */}
        <div>
          <Link to="/" className="flex items-center">
            <img src={logo} alt="logo" />
            <span className="text-2xl text-white uppercase font-inter leading-5 ps-2 hidden md:block">
              <strong>Glyph</strong> Blogs
            </span>
          </Link>
        </div>
        <div>
          <ul className="flex items-center space-x-5">
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
