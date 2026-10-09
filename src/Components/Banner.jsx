import React, { useEffect, useState } from "react";
import BannerImage from "./img/banner.jpg";

const Banner = () => {
  const initialTime = 5 * 60 * 60;

  const [timeLeft, setTimeLeft] = useState(() => {
    const storedTime = localStorage.getItem("remainingTime");
    return storedTime && parseInt(storedTime, 10) > 0
      ? parseInt(storedTime, 10)
      : initialTime;
  });

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          localStorage.setItem("remainingTime", 0);
          return 0;
        }
        const remainingTime = prev - 1;
        localStorage.setItem("remainingTime", remainingTime);
        return remainingTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return {
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  };
  const { hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <section
      className="min-h-[55vh] sm:h-[60vh] mt-[80px] sm:mt-[90px] lg:mt-[14vh] bg-cover bg-center sm:bg-top max-sm:bg-none max-sm:bg-zinc-100"
      style={{
        backgroundImage:
          window.innerWidth < 640 ? "none" : `url(${BannerImage})`,
      }}
    >
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8 lg:px-12 h-full flex flex-col justify-center gap-2 sm:gap-3">
        <h1 className="text-red-500 text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase font-bold tracking-tight">Big Sale!</h1>
        <h2 className="text-zinc-800 text-lg sm:text-2xl md:text-3xl">Up to 50% OFF - Limited Time Only!</h2>
        <div className="text-3xl sm:text-5xl md:text-6xl font-bold text-zinc-800 flex gap-x-1 sm:gap-x-3 mt-3 sm:mt-5">
          <span className="text-white bg-zinc-800 p-2 sm:p-3">{hours}</span>:
          <span className="text-white bg-zinc-800 p-2 sm:p-3">{minutes}</span>:
          <span className="text-white bg-zinc-800 p-2 sm:p-3">{seconds}</span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
