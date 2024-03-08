import React from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import { useEffect, useState } from "react";
//icon
import { FaCode } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

export default function Listing() {
  SwiperCore.use([Navigation]);
  const params = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchListing = async () => {
      setLoading(true);
      const res = await fetch(`/api/listing/get/${params.listingId}`);
      const data = await res.json();
      setListing(data);
      setLoading(false);
    };
    fetchListing();
  }, [params.listingId]);

  const renderDescriptionAndFeatures = (text) => {
    // Splitting the text at "Features:" to separate preamble from features
    const [preamble, featuresText] = text.split("Features:");
    // Splitting the featuresText by the pattern "(number)" and capturing the text
    const features = featuresText.split(/(?=\(\d+\))/).filter(Boolean);

    return (
      <>
        <p className="my-2">{preamble}Features:</p>
        <ul>
          {features.map((feature, index) => (
            <li key={index} className="my-2">
              {feature.trim()}
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <main>
      {loading && <p className="text-center my-7 text-2xl">Loading...</p>}
      {listing && !loading && (
        <div>
          <Swiper navigation>
            {listing.imageUrls.map((url) => (
              <SwiperSlide key={url}>
                <div
                  className="h-[550px]"
                  style={{
                    background: `url(${url}) center no-repeat`,
                    backgroundSize: "contain",
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      {listing && (
        <div className="flex flex-col bg-white max-w-5xl mx-auto p-3 my-7">
          <p className="text-2xl font-semibold flex flex-row items-center">
            {listing.name} - <MdDateRange /> {listing.startDate} {" - "}{" "}
            {listing.endDate}
          </p>
          <p className="flex items-center mt-6 gap-2 text-slate-600  text-sm">
            <FaCode className="text-blue-400" />
            {listing.tools}
          </p>

          <p className="flex items-center mt-6 gap-2 text-slate-600  text-sm">
            <a
              href={listing.projectUrl}
              target="_blank"
              className="hover:text-blue-400 hover:shadow-lg hover:scale-105 transition-scale duration-300 flex items-center gap-2"
            >
              <FaLink className="text-blue-400" />
              {listing.projectUrl}
            </a>
          </p>

          <p className="flex items-center mt-6 gap-2 text-slate-600 text-sm">
            <a
              href={listing.githubUrl}
              target="_blank"
              className="hover:text-blue-400 hover:shadow-lg hover:scale-105  duration-300 flex items-center gap-2"
            >
              <FaGithub className="text-blue-400" />
              {listing.githubUrl}
            </a>
          </p>

          <p className="text-slate-800 mt-6 gap-2">
            <span className="font-semibold text-black">Description - </span>
            {/* {listing.description} */}
            <div className="p-3">
              <ul>{renderDescriptionAndFeatures(listing.description)}</ul>
            </div>
          </p>
        </div>
      )}
    </main>
  );
}
