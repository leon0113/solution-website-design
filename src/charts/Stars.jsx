import React, { useState } from 'react';

const StarRating = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
    // Pass the selected rating to the parent component
    if (onRatingChange) {
      onRatingChange(selectedRating);
    }
  };

  const getStarIcon = (filled) => {
    return filled ? '★' : '☆';
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const filled = i <= rating;
      stars.push(
        <span
          key={i}
          className={filled ? 'filled' : 'empty'}
          onClick={() => handleStarClick(i)}
        >
          {getStarIcon(filled)}
        </span>
      );
    }
    return stars;
  };

  return <div className="star-rating ps-3" style={{color:'#FFC935',fontSize:'23px',cursor:'pointer'}}>{renderStars()}</div>;
};

export default StarRating;
