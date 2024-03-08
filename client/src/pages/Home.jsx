import React from "react";
import { LiaThumbtackSolid } from "react-icons/lia";

export default function Home() {
  return (
    <div className="max-w-4xl p-3 mx-auto flex flex-col sm:flex-row justify-center gap-4 mt-5">
      <div className="bg-yellow-50 p-3 shadow-md flex-1">
        <LiaThumbtackSolid className="mx-auto text-2xl font-bold" />
        <h1 className="font-bold text-sm sm:text-3xl">Mingyang Li</h1>
        <p className="text-xl font-serif mt-4">
          Welcome!!! I'm a Front-end developer from Toronto, Canada, with a deep
          expertise in crafting dynamic and responsive web applications using
          React and Node.js.
        </p>
        <ul className="text-xl p-3 mt-3 flex flex-col gap-3">
          <li>🎓 UofT Computer Science, 2023</li>
          <li>💻 With a focus on Web development</li>
          <li>💼 Seeking for Jobs</li>
        </ul>
        <p className="text-xl font-serif mt-4">
          Believing deeply in the power of technology and design, I view them as
          the bedrock of any successful digital platform. Specializing in React
          and Node.js, I aim to blend technical skill with aesthetic insight to
          develop web applications that are not only functional but also
          engaging. My goal is to tackle challenges with innovative solutions,
          enhancing user experience and contributing to business success.
        </p>
      </div>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/mern-personalweb.appspot.com/o/IMG_1201.jpg?alt=media&token=73d11489-5981-40bf-85b1-20fdd05258cb"
        alt="avator"
        className="flex-1 sm:h-[320px] w-[320px] object-cover hover:scale-105 transition-scale duration-300"
      />
    </div>
  );
}
