import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";


function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}

        <div className="footer-section">

          <h3>Prime Estates</h3>

          <p>
            Helping individuals and families find beautiful,
            affordable and luxurious homes.
          </p>

          <p>"image placement here"</p>

        </div>

        {/* Quick Links */}

        <div className="footer-section">

          <h3>Quick Links</h3>

          <ul>

            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/properties">Properties</a>
            </li>

            <li>
              <a href="/about">About Us</a>
            </li>

            <li>
              <a href="/contact">Contact</a>
            </li>

          </ul>

        </div>

        {/* Contact */}

        <div className="footer-section">

          <h3>Contact</h3>

          <p>
            <FaPhoneAlt /> +234 800 000 0000
          </p>

          <p>
            <FaEnvelope /> info@primeestates.com
          </p>

          <p>
            <FaMapMarkerAlt />
            Abuja, Nigeria
          </p>

        </div>

        {/* Social */}

        <div className="footer-section">

          <h3>Follow Us</h3>

          <div className="social-icons">

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Prime Estates.
          All Rights Reserved.
        </p>

        <div>

              <Link to="/">
                Privacy Policy
              </Link>

              <Link to="/">
                Terms & Conditions
              </Link>

            </div>

      </div>

    </footer>
  );
}

export default Footer;
