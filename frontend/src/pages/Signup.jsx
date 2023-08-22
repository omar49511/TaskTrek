import logo from "../assets/logo2.png";

function Signup() {
  return (
    <section className="h-full bg-[#F5F5F5] w-full py-16 px-4">
      <div className="flex flex-col items-center justify-center">
        <img src={logo} alt="logo" className="h-20 w-auto" />

        <div className="bg-white shadow rounded lg:w-1/3 md:w-1/2 w-full p-10 mt-16">
          <p
            tabIndex="0"
            className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
          >
            Signup to TaskTrek
          </p>

          <div className="w-full flex items-center justify-between py-5">
            <hr className="w-full bg-gray-400" />
          </div>
          <div>
            <label
              id="email"
              className="text-sm font-medium leading-none text-gray-800"
            >
              Username
            </label>
            <input
              type="text"
              className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            />
          </div>
          <div className="mt-6 w-full">
            <label
              id="email"
              className="text-sm font-medium leading-none text-gray-800"
            >
              Email
            </label>
            <input
              aria-labelledby="email"
              type="email"
              className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            />
          </div>
          <div className="mt-6 w-full">
            <label
              htmlFor="pass"
              className="text-sm font-medium leading-none text-gray-800"
            >
              Password
            </label>
            <div className="relative flex items-center justify-center">
              <input
                id="pass"
                type="password"
                className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
              <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg5.svg"
                  alt="viewport"
                />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <button
              role="button"
              className="focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 font-medium rounded text-sm leading-none text-white focus:outline-none bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl py-4 w-full"
            >
              Create my account
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
