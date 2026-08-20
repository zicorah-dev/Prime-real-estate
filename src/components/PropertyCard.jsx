// import propcard from "../assets/images/luxury mansion.jpg"
import { Link } from "react-router-dom";
import {
  FaBed,
  FaBath,
  FaCar,
  FaRulerCombined,
  FaMapMarkerAlt,
  FaTag,
} from "react-icons/fa";


function PropertyCard({ property }) {
  return (
    <div className="property-card">

      {/* <img src={propcard} alt="property image"/> */}

      <div className="property-image">

        {property.image === "image placement here" ? (
          <div className="image-placeholder">
            "image placement here"
          </div>
        ) : (
          <img
            src={property.image}
            alt={property.title}
            className="property-img"
          />
        )}

        <span className="property-status">
          {property.status}
        </span>

      </div>

      {/* Property Content */}

      <div className="property-content">

        <h3>{property.title}</h3>

        <p className="property-location">
          <FaMapMarkerAlt />
          {property.location}
        </p>

        <h2 className="property-price">
          ₦{property.price.toLocaleString()}
        </h2>

        <div className="property-info">

          {property.bedrooms > 0 && (
            <span>
              <FaBed />
              {property.bedrooms} Beds
            </span>
          )}

          {property.bathrooms > 0 && (
            <span>
              <FaBath />
              {property.bathrooms} Baths
            </span>
          )}

          {property.garages > 0 && (
            <span>
              <FaCar />
              {property.garages} Garage
            </span>
          )}

          <span>
            <FaRulerCombined />
            {property.area}
          </span>

        </div>

        <p className="property-description">
          {property.description.length > 120
            ? property.description.substring(0, 120) + "..."
            : property.description}
        </p>

        <div className="property-features">

          {property.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="feature-badge"
            >
              <FaTag />
              {feature}
            </span>
          ))}

        </div>

        <Link
          to={`/property/${property.id}`}
          className="view-property-btn"
        >
          View Details
        </Link>

      </div>

    </div>
  );
}

export default PropertyCard;
