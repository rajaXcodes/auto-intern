import { useNavigate } from "react-router-dom";
import Navbar from "../utils/navbar";
import ButtonHero from "../utils/buttons";
import TypingEffect from "../utils/typing";
import CardTile from "../utils/animate";
import { IoIosLogIn } from "react-icons/io";
import { GiProcessor } from "react-icons/gi";
import { TbListDetails, TbNotification } from "react-icons/tb";
const HeroPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center text-white mt-10 px-4 md:px-0">
      <Navbar />

      <p className="text-5xl font-extrabold my-16 text-center leading-snug">
        Speed up your intern journey!
      </p>

      <div className="flex flex-col items-center justify-center text-white mb-6">
        <TypingEffect />
      </div>

      <ButtonHero route="/main" />

      {/* Divider */}
      <div className="w-full max-w-4xl border-t border-gray-500 my-16"></div>

      <h4 className="text-3xl font-semibold mb-4">
        AI-Powered Job Application Automation
      </h4>

      <div className="max-w-2xl text-center text-gray-400 mb-12">
        <p>
          AutoIntern automates your internship applications with AI. Just enter
          your email, password, job role, and cover letter — our AI processes
          your details and applies for jobs instantly. Once done, you get
          notified. Fast, smart, and effortless — let AutoIntern handle the
          applications while you focus on preparing for your next big
          opportunity.
        </p>
      </div>

      {/* Steps Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <CardTile Icon={IoIosLogIn} para="Sign up on Internshala" />

        <CardTile
          Icon={TbListDetails}
          para="Enter your Internshala credentials."
        />
        <CardTile
          Icon={GiProcessor}
          para="Our AI processes your details and applies to jobs."
        />
        <CardTile
          Icon={TbNotification}
          para="Get notified once applications are submitted!"
        />
      </div>

      <ButtonHero route="/main" />
    </div>
  );
};

export default HeroPage;
