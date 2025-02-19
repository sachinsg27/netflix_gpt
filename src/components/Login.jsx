import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="bg-image"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg"
        ></img>
      </div>
      <form className="px-10 text-white absolute bg-black opacity-80 my-36 mx-auto right-0 left-0 w-4/12 ">
        <h1 className="font-bold text-3xl py-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name "
            className="w-full p-4 my-6 border border-gray-600 rounded-lg"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email or Mobile Number "
          className="w-full p-4 my-6 border border-gray-600 rounded-lg"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="w-full  my-6 p-4 border border-gray-600 rounded-lg"
        ></input>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? SignUp Now"
            : "Already a User? SignIn Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
