/* eslint-disable react/prop-types */
const Banner = ({ league, title, imageSrc, additionalImageSrc }) => {
  return (
    <div className="bg-[#121212] shadow-lg w-64 h-80">
      <div className="h-40 flex items-center justify-center">
        <div className="w-32 h-32 flex items-center justify-center">
          <img
            src={imageSrc}
            alt={`${league} League Emblem`}
            className="w-full h-full object-fit"
          />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-white text-lg font-semibold mb-2 text-center">
          {title}
        </h3>
        <p className="text-gray-400 text-center">
          Congratulations on reaching this league!
        </p>
      </div>
      <div className="relative w-full h-80 mt-[-70px] z-50">
        <img
          src={additionalImageSrc}
          alt="Additional Image"
          className="w-64 h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Banner;
