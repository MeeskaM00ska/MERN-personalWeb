import React from "react";
import { LiaThumbtackSolid } from "react-icons/lia";

export default function Home() {
  return (
    <div className="max-w-4xl p-3 mx-auto flex flex-col sm:flex-row justify-center gap-4 mt-5">
      <div className="bg-yellow-50 p-3 shadow-md flex-1">
        <LiaThumbtackSolid className="mx-auto text-2xl font-bold" />
        <h1 className="font-bold text-sm sm:text-3xl">Mingyang Li</h1>
        <p className="text-xl font-serif mt-4">
          Hi! I'm a Front-end developer from Toronto, Canada, with a strong
          background in React+Node web app development.
        </p>
        <ul className="text-xl p-3 mt-3 flex flex-col gap-3">
          <li>🎓 UofT Computer Science, 2023</li>
          <li>💻With a focus on Web development</li>
          <li>💼Seeking for Jobs</li>
        </ul>
        <p className="text-xl font-serif mt-4">
          I believe that design is as important as gravity. It grounds all
          aspects of an organization, including engineering, business, product,
          and customer service. I am prepared to apply my skills and experiences
          to draw attention to the real problems and provide solutions with the
          greatest impact.
        </p>
      </div>
      <img
        src="https://t3.ftcdn.net/jpg/05/65/67/30/360_F_565673067_yfJ9K9glxg4PYAVhjDZrkUjQFU046LrJ.jpg"
        alt="avator"
        className="flex-1 sm:h-[320px] w-[320px] object-cover hover:scale-105 transition-scale duration-300"
      />
    </div>
  );
}
