import React from "react";
import search from "../../../public/icons/magnifying-glass.png";
import Image from "next/image";

export default function Header() {
  return (
    <div>
      <div className="container">
        <Image src={search} className="w-24 h-24" alt=""></Image>
        <input
          type="text"
          placeholder=" Search Here..."
          className="search-bar"
        />
      </div>
    </div>
  );
}
