import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Your Logo</div>
      <ul className={styles.navLinks}>
        <li><a href="#home">Home</a></li>
        <li><a href="#aboutus">How it works</a></li>
        <li><a href="#faqs">FAQs</a></li>
        <li><a href="#blogs">Blogs</a></li>
        <li><a href="#contactus">Contact Us</a></li>
      </ul>
      <div className={styles.login}>
        <a href="#login">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
