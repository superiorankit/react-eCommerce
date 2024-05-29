import React from 'react';
import './partnerCard.css';


const PartnerCard = ({link,name,logo}) => {
  return (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={logo} alt={`${name} logo`} className="partnerLogo" />
          </a>
  );
};

export default PartnerCard;
