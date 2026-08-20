import { useMemo, useState } from "react";

import SearchBar from "../components/SearchBar";
import PropertyCard from "../components/PropertyCard";

import properties from "../data/properties";


function Properties(){

 /* ============================================
       FILTER STATES
    ============================================ */

    const [searchTerm, setSearchTerm] = useState("");

    const [propertyType, setPropertyType] = useState("");

    const [location, setLocation] = useState("");

    const [priceRange, setPriceRange] = useState("");


    /* ============================================
       RESET FILTERS
    ============================================ */

    const resetFilters = () => {

        setSearchTerm("");

        setPropertyType("");

        setLocation("");

        setPriceRange("");

    };


    /* ============================================
       FILTER PROPERTIES
    ============================================ */

    const filteredProperties = useMemo(() => {

        return properties.filter((property) => {

            const keywordMatch =
                property.title
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||

                property.location
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());

            const typeMatch =
                propertyType === "" ||
                property.type === propertyType;

            const locationMatch =
                location === "" ||
                property.location
                    .toLowerCase()
                    .includes(location.toLowerCase());

            const priceMatch =
                priceRange === "" ||
                property.price <= Number(priceRange);

            return (
                keywordMatch &&
                typeMatch &&
                locationMatch &&
                priceMatch
            );

        });

    }, [
        searchTerm,
        propertyType,
        location,
        priceRange
    ]);


    /* ============================================
       PAGE
    ============================================ */

    return (

        <main className="properties-page">

            {/* Hero */}

            <section className="properties-hero">

                <div className="properties-hero-content">

                    <h1>
                        Explore Our Property Listings
                    </h1>

                    <p>
                        Browse apartments, duplexes,
                        villas, commercial buildings,
                        office spaces and investment
                        opportunities across Nigeria.
                    </p>

                </div>

            </section>

            {/* Search */}

            <SearchBar

                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}

                propertyType={propertyType}
                setPropertyType={setPropertyType}

                location={location}
                setLocation={setLocation}

                priceRange={priceRange}
                setPriceRange={setPriceRange}

                resetFilters={resetFilters}

            />

            {/* Statistics */}

            <section className="property-stats">

                <div className="stats-card">

                    <h3>Total Listings</h3>

                    <h2>{properties.length}</h2>

                </div>

                <div className="stats-card">

                    <h3>Matching Results</h3>

                    <h2>{filteredProperties.length}</h2>

                </div>

                <div className="stats-card">

                    <h3>Property Types</h3>

                    <h2>9</h2>

                </div>

            </section>

            {/* Property Grid Starts Here */}

            <section className="properties-list-section">

                <div className="properties-container">

                {filteredProperties.length > 0 ? (

                        <div className="properties-grid">

                            {filteredProperties.map((property) => (

                                <PropertyCard
                                    key={property.id}
                                    property={property}
                                />

                            ))}

                        </div>

                    ) : (

                        <div className="no-properties">

                            <h2>No Properties Found</h2>

                            <p>
                                Sorry, no properties match your
                                current search criteria.
                            </p>

                            <button
                                className="primary-btn"
                                onClick={resetFilters}
                            >
                                Reset Filters
                            </button>

                        </div>

                    )}

                </div>

            </section>

        </main>

    );

}

export default Properties;