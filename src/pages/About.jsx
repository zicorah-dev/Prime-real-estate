import heroimage from "../assets/images/hero image.jpg"
import aboutus from "../assets/images/about-us-pic.jpg"
import managingdirector from "../assets/images/managing-director-pic.jpg"
import headofsales from "../assets/images/head-of-sales.jpg"
import propertyconsultant from "../assets/images/consultant-pic.jpg"
import {
  FaArrowRight,
  FaAward,
  FaBuilding,
  FaCheckCircle,
  FaHandshake,
  FaHome,
  FaLightbulb,
  FaMapMarkerAlt,
  FaPeopleCarry,
  FaShieldAlt,
  FaStar,
  FaUsers,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function About() {
  return (
    <main className="about-page">

      {/* ==================================================
          ABOUT HERO
      ================================================== */}

      <section className="about-hero">

        <div className="about-hero-overlay">

          <div className="about-hero-content">

            <span className="section-label light">
              About Prime Estates
            </span>

            <h1>
              Helping You Find a Place
              <span> You Can Call Home</span>
            </h1>

            <p>
              We connect individuals, families,
              investors, and businesses with quality
              properties in desirable locations.
            </p>

            <div className="about-hero-buttons">

              <Link
                to="/properties"
                className="primary-btn"
              >
                Explore Properties
                <FaArrowRight />
              </Link>

              <Link
                to="/contact"
                className="outline-light-btn"
              >
                Contact Our Team
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          COMPANY INTRODUCTION
      ================================================== */}

      <section className="about-intro">

        <div className="about-container">

          <div className="about-intro-grid">

            {/* Image */}

            <div className="about-image-wrapper">

              <div className="about-main-image">

                <div className="image-placeholder">
                 <img src={heroimage} alt="about us image"/>
                </div>

              </div>

              <div className="about-experience-card">

                <FaAward />

                <strong>
                  10+
                </strong>

                <span>
                  Years of Experience
                </span>

              </div>

            </div>


            {/* Content */}

            <div className="about-intro-content">

              <span className="section-label">
                Who We Are
              </span>

              <h2>
                A Real Estate Company
                Built Around Your Needs
              </h2>

              <p>
                Prime Estates is a modern real estate
                company dedicated to making property
                ownership and investment simpler,
                clearer, and more rewarding.
              </p>

              <p>
                From stylish family homes and modern
                apartments to premium commercial spaces
                and investment properties, our goal is
                to provide clients with access to
                carefully selected real estate
                opportunities.
              </p>

              <p>
                We combine local market knowledge,
                professional service, and technology
                to create a property experience that
                puts our clients first.
              </p>


              <div className="about-check-list">

                <div>
                  <FaCheckCircle />
                  <span>
                    Carefully selected properties
                  </span>
                </div>

                <div>
                  <FaCheckCircle />
                  <span>
                    Transparent property information
                  </span>
                </div>

                <div>
                  <FaCheckCircle />
                  <span>
                    Professional customer support
                  </span>
                </div>

                <div>
                  <FaCheckCircle />
                  <span>
                    Property investment guidance
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          MISSION & VISION
      ================================================== */}

      <section className="mission-section">

        <div className="about-container">

          <div className="section-heading centered">

            <span className="section-label">
              Our Purpose
            </span>

            <h2>
              Driven by a Clear Purpose
            </h2>

            <p>
              Everything we do is focused on creating
              a better and more trustworthy real estate
              experience.
            </p>

          </div>


          <div className="mission-grid">

            {/* Mission */}

            <article className="mission-card">

              <div className="mission-icon">
                <FaBullseyeIcon />
              </div>

              <h3>
                Our Mission
              </h3>

              <p>
                Our mission is to make quality real
                estate accessible through reliable
                property information, professional
                guidance, and a client-first approach.
              </p>

            </article>


            {/* Vision */}

            <article className="mission-card">

              <div className="mission-icon">
                <FaLightbulb />
              </div>

              <h3>
                Our Vision
              </h3>

              <p>
                We envision a future where finding,
                buying, selling, and investing in
                property is straightforward,
                transparent, and empowering for
                everyone.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* ==================================================
          STATISTICS
      ================================================== */}

      <section className="about-stats">

        <div className="about-container">

          <div className="stats-grid">

            <div className="about-stat">

              <FaHome />

              <strong>
                250+
              </strong>

              <span>
                Properties Listed
              </span>

            </div>


            <div className="about-stat">

              <FaUsers />

              <strong>
                1,200+
              </strong>

              <span>
                Happy Clients
              </span>

            </div>


            <div className="about-stat">

              <FaBuilding />

              <strong>
                50+
              </strong>

              <span>
                Premium Locations
              </span>

            </div>


            <div className="about-stat">

              <FaAward />

              <strong>
                10+
              </strong>

              <span>
                Years Experience
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          CORE VALUES
      ================================================== */}

      <section className="values-section">

        <div className="about-container">

          <div className="section-heading centered">

            <span className="section-label">
              Our Values
            </span>

            <h2>
              What We Stand For
            </h2>

            <p>
              Our values guide every property,
              conversation, and relationship.
            </p>

          </div>


          <div className="values-grid">

            <article className="value-card">

              <div className="value-icon">
                <FaHandshake />
              </div>

              <h3>
                Integrity
              </h3>

              <p>
                We believe in honest communication,
                transparent information, and doing
                what is right for our clients.
              </p>

            </article>


            <article className="value-card">

              <div className="value-icon">
                <FaShieldAlt />
              </div>

              <h3>
                Trust
              </h3>

              <p>
                We work hard to build lasting
                relationships based on reliability,
                accountability, and confidence.
              </p>

            </article>


            <article className="value-card">

              <div className="value-icon">
                <FaStar />
              </div>

              <h3>
                Excellence
              </h3>

              <p>
                We continuously improve our service
                and seek to deliver a high standard
                of professional real estate support.
              </p>

            </article>


            <article className="value-card">

              <div className="value-icon">
                <FaLightbulb />
              </div>

              <h3>
                Innovation
              </h3>

              <p>
                We use technology and modern ideas
                to make property discovery easier
                and more convenient.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* ==================================================
          WHY CHOOSE US
      ================================================== */}

      <section className="why-us-section">

        <div className="about-container">

          <div className="why-us-grid">

            <div className="why-us-content">

              <span className="section-label">
                Why Prime Estates?
              </span>

              <h2>
                More Than Property.
                We Build Relationships.
              </h2>

              <p>
                Choosing a property is an important
                decision. That's why our approach goes
                beyond simply showing you listings.
              </p>

              <p>
                We listen to your requirements, help
                you understand your options, and give
                you the information needed to make a
                confident decision.
              </p>


              <div className="why-us-list">

                <div className="why-us-item">

                  <span>
                    01
                  </span>

                  <div>

                    <h3>
                      Expert Guidance
                    </h3>

                    <p>
                      Get support from professionals
                      who understand the property
                      market.
                    </p>

                  </div>

                </div>


                <div className="why-us-item">

                  <span>
                    02
                  </span>

                  <div>

                    <h3>
                      Quality Properties
                    </h3>

                    <p>
                      Explore carefully selected
                      residential and commercial
                      opportunities.
                    </p>

                  </div>

                </div>


                <div className="why-us-item">

                  <span>
                    03
                  </span>

                  <div>

                    <h3>
                      Client-First Service
                    </h3>

                    <p>
                      Your goals, preferences, and
                      satisfaction remain at the
                      center of our process.
                    </p>

                  </div>

                </div>

              </div>

            </div>


            <div className="why-us-image">

              <div className="image-placeholder">
                <img src={aboutus} alt="why choose prime estate pic" />
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          TEAM
      ================================================== */}

      <section className="team-section">

        <div className="about-container">

          <div className="section-heading centered">

            <span className="section-label">
              Our Team
            </span>

            <h2>
              Meet the People Behind
              Prime Estates
            </h2>

            <p>
              Our team brings together property
              professionals, market specialists,
              and customer service experts.
            </p>

          </div>


          <div className="team-grid">

            <article className="team-card">

              <div className="team-image">

                <div className="image-placeholder">
                  <img src={managingdirector} alt="managing director pic" />
                </div>

              </div>

              <div className="team-content">

                <h3>
                  Daniel Williams
                </h3>

                <span>
                  Managing Director
                </span>

                <p>
                  Leads the company's strategy and
                  commitment to delivering exceptional
                  real estate experiences.
                </p>

              </div>

            </article>


            <article className="team-card">

              <div className="team-image">

                <div className="image-placeholder">
                  <img src={headofsales} alt="head of sales pic" />
                </div>

              </div>

              <div className="team-content">

                <h3>
                  Sarah Johnson
                </h3>

                <span>
                  Head of Sales
                </span>

                <p>
                  Helps clients identify properties
                  that match their lifestyle,
                  financial, and investment goals.
                </p>

              </div>

            </article>


            <article className="team-card">

              <div className="team-image">

                <div className="image-placeholder">
                  <img src={propertyconsultant} alt="property consultant pic" />
                </div>

              </div>

              <div className="team-content">

                <h3>
                  Michael Adeyemi
                </h3>

                <span>
                  Property Consultant
                </span>

                <p>
                  Provides clients with practical
                  insights and guidance throughout
                  their property journey.
                </p>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* ==================================================
          LOCATION / SERVICE AREA
      ================================================== */}

      <section className="location-section">

        <div className="about-container">

          <div className="location-card">

            <div className="location-icon">
              <FaMapMarkerAlt />
            </div>

            <div>

              <span className="section-label">
                Where We Operate
              </span>

              <h2>
                Helping Clients Find
                Properties in Great Locations
              </h2>

              <p>
                We focus on attractive residential,
                commercial, and investment areas while
                continually expanding our property
                network.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          CTA
      ================================================== */}

      <section className="about-cta">

        <div className="about-container">

          <div className="about-cta-content">

            <FaPeopleCarry />

            <h2>
              Ready to Find Your Next Property?
            </h2>

            <p>
              Explore our latest listings or speak
              directly with our team about your
              property requirements.
            </p>

            <div className="about-cta-buttons">

              <Link
                to="/properties"
                className="primary-btn"
              >
                View Properties
                <FaArrowRight />
              </Link>

              <Link
                to="/contact"
                className="outline-light-btn"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}


/*
 * Small reusable icon component.
 * Keeps the mission section clean.
 */
function FaBullseyeIcon() {
  return (
    <div className="bullseye-icon">
      ◎
    </div>
  );
}

export default About;