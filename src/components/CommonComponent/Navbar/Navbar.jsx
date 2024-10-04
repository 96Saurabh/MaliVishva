import style from "./Navbar.module.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";

function Navbar() {
  return (
    <div>
      {/* Top bar with contact and social icons */}
      <div className={style["top-bar"]}>
        <div className={style["contact-info"]}>
          <a href="mailto:info@malivishva.online">info@malivishva.online</a>
          <span> | 8484828455</span>
        </div>
        <div className={style["social-icons"]}>
          <a href="https://wa.me/8484828455" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Navbar with logo, menu links, and login button */}
      <div className={style.navbar}>
        <div className={style.menu}>
          <div className={style.logo}>
            <img src={"https://landing.malivishva.online/wp-content/uploads/2024/05/mali-vishwa-logo.png"} alt="Mali Vishva Logo" />
          </div>
          <div className={style["menu-links"]}>
            <a href="/">HOME</a>
            <a href="/about-us">ABOUT US</a>
            <a href="/faqs">FQA</a>
            <a href="/blog">BLOG</a>
            <a href="/contact-us">CONTACT US</a>
            <a href="/languages">LANGUAGES</a>
          </div>
          <button className={style["login-button"]}>LOGIN</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
