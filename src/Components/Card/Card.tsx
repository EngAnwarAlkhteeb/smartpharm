import React from "react";

interface CardProps {
  image: string; // Path to the image
  title: string; // Title of the card
  details: string; // Description/details of the card
}

const Card: React.FC<CardProps> = ({ image, title, details }) => {
  return (
    <div
      className="card shadow-sm rounded "
      style={{
        maxWidth: "300px", // Fixed width for the card
        height: "00px", // Fixed height for the card
        margin: "auto", // Center the card
        display: "flex", // Use flexbox for layout control
        flexDirection: "column", // Stack children vertically
        justifyContent: "space-between", // Space out content
      }}
    >
      {/* Card Image */}
      <img
        src={image}
        alt={title}
        className="card-img-top"
        style={{
          height: "200px", // Fixed height for consistency
          objectFit: "cover", // Ensure the image fits nicely
        }}
      />

      {/* Card Body */}
      <div className="card-body d-flex flex-column">
        {/* Title */}
        <h5 className="card-title text-center fw-bold">{title}</h5>

        {/* Details */}
        <p className="card-text text-muted" style={{ fontSize: "14px" }}>
          {details}
        </p>
      </div>
    </div>
  );
};

export default Card;
