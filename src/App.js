import React, { Component } from 'react';
import AppPresentation from './components/app-presentation/app-presentation';

class App extends Component {
  state = {};

  componentDidMount() {
    this.fetchHouses();
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true});
    console.log(error, errorInfo);
  }

  fetchHouses = () => {
    fetch('/houses.json')
    .then(rsp => rsp.json())
    .then(allHouses => {
      this.allHouses = allHouses;
      this.setState( { allHouses });
      this.determineFeaturedHouse();
      this.determineUniqueContries();
    });
  };

  determineFeaturedHouse = () => {
    if (this.allHouses) {
      const randomIndex = Math.floor(Math.random() * this.allHouses.length);
      const featuredHouse = this.allHouses[randomIndex];
      this.setState({ featuredHouse });
    }
  };

  determineUniqueContries = () => {
    const countries = this.allHouses
      ? Array.from(new Set(this.allHouses.map(h => h.country)))
      : [];
    countries.unshift(null);
    this.setState({ countries });
  };

  filterHouses = (country) => {
    this.setState({ activeHouse: null });

    const filteredHouses = this.allHouses.filter(h => h.country === country);
    this.setState({ filteredHouses });
    this.setState({ country });
  };

  setActiveHouse = (house) =>
  {
    this.setState({ activeHouse: house});
    this.setState({ country: null});
  }

  render() {
    if (this.state.hasError) {
      return (<h1>Woops. Error in components!</h1>);
    }
    return (
      <AppPresentation country={this.state.country}
        filteredHouses={this.state.filteredHouses}
        featuredHouse={this.state.featuredHouse}
        countries={this.state.countries}
        activeHouse={this.state.activeHouse}
        filterHouses={this.filterHouses}
        setActiveHouse={this.setActiveHouse}
      />
    )
  }
}

export default App;