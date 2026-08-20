import contactus from "../assets/images/about-us-pic3.jpg"
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
  FaTwitter,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    propertyType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [submitted, setSubmitted] =
    useState(false);


  /*
   * Handle form input changes.
   */
  const handleChange = (event) => {
    const { name, value } =
      event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    /*
     * Remove the field error once
     * the user starts correcting it.
     */
    if (errors[name]) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        [name]: "",
      }));
    }
  };


  /*
   * Validate contact form.
   */
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name =
        "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email =
        "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone =
        "Please enter your phone number.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject =
        "Please enter a subject.";
    }

    if (!formData.propertyType) {
      newErrors.propertyType =
        "Please select a property type.";
    }

    if (!formData.message.trim()) {
      newErrors.message =
        "Please enter your message.";
    } else if (
      formData.message.trim().length < 10
    ) {
      newErrors.message =
        "Your message should contain at least 10 characters.";
    }

    return newErrors;
  };


  /*
   * Submit contact form.
   */
  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors =
      validateForm();

    if (
      Object.keys(validationErrors)
        .length > 0
    ) {
      setErrors(validationErrors);

      setSubmitted(false);

      return;
    }


    /*
     * Frontend-only submission.
     * A real backend/API can be connected later.
     */
    console.log(
      "Contact form submission:",
      formData
    );

    setErrors({});

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      propertyType: "",
      message: "",
    });
  };


  return (
    <main className="contact-page">

      {/* ==================================================
          CONTACT HERO
      ================================================== */}

      <section className="contact-hero">

        <div className="contact-hero-overlay">

          <div className="contact-hero-content">

            <span className="section-label light">
              Get In Touch
            </span>

            <h1>
              Let's Talk About
              <span> Your Property Goals</span>
            </h1>

            <p>
              Whether you're looking for your next
              home, an investment opportunity, or
              professional property guidance, our
              team is ready to help.
            </p>

            <Link
              to="#contact-form"
              className="primary-btn"
            >
              Send an Inquiry
              <FaArrowRight />
            </Link>

          </div>

        </div>

      </section>


      {/* ==================================================
          CONTACT INFORMATION
      ================================================== */}

      <section className="contact-info-section">

        <div className="contact-container">

          <div className="contact-info-grid">

            <article className="contact-info-card">

              <div className="contact-info-icon">
                <FaPhone />
              </div>

              <div>
                <span>
                  Call Us
                </span>

                <h3>
                  +234 800 000 0000
                </h3>

                <p>
                  Speak with our property
                  consultants.
                </p>
              </div>

            </article>


            <article className="contact-info-card">

              <div className="contact-info-icon">
                <FaEnvelope />
              </div>

              <div>
                <span>
                  Email Us
                </span>

                <h3>
                  hello@primeestates.com
                </h3>

                <p>
                  Send us your property inquiry.
                </p>
              </div>

            </article>


            <article className="contact-info-card">

              <div className="contact-info-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <span>
                  Visit Us
                </span>

                <h3>
                  Prime Estates Office
                </h3>

                <p>
                  Abuja, Nigeria
                </p>
              </div>

            </article>


            <article className="contact-info-card">

              <div className="contact-info-icon">
                <FaClock />
              </div>

              <div>
                <span>
                  Office Hours
                </span>

                <h3>
                  Mon - Fri
                </h3>

                <p>
                  8:00 AM - 5:00 PM
                </p>
              </div>

            </article>

          </div>

        </div>

      </section>


      {/* ==================================================
          CONTACT FORM + IMAGE
      ================================================== */}

      <section
        className="contact-form-section"
        id="contact-form"
      >

        <div className="contact-container">

          <div className="contact-main-grid">

            {/* Form */}

            <div className="contact-form-wrapper">

              <div className="section-heading">

                <span className="section-label">
                  Send Us a Message
                </span>

                <h2>
                  How Can We Help You?
                </h2>

                <p>
                  Complete the form below and a
                  member of our team will get back
                  to you as soon as possible.
                </p>

              </div>


              {submitted && (
                <div
                  className="form-success"
                  role="alert"
                >
                  <strong>
                    Message sent successfully!
                  </strong>

                  <span>
                    Thank you for contacting Prime
                    Estates. Our team will review
                    your inquiry and get back to
                    you shortly.
                  </span>
                </div>
              )}


              <form
                className="contact-form"
                onSubmit={handleSubmit}
                noValidate
              >

                {/* Name */}

                <div className="form-group">

                  <label htmlFor="name">
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className={
                      errors.name
                        ? "input-error"
                        : ""
                    }
                  />

                  {errors.name && (
                    <small className="field-error">
                      {errors.name}
                    </small>
                  )}

                </div>


                {/* Email */}

                <div className="form-group">

                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={
                      errors.email
                        ? "input-error"
                        : ""
                    }
                  />

                  {errors.email && (
                    <small className="field-error">
                      {errors.email}
                    </small>
                  )}

                </div>


                {/* Phone */}

                <div className="form-group">

                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+234 800 000 0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className={
                      errors.phone
                        ? "input-error"
                        : ""
                    }
                  />

                  {errors.phone && (
                    <small className="field-error">
                      {errors.phone}
                    </small>
                  )}

                </div>


                {/* Subject */}

                <div className="form-group">

                  <label htmlFor="subject">
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What can we help you with?"
                    value={formData.subject}
                    onChange={handleChange}
                    className={
                      errors.subject
                        ? "input-error"
                        : ""
                    }
                  />

                  {errors.subject && (
                    <small className="field-error">
                      {errors.subject}
                    </small>
                  )}

                </div>


                {/* Property Type */}

                <div className="form-group">

                  <label htmlFor="propertyType">
                    Property Type
                  </label>

                  <select
                    id="propertyType"
                    name="propertyType"
                    value={
                      formData.propertyType
                    }
                    onChange={handleChange}
                    className={
                      errors.propertyType
                        ? "input-error"
                        : ""
                    }
                  >

                    <option value="">
                      Select property type
                    </option>

                    <option value="house">
                      House
                    </option>

                    <option value="apartment">
                      Apartment
                    </option>

                    <option value="villa">
                      Villa
                    </option>

                    <option value="land">
                      Land
                    </option>

                    <option value="commercial">
                      Commercial Property
                    </option>

                    <option value="office">
                      Office Space
                    </option>

                    <option value="other">
                      Other
                    </option>

                  </select>

                  {errors.propertyType && (
                    <small className="field-error">
                      {errors.propertyType}
                    </small>
                  )}

                </div>


                {/* Message */}

                <div className="form-group full-width">

                  <label htmlFor="message">
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Tell us about the property you're looking for..."
                    value={formData.message}
                    onChange={handleChange}
                    className={
                      errors.message
                        ? "input-error"
                        : ""
                    }
                  />

                  {errors.message && (
                    <small className="field-error">
                      {errors.message}
                    </small>
                  )}

                </div>


                {/* Submit */}

                <div className="form-submit full-width">

                  <button
                    type="submit"
                    className="primary-btn contact-submit-btn"
                  >
                    Send Message
                    <FaPaperPlane />
                  </button>

                </div>

              </form>

            </div>


            {/* Image / visual */}

            <aside className="contact-visual">

              <div className="contact-image">

                <div className="image-placeholder">
                  <img src={contactus} alt="a pic of a happly client of ours" />
                </div>

              </div>


              <div className="contact-visual-content">

                <span className="section-label">
                  Your Property Partner
                </span>

                <h3>
                  Let's Find the Right
                  Opportunity Together
                </h3>

                <p>
                  From your first inquiry to the
                  moment you find the right property,
                  our team is here to make the process
                  easier.
                </p>

              </div>

            </aside>

          </div>

        </div>

      </section>


      {/* ==================================================
          SOCIAL MEDIA
      ================================================== */}

      <section className="social-section">

        <div className="contact-container">

          <div className="social-content">

            <span className="section-label">
              Stay Connected
            </span>

            <h2>
              Follow Prime Estates
            </h2>

            <p>
              Follow us on social media for new
              property listings, market updates,
              property tips, and company news.
            </p>


            <div className="social-links">

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          OFFICE LOCATION
      ================================================== */}

      <section className="office-section">

        <div className="contact-container">

          <div className="office-grid">

            <div className="office-content">

              <span className="section-label">
                Our Office
              </span>

              <h2>
                Come and Visit Us
              </h2>

              <p>
                If you would prefer to discuss your
                property requirements in person, our
                team would be happy to welcome you
                to our office.
              </p>


              <div className="office-details">

                <div>
                  <FaMapMarkerAlt />

                  <span>
                    Prime Estates Office,
                    Abuja, Nigeria
                  </span>
                </div>


                <div>
                  <FaPhone />

                  <span>
                    +234 800 000 0000
                  </span>
                </div>


                <div>
                  <FaEnvelope />

                  <span>
                    hello@primeestates.com
                  </span>
                </div>


                <div>
                  <FaClock />

                  <span>
                    Monday - Friday:
                    8:00 AM - 5:00 PM
                  </span>
                </div>

              </div>

            </div>


            {/* Map placeholder */}

            <div className="map-wrapper">

              <div className="map-placeholder">

                <FaMapMarkerAlt />

                <strong>
                  "image placement here"
                </strong>

                <span>
                  Map / location embed
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          FAQ
      ================================================== */}

      <section className="faq-section">

        <div className="contact-container">

          <div className="section-heading centered">

            <span className="section-label">
              Frequently Asked Questions
            </span>

            <h2>
              Common Questions
            </h2>

            <p>
              Here are answers to some common
              questions about contacting our team.
            </p>

          </div>


          <div className="faq-list">

            <details className="faq-item">

              <summary>
                How quickly will you respond to my inquiry?
              </summary>

              <p>
                Our team aims to respond to inquiries
                as quickly as possible during business
                hours. Response times may vary
                depending on the nature of your request.
              </p>

            </details>


            <details className="faq-item">

              <summary>
                Can I schedule a property viewing?
              </summary>

              <p>
                Yes. Contact our team with the property
                you're interested in and your preferred
                viewing time. Our team will assist with
                scheduling.
              </p>

            </details>


            <details className="faq-item">

              <summary>
                Do you help with property investments?
              </summary>

              <p>
                Yes. Our team can provide general
                property information and help you
                explore available investment
                opportunities.
              </p>

            </details>


            <details className="faq-item">

              <summary>
                Can I contact you about a property that isn't listed?
              </summary>

              <p>
                Absolutely. Send us your requirements
                through the contact form and we'll
                review your request and discuss
                potential options with you.
              </p>

            </details>

          </div>

        </div>

      </section>


      {/* ==================================================
          FINAL CTA
      ================================================== */}

      <section className="contact-cta">

        <div className="contact-container">

          <div className="contact-cta-content">

            <h2>
              Have a Property Question?
            </h2>

            <p>
              Our team is ready to help you take
              the next step.
            </p>

            <a
              href="tel:+2348000000000"
              className="outline-light-btn"
            >
              <FaPhone />
              Call Us Now
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;