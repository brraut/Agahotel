import React from "react";
import BrandBanner from "../../components/BrandCommon/BrandBanner";
import Welcome from "../../components/AgaHotel/Welcome";
import WeProvide from "../../components/AgaHotel/WeProvide";
import BrandContact from "../../components/brand/BrandContact";
import Experience from "../../components/BrandCommon/Experience";
import Room from "../../components/BrandCommon/Room";

export default function HotelBluBrand() {
  return (
    <>
      <BrandBanner />
      <div className="aga-brand">
        <Welcome />
        <Experience />
        <WeProvide />
        <Room />
        <BrandContact />
      </div>
    </>
  );
}
