import React from 'react';

const TeamMember = ({ photo, name, role, description }) => {
  return (
    <div className="col-md-4">
      <div className="card h-100 bg-transparent border border-info border-opacity-25">
        <img
          src={photo}
          className="card-img-top"
          alt={name}
          style={{ objectFit: 'cover', height: '300px' }}
        />
        <div className="card-body text-center">
          <h3 className="card-title h4 mb-1" style={{ color: '#4CC9F0' }}>
            {name}
          </h3>
          <h5 className="text-info mb-3">{role}</h5>
          <p className="card-text" style={{ color: '#CAF0F8' }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
