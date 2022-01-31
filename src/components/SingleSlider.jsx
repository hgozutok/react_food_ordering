import React, { useEffect } from "react";

export const SingleSlider = () => {
  const featuredImages = [
    "https://esha.com/wp-content/uploads/2020/09/BLOG-MENU-PLAN.jpg",
    "https://cdn.getiryemek.com/restaurants/1611557829558_1125x522.jpeg",
    "https://cdn.getiryemek.com/restaurants/1611557829558_1125x522.jpeg",
  ];
  const [currentIndex, setCurrentIndex] = React.useState(0);
  let count = 0;

  useEffect(() => {
    const handleOnNextClick = () => {
      count = (count + 1) % featuredImages.length;
      if (count === featuredImages.length) {
        setCurrentIndex(0);
        count = 0;
      } else {
        setCurrentIndex(count);
      }
    };

    const handleOnPrevClick = () => {
      const productsLength = featuredImages.length;
      count = (currentIndex + productsLength - 1) % productsLength;
      if (count === featuredImages.length) {
        setCurrentIndex(0);
        count = 0;
      } else {
        setCurrentIndex(count);
      }
    };
    const startSlider = () => {
      setInterval(() => {
        handleOnNextClick();
      }, 3000);
    };
    startSlider();
  }, []);

  return (
    <div className="max-w-screen-xl m-auto">
      <div
        className="w-full h-full
        relative select-none"
      >
        <div className="aspect-w-16 aspect-h-9">
          <img
            width={Screen.width}
            height="500px"
            src={featuredImages[currentIndex]}
          />
        </div>

        <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
          <button onClick={handleOnPrevClick}> Previous</button>
          <button onClick={handleOnNextClick}>Next</button>
        </div>
      </div>
    </div>
  );
};
