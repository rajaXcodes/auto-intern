import { useLocation, useNavigate } from "react-router-dom";

const FinalPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect if accessed directly
  if (!location.state?.fromMain) {
    navigate("/main");
    return null;
  }

  const internshipsApplied = 5;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      <img
        src="https://pouch.jumpshare.com/preview/4ZyM4kYwgp47fo_VRrRgOJOY-7RpCk5vFju109oNMFnWB3gGSu1ZyR3MCyrItO0agpMfhm_bL7E69exq4dvUXecN92QfgJC-qlmRdLJBUBg"
        alt="success"
        className="w-48 h-48 mb-8"
      />

      {/* Success Message */}
      <h1 className="text-6xl font-bold mb-8 animate-bounce">
        Successfully Applied!
      </h1>
      <p className="text-xl mb-4">
        You can check your applications on internshala!
        <span className="font-bold text-yellow-400">
          {internshipsApplied}
        </span>{" "}
        internships.
      </p>

      {/* Link */}
      <a
        href="https://internshala.com/student/applications?referral=header"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline hover:text-blue-300 transition-colors mb-8"
      >
        View Your Applications
      </a>

      {/* Apply Again Button */}
      <button
        onClick={() => navigate("/main")}
        className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
      >
        Apply Again
      </button>
    </div>
  );
};

export default FinalPage;
