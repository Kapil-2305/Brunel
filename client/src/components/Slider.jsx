import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const texts = ["Enhance fortune 50 company's insights teams research capabilities", "Augment the research capabilities of a Fortune 50 corporation's", "Strengthen the research capacities of the insights teams within a Fortune 50"];
  const totalSlides = texts.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % totalSlides);
        setFadeOut(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, totalSlides]);

  const handleDotClick = (index) => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setFadeOut(false);
    }, 500);
  };

  return (
    <div className="flex flex-col items-center justify-center h-64">
      <div className="relative w-full h-44 overflow-hidden">
        {texts.map((text, index) => (
          <div
            key={index}
            className={`font-semibold absolute top-0 left-0 w-full h-full text-2xl transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : fadeOut ? 'opacity-0' : 'opacity-0'
            }`}
          >
            {text}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 -ml-40">
        {texts.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 mx-1 rounded-full cursor-pointer transition-colors duration-300 ${
              index === currentIndex ? 'bg-green-500' : 'bg-gray-400'
            }`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;