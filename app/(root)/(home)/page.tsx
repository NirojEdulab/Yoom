import React from "react";
import moment from "moment";
import MeetingTypes from "@/components/MeetingTypes";

const Home = () => {
  const now = moment();
  const date = now.format("MMMM Do, YYYY");
  let today = new Date();

  let hours = today.getHours();
  let minutes = today.getMinutes();
  let newformat = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;

  let time = hours + ":" + minutes + " " + newformat;

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 max-lg:px-5 max-lg:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[270px] rounded-xl py-2 text-center text-base font-normal">
            Upcoming meeting at: 12:30 PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypes />
    </section>
  );
};

export default Home;
