import React from 'react';
import './Card.css'; // Make sure Card.css is linked

const Card = ({ header, title, content, footer }) => {
  return (
    <div className="card">
      <header className="card-header">{header}</header>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      <footer className="card-footer">{footer}</footer>
    </div>
  );
};

export default Card;
