import { socialLinks } from "../Data";
import { pageLinks } from "../Data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} className="footer-link">
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} className="nav-icon">
                <i className={link.icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        <span id="date">{new Date().toLocaleString("en-GB").slice(0, 10)}. </span>
        Thank you for visiting the website. You're smart , you're loyal
      </p>
    </footer>
  );
};
export default Footer;
