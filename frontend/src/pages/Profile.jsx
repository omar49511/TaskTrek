import Banner from "../components/Banner/Banner";
import casco from "../assets/Season_2019_-_Bronze_1.webp";
import plata from "../assets/Season_2019_-_Silver_1.webp";
import oro from "../assets/Season_2019_-_Gold_1.webp";
import platino from "../assets/Season_2019_-_Platinum_1.webp";
import diamond from "../assets/Season_2019_-_Diamond_1.webp";

import trim from "../assets/path1178.png";
import trimSilver from "../assets/silver.png";
import trimGold from "../assets/gold.png";
import trimPlatino from "../assets/platinum.png";
import trimDiamond from "../assets/diamond.png";
const Profile = () => {
  return (
    <div className="bg-gray-100">
      <div className="h-64 w-full relative overflow-hidden">
        <img
          src="https://i.pinimg.com/originals/10/d8/c7/10d8c7ccc6a62686329beae69fdc4785.jpg"
          alt="Portada"
          className="w-full h-full object-cover absolute top-0 left-0 transform scale-110 -translate-y-4"
        />
        <div className="absolute bottom-0 left-0 p-4 flex items-center">
          <img
            src="https://i.pinimg.com/564x/3f/70/19/3f70191ee929ee63fb768e1f2e0e7731.jpg"
            alt="Avatar"
            className="w-32 h-32 rounded-full border-4 border-white"
          />
          <p className="text-white font-semibold text-xl ml-4">
            Nombre de Usuario
          </p>
        </div>
      </div>
      <div className="py-8 px-48">
        <h2 className="text-2xl font-semibold mb-4">Logros</h2>
        <hr />
        <div className="flex  gap-4">
          <div>
            <Banner
              league="Bronze"
              title="Bronce League"
              imageSrc={casco}
              additionalImageSrc={trim}
            />
          </div>
          <div>
            <Banner
              league="Plata"
              title="Plata League"
              imageSrc={plata}
              additionalImageSrc={trimSilver}
            />
          </div>
          <div>
            <Banner
              league="Oro"
              title="Oro League"
              imageSrc={oro}
              additionalImageSrc={trimGold}
            />
          </div>
          <div>
            <Banner
              league="Platino"
              title="Platino League"
              imageSrc={platino}
              additionalImageSrc={trimPlatino}
            />
          </div>
          <div>
            <Banner
              league="Diamante"
              title="Diamante League"
              imageSrc={diamond}
              additionalImageSrc={trimDiamond}
            />
          </div>
        </div>

        <div className="space-y-4 w-1/3">
          {/* Tarjeta de logro 1 */}

          <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
            <img
              src="https://vignette4.wikia.nocookie.net/geometry-dash/images/7/74/ICON_08.png/revision/latest/scale-to-width-down/40?cb=20160107210353&path-prefix=es"
              alt="Logro"
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-grow ml-4">
              <h3 className="font-semibold">Título del Logro 1</h3>
              <p className="text-gray-600">Breve descripción del logro 1</p>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-cyan-500 transform rotate-45">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white -rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* Tarjeta de logro 2 */}
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
            <img
              src="https://vignette4.wikia.nocookie.net/geometry-dash/images/d/db/ICON_07.png/revision/latest/scale-to-width-down/40?cb=20160107210207&path-prefix=es"
              alt="Logro"
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-grow ml-4">
              <h3 className="font-semibold">Título del Logro 1</h3>
              <p className="text-gray-600">Breve descripción del logro 1</p>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-cyan-500 transform rotate-45">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white -rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* Tarjeta de logro 3 */}
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
            <img
              src="https://vignette1.wikia.nocookie.net/geometry-dash/images/5/52/Cube99.png/revision/latest/scale-to-width-down/45?cb=20170205183701&path-prefix=es"
              alt="Logro"
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-grow ml-4">
              <h3 className="font-semibold">Título del Logro 1</h3>
              <p className="text-gray-600">Breve descripción del logro 1</p>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-cyan-500  transform rotate-45">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white -rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
