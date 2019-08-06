/* eslint-disable react/no-typos */
import React, { Component } from 'react';
import './house.css';
import './inquiry';
import emailIcon from './Email.png';
import Inquiry from './inquiry';
import PropTypes from 'prop-types';

class House extends Component {
  state = {
    isInquiryShown: false
  }

  inquiryToggle = (e) => {
    e.preventDefault();

    this.setState( {
      isInquiryShown: !this.state.isInquiryShown
    });
  }

  showInquiry = () => {
    if (this.state.isInquiryShown)
      return (
        <Inquiry />
      );
    return null;
  }

  render() {
    const house = this.props.house;
    const inquiry = this.state.isInquiryShown ? <Inquiry house={house} /> : null;
    return (
      <div>
        <div className="row mt-2">
          <h5 className="col-md-12">{house.country}</h5>
        </div>
        <div className="row">
          <h3 className="col-md-12">{house.address}</h3>
        </div>
        <div className="row">
          <div className="col-md-7">
            <img src={`https://images.pexels.com/photos/${house.photo}/pexels-photo-${house.photo}.jpeg?w=600&h=400&auto=compress&cs=tinysrgb`} alt="House"/>
          </div>
          <div className="col-md-5">
            <p className="price">${house.price}</p>
            <p>{house.description}</p>
            <img className="emailIcon" src={emailIcon} alt="email" onClick={this.inquiryToggle}/>
            { inquiry }
          </div>
        </div>
      </div>
    );
  }
}

House.propTypes = {
  house: PropTypes.object.isRequired
};

export default House;