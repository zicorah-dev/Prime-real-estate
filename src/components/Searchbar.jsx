import { FaSearch, FaUndo } from "react-icons/fa";

function SearchBar({
  searchTerm,
  setSearchTerm,
  propertyType,
  setPropertyType,
  location,
  setLocation,
  priceRange,
  setPriceRange,
  resetFilters,
}) {
  return (
    <section className="search-section">

      <div className="search-container">

        {/* Keyword Search */}

        <div className="search-group">

          <label>Search Property</label>

          <div className="search-input">

            <FaSearch className="search-icon" />

            <input
              type="text"
              placeholder="Search by property name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

          </div>

        </div>

        {/* Property Type */}

        <div className="search-group">

          <label>Property Type</label>

          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="">All Types</option>
            <option value="Apartment">Apartment</option>
            <option value="Duplex">Duplex</option>
            <option value="Villa">Villa</option>
            <option value="Mansion">Mansion</option>
            <option value="Terrace">Terrace</option>
            <option value="Bungalow">Bungalow</option>
            <option value="Commercial">Commercial</option>
            <option value="Office">Office</option>
            <option value="Land">Land</option>
          </select>

        </div>

        {/* Location */}

        <div className="search-group">

          <label>Location</label>

          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">All Locations</option>

            <option value="Abuja">
              Abuja
            </option>

            <option value="Lagos">
              Lagos
            </option>

            <option value="Porthacourt">
             Porthacourt
            </option>

          </select>

        </div>

        {/* Price */}

        <div className="search-group">

          <label>Maximum Price</label>

          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="">No Limit</option>

            <option value="50000000">
              Under ₦50 Million
            </option>

            <option value="100000000">
              Under ₦100 Million
            </option>

            <option value="200000000">
              Under ₦200 Million
            </option>

            <option value="500000000">
              Under ₦500 Million
            </option>

            <option value="1000000000">
              Under ₦1 Billion
            </option>

          </select>

        </div>

        {/* Reset */}

        <div className="search-button-area">

          <button
            className="reset-btn"
            onClick={resetFilters}
          >
            <FaUndo />

            Reset Filters

          </button>

        </div>

      </div>

    </section>
  );
}

export default SearchBar;