import heroimage from "../assets/images/hero image3.jpg";
import luxuryduplex from "../assets/images/luxury mansion.jpg";
import modernapartment from "../assets/images/moder 3 bedroom apartment.jpg";
import luxuryvilla from "../assets/images/luxury villa.jpg";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaSearch,
  FaShieldAlt,
  FaHandshake,
  FaKey,
  FaArrowRight,
} from "react-icons/fa";

function Home() {
  return (
    <main className="home">

      {/* ================= HERO SECTION ================= */}

      <section className="hero">

        <div className="hero-content">

          <h1>
            Find Your Dream Home Today
          </h1>

          <p>
            Browse premium apartments, luxury villas,
            duplexes, office spaces and affordable homes
            from trusted real estate professionals.
          </p>

          <div className="hero-buttons">

            <Link to="/properties" className="primary-btn">
              Browse Properties
            </Link>

            <Link to="/contact" className="secondary-btn">
              Contact Agent
            </Link>

          </div>

        </div>

        <div className="hero-image">

          <div className="image-placeholder">
            <img src={heroimage} alt="homepage image"/>
          </div>

        </div>

      </section>

      {/* ================= SEARCH PROMO ================= */}

      <section className="search-promo">

        <FaSearch className="promo-icon" />

        <h2>Looking for a Particular Home?</h2>

        <p>
          Use our advanced property search to locate
          apartments, duplexes, detached houses,
          commercial buildings and more.
        </p>

        <Link to="/properties" className="primary-btn">
          Search Properties
        </Link>

      </section>

      {/* ================= FEATURED PROPERTIES ================= */}

      <section className="featured-properties">

        <h2>Featured Properties</h2>

        <p>
          Explore some of our most popular listings.
        </p>

        <div className="property-grid">

          <div className="featured-card">

            <div className="featured-image">
              <img src={luxuryduplex} alt="luxury duplex image"/>
            </div>

            <h3>Luxury Duplex</h3>

            <p>Location: Abuja</p>

            <p>₦185,000,000</p>

            <Link
              to="/properties"
              className="card-button"
            >
              View Details
            </Link>

          </div>

          <div className="featured-card">

            <div className="featured-image">
              <img src={modernapartment} alt="modern apartment image"/>
            </div>

            <h3>Modern Apartment</h3>

            <p>Location: Lagos</p>

            <p>₦85,000,000</p>

            <Link
              to="/properties"
              className="card-button"
            >
              View Details
            </Link>

          </div>

          <div className="featured-card">

            <div className="featured-image">
              <img src={luxuryvilla} alt="luxury villa image"/>
            </div>

            <h3>Luxury Villa</h3>

            <p>Location: Port Harcourt</p>

            <p>₦250,000,000</p>

            <Link
              to="/properties"
              className="card-button"
            >
              View Details
            </Link>

          </div>

        </div>

      </section>

      {/* ================= WHY CHOOSE US ================= */}

      <section className="why-us">

        <h2>Why Choose Prime Estates?</h2>

        <div className="why-grid">

          <div className="why-card">

            <FaShieldAlt className="why-icon" />

            <h3>Trusted Listings</h3>

            <p>
              Every property is verified before being
              published on our platform.
            </p>

          </div>

          <div className="why-card">

            <FaHandshake className="why-icon" />

            <h3>Professional Agents</h3>

            <p>
              Work with experienced agents who understand
              the real estate market.
            </p>

          </div>

          <div className="why-card">

            <FaKey className="why-icon" />

            <h3>Easy Ownership</h3>

            <p>
              We simplify the buying process from property
              search to ownership.
            </p>

          </div>

        </div>

      </section>

      {/* ================= PROPERTY TYPES ================= */}

      <section className="property-types">

        <h2>Browse by Property Type</h2>

        <div className="type-grid">

          <div className="type-card">
            <FaHome />
            <h3>Apartments</h3>
          </div>

          <div className="type-card">
            <FaHome />
            <h3>Duplexes</h3>
          </div>

          <div className="type-card">
            <FaHome />
            <h3>Luxury Villas</h3>
          </div>

          <div className="type-card">
            <FaHome />
            <h3>Commercial Buildings</h3>
          </div>

          <div className="type-card">
            <FaHome />
            <h3>Land</h3>
          </div>

          <div className="type-card">
            <FaHome />
            <h3>Office Spaces</h3>
          </div>

        </div>

      </section>

      {/* ================= TESTIMONIALS ================= */}

      <section className="testimonials">

        <h2>What Our Clients Say</h2>

        <div className="testimonial-grid">

          <div className="testimonial">

            <p>
              "Prime Estates helped us purchase our dream
              home in just two weeks. Their service was
              exceptional."
            </p>

            <h4>- Sarah Johnson</h4>

          </div>

          <div className="testimonial">

            <p>
              "Professional agents, transparent pricing,
              and excellent customer support throughout
              the process."
            </p>

            <h4>- Michael David</h4>

          </div>

          <div className="testimonial">

            <p>
              "I highly recommend Prime Estates for anyone
              looking for quality real estate investments."
            </p>

            <h4>- Grace Williams</h4>

          </div>

        </div>

      </section>

      {/* ================= CALL TO ACTION ================= */}

      <section className="cta">

        <h2>
          Ready to Find Your New Home?
        </h2>

        <p>
          Browse hundreds of verified properties across
          Nigeria and connect with our trusted agents.
        </p>

        <Link
          to="/properties"
          className="primary-btn"
        >
          Explore Listings

          <FaArrowRight />

        </Link>

      </section>

    </main>
  );
}

export default Home;