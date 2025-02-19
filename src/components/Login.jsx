import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="bg-image"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg"
        ></img>
      </div>
      <form className="px-10 text-white absolute bg-black my-36 mx-auto right-0 left-0 w-4/12 text-white">
        <h1 className="font-bold text-3xl py-4 ">Sign In</h1>
        <input
          type="text"
          placeholder="Email or Mobile Number "
          className="w-full p-4 my-6 border border-gray-600 rounded-lg"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 my-6 p-4 border border-gray-600 rounded-lg"
        ></input>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
