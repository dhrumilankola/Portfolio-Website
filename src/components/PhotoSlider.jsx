import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PhotoSlider = ({ assets }) => {
  const [[pageIndex, direction], setPageIndex] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPageIndex(([prevIndex, _]) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) {
        newIndex = assets.length - 1; // Go to the last image if we've reached the beginning
      } else if (newIndex >= assets.length) {
        newIndex = 0; // Go to the first image if we've reached the end
      }
      return [newIndex, newDirection];
    });
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className="slider-container">
      <motion.img
        key={pageIndex}
        src={assets[pageIndex]} // Directly use pageIndex for the current image
        custom={direction}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 }
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);
          if (swipe < -swipeConfidenceThreshold) {
            paginate(1);
          } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1);
          }
        }}
        onError={(e) => { 
          e.target.style.display = 'none'; // Hide the image if there's an error loading it
          console.error('Error loading image:', e.target.src);
        }}
      />
      <div className="next" onClick={() => paginate(1)}>&#10095;</div>
      <div className="prev" onClick={() => paginate(-1)}>&#10094;</div>
    </div>
  );
};

export default PhotoSlider;
