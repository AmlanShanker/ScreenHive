import React from "react";
import { assets } from "../assets/assets";
import { ArrowRight, CalendarIcon, ClockIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-start pt-40 md:pt-48 px-6 md:px-16 lg:px-36 bg-[url('/backgroundImage.webp')] bg-cover bg-center bg-no-repeat">
      <img
        src={assets.marvelLogo}
        alt=""
        className="h-10 md:h-12 w-auto mb-4"
      />

      <h1 className="text-5xl md:text-[70px] md:leading-19.5 font-semibold max-w-130">
        Spider-Man: <br />
        Brand New Day
      </h1>

      <div className="flex items-center gap-4 text-gray-300">
        <span>Action | Adventure | Sci-fi</span>

        <div className="flex items-center gap-1">
          <CalendarIcon className="w-4 h-4" />
          2026
        </div>

        <div className="flex items-center gap-1">
          <ClockIcon className="w-4 h-4" />
          2h 25m
        </div>
      </div>
      <p className="max-w-md text-gray-300 mt-4">
        {" "}
        It's a BRAND NEW DAY for Peter Parker. Fighting crime full-time as
        Spider-Man in a world that doesn’t remember him—and the pressure of
        seeing his old friends move on without him—sparks a change in Peter he
        may not have the power to control. But that transformation might also be
        the only thing that can stop a shocking new threat to the city and those
        he loves - a powerful villain no one can even see. The world may have
        forgotten Peter Parker, but he hasn’t forgotten them.{" "}
      </p>
      <button
        onClick={() => navigate("/movies")}
        className="flex items-center mt-2 gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer"
      >
        Explore Movies
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default HeroSection;
