import { Link } from "react-router-dom";
import logo from "../../assets/logo3.png";
// eslint-disable-next-line react/prop-types
function Header({ user }) {
  return (
    <header className="bg-[#2F353A] text-white">
      <div className="container mx-auto flex flex-col items-center justify-center py-4 px-6 sm:flex-row sm:justify-between sm:px-10 md:px-20 lg:px-40">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Task Trek Logo" className="h-10 w-auto mr-2" />
          </Link>
        </div>
        {user ? (
          <nav className="mt-4 sm:mt-0 sm:flex sm:items-center">
            <a
              href="#"
              className="block mt-4 sm:mt-0 sm:mr-6 text-blue-500 hover:text-blue-700"
            >
              Lista de Tareas
            </a>
            <a
              href="#"
              className="block mt-4 sm:mt-0 sm:mr-6 text-blue-500 hover:text-blue-700"
            >
              Ranking
            </a>
            <a
              href="#"
              className="block mt-4 sm:mt-0 sm:mr-6 text-blue-500 hover:text-blue-700"
            >
              Perfil
            </a>
            <button className="block mt-4 sm:mt-0 sm:ml-auto px-4 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded">
              Logout
            </button>
          </nav>
        ) : (
          <Link
            to="/login"
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded text-sm px-4 py-2 text-center sm:px-5 sm:py-2.5 flex items-center"
          >
            <svg
              className="w-3 h-3 md:w-4 md:h-4 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" />
            </svg>
            Login
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
