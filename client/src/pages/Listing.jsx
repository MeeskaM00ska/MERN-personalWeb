import React from "react";
import { useParams } from "react-router-dom";

export default function Listing() {
  const params = useParams();

  return <div>Listing with id: {params.listingId}</div>;
}
