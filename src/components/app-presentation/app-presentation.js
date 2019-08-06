import React from 'react';
import Header from '../header/header';
import FeaturedHouse from '../featured-house/featured-house';
import HouseFilter from '../house-filter/house-filter';
import SearchResults from '../search-results/search-results';
import House from '../house/house';

const AppPresentation = (props) => {
    let activeComponent = null;
    if (props.country) {
      activeComponent = <SearchResults country={props.country} filteredHouses={props.filteredHouses} setActiveHouse={props.setActiveHouse} />;
    }
    else if (props.activeHouse) {
      activeComponent = <House house={props.activeHouse} />
    }
    else {
      activeComponent = <FeaturedHouse house={ props.featuredHouse } />;
    }

    return (
        <div className="container">
            <Header subtitle="Global real state leader!" />
            <HouseFilter countries={ props.countries } filterHouses={ props.filterHouses }/>
            {activeComponent}
        </div>
    );
}
 
export default AppPresentation;