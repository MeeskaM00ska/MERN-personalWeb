import React from "react";
import { useEffect, useState } from "react";
import ListingItem from "../components/ListingItem";

export default function Listing() {
  const [listings, setListings] = useState(null);

  useEffect(() => {
    const fetchListing = async () => {
      const res = await fetch("/api/listing/get");
      const data = await res.json();
      setListings(data);
    };
    fetchListing();
  }, []);

  return (
    <main>
      {/* {listings && (<div>{listings.map((listing)=>(listing.name)}</div>)} */}
      {listings && (
        <div className="max-w-6xl mx-auto p-3 sm:flex flex-wrap">
          {listings.map((listing) => (
            <div className="flex-1 mt-5" key={listing._id}>
              <ListingItem key={listing._id} listing={listing} />
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
