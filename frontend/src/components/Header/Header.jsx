function Header() {
  return (
    <header className="bg-[#2F353A] text-white">
      <div className="container mx-auto flex flex-col items-center justify-center py-4 px-6 sm:flex-row sm:justify-between sm:px-10 md:px-20 lg:px-40">
        <div className="flex items-center">
          {/* <img
            src="logo.png"
            alt="Task Trek Logo"
            className="h-8 w-auto mr-2"
          /> */}
          <h1 className="text-2xl md:text-4xl font-bold">
            Task<span className="text-cyan-500">Trek</span>
          </h1>
        </div>
        <nav className="mt-4 sm:mt-0 sm:flex sm:items-center">
          <a
            href="#"
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
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
