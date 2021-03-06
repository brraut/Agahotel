import React from "react";

export default function HotelFilter() {
	return (
		<>
			<div className="hotel-filter" id="filterSidenav">
				<div className="hotel-filter-wrapper">
					<a
						href="javascript:void(0)"
						className="closebtn"
						onclick="closeHotelNav()"
					>
						&times;
					</a>
					<div className="main-title">Price</div>
					<form className="price-range-slider">
						<div className="input-item">
							<input type="number" min="0" />
							<div className="sub-item">Low</div>
						</div>
						<div className="input-item">
							<input type="number" />
							<div className="sub-item">High</div>
						</div>
						<div className="input-submit">
							<button type="submit">
								<i className="fa fa-play"></i>
							</button>
						</div>
					</form>
					<div className="main-title">Amenities</div>
					<div className="amenities-wrapper">
						<ul>
							<li>
								<input type="checkbox" />
								<i className="fa fa-wheelchair"></i>
								Accessibility
							</li>
							<li>
								<input type="checkbox" />
								<i className="fa fa-plane"></i> Airport Shuttle
							</li>
							<li>
								<input type="checkbox" />
								<i className="fa fa-beer"></i> Bar
							</li>
							<li>
								<input type="checkbox" />
								<i className="fa fa-utensils"></i> Breakfast
							</li>
						</ul>
					</div>
					<div className="main-title">Hotel Brands</div>
					<div className="amenities-wrapper">
						<ul>
							<li>
								<input type="checkbox" /> Aga Red
							</li>
							<li>
								<input type="checkbox" /> Aga California
							</li>
							<li>
								<input type="checkbox" /> Aga Blue
							</li>
							<li>
								<input type="checkbox" /> Aga Collection
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
