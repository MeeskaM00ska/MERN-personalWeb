import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto p-3">
      <img
        src={`https://www.caut.ca/sites/default/files/styles/responsive_large_constrict/public/news-uoft-censor-october2021.png?itok=XYX75-KX`}
      />
      <div className="flex flex-wrap items-center justify-between p-5">
        <p className="text-6xl font-bold font-mono animate-bounce">
          Let’s Connect! 📧
        </p>
        <div className="flex flex-col">
          <p className="font-serif">Send me an e-mail directly at:</p>
          <a
            href="mailto:nathannnnn.li@mail.utoronto.ca"
            className="bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95"
          >
            <button type="button">Send Message</button>
          </a>
        </div>
      </div>
    </div>
  );
}
