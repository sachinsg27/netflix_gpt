import Header from "./Header";

const Login = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="absolute top-4 left-4">
        <Header />
      </div>
      <div className="w-screen h-screen overflow-hidden">
        <img
          className="w-full h-full"
          alt="bg-image"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg"
        ></img>
      </div>
    </div>
  );
};

export default Login;
