import React from "react";
import Banner from "../components/Banner";
import BrandContact from "../components/brand/BrandContact";
import BrandExperience from "../components/brand/BrandExperience";
import BrandGallery from "../components/brand/BrandGallery";
import BrandRoom from "../components/brand/BrandRoom";
import BrandWelcome from "../components/brand/BrandWelcome";

export default function Brand() {
	return (
		<>
			<Banner />
			<div className="brand-page">
				<BrandGallery />
				<BrandWelcome />
				<BrandExperience />
                <BrandRoom />
                
            </div>
            <BrandContact />
		</>
	);
}
