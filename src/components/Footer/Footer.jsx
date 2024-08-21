import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <>
      <footer id="Footer">
        <div className="footer__wrapper pb-4 mt-12 md:mt-20 px-2 md:px-0">
          <div className="container mx-auto">
            <div className="footer__container">
              <div className="flex items-center justify-between">
                <div className="logo">
                  <Link to="/" className="flex items-center">
                    <img src={logo} alt="logo" />
                    <span className="text-2xl text-black uppercase font-inter leading-5 ps-2 hidden md:block">
                      <strong>Glyph</strong> Blogs
                    </span>
                  </Link>
                </div>
                <div className="footer__social">
                  <ul className="flex items-center gap-4">
                    <li>
                      <Link to="https://x.com/GlyphPlatforms">
                        <FaXTwitter className="text-2xl" />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.youtube.com/@glyphplatforms">
                        <FaYoutube className="text-2xl" />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.instagram.com/glyphplatforms">
                        <FaInstagram className="text-2xl" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
