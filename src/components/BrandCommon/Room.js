import React from "react";
import Slider from "react-slick";

export default function Room() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<>
			<div className="room">
				<div className="container">
					<div className="main-title text-center">Rooms</div>
					<div className="row">
						<div className="col-md-3 room-detail">
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Consectetur culpa labore minus libero mollitia et esse,
								molestiae laboriosam? Recusandae suscipit dicta unde alias earum
								illum blanditiis, dolorem enim maxime voluptas!
							</p>
						</div>
						<div className="col-md-9">
							<div className="room-slider-wrapper">
								<Slider {...settings}>
									<div>
										<div className="room-wrapper">
											<div className="img-container">
												<img
													src={require("../../assets/images/banner5.png")}
													className="img-fluid"
													alt=""
												/>
											</div>
											<div className="info-wrap">
												<div className="room-name">
													<div className="title">King Size Poster</div>
													<div className="logo-container">
														<img
															src={require("../../assets/images/logo1.png")}
															className="img-fluid"
															alt=""
														/>
													</div>
												</div>
												<div className="description">
													Lorem ipsum dolor sit, amet consectetur adipisicing
													elit. Aliquam asperiores dolores similique fuga culpa
													ipsam, perspiciatis totam eum
												</div>
												<div className="price-wrap">
													<span>Price</span>
													<span className="price">$200</span>
												</div>
												<div className="book-btn">
													<a href="">Book</a>
												</div>
											</div>
										</div>
									</div>
									<div>
										<div className="room-wrapper">
											<div className="img-container">
												<img
													src={require("../../assets/images/banner5.png")}
													className="img-fluid"
													alt=""
												/>
											</div>
											<div className="info-wrap">
												<div className="room-name">
													<div className="title">King Size Poster</div>
													<div className="logo-container">
														<img
															src={require("../../assets/images/logo1.png")}
															className="img-fluid"
															alt=""
														/>
													</div>
												</div>
												<div className="description">
													Lorem ipsum dolor sit, amet consectetur adipisicing
													elit. Aliquam asperiores dolores similique fuga culpa
													ipsam, perspiciatis totam eum
												</div>
												<div className="price-wrap">
													<span>Price</span>
													<span className="price">$200</span>
												</div>
												<div className="book-btn">
													<a href="">Book</a>
												</div>
											</div>
										</div>
									</div>
									<div>
										<div className="room-wrapper">
											<div className="img-container">
												<img
													src={require("../../assets/images/banner5.png")}
													className="img-fluid"
													alt=""
												/>
											</div>
											<div className="info-wrap">
												<div className="room-name">
													<div className="title">King Size Poster</div>
													<div className="logo-container">
														<img
															src={require("../../assets/images/logo1.png")}
															className="img-fluid"
															alt=""
														/>
													</div>
												</div>
												<div className="description">
													Lorem ipsum dolor sit, amet consectetur adipisicing
													elit. Aliquam asperiores dolores similique fuga culpa
													ipsam, perspiciatis totam eum
												</div>
												<div className="price-wrap">
													<span>Price</span>
													<span className="price">$200</span>
												</div>
												<div className="book-btn">
													<a href="">Book</a>
												</div>
											</div>
										</div>
									</div>
									<div>
										<div className="room-wrapper">
											<div className="img-container">
												<img
													src={require("../../assets/images/banner5.png")}
													className="img-fluid"
													alt=""
												/>
											</div>
											<div className="info-wrap">
												<div className="room-name">
													<div className="title">King Size Poster</div>
													<div className="logo-container">
														<img
															src={require("../../assets/images/logo1.png")}
															className="img-fluid"
															alt=""
														/>
													</div>
												</div>
												<div className="description">
													Lorem ipsum dolor sit, amet consectetur adipisicing
													elit. Aliquam asperiores dolores similique fuga culpa
													ipsam, perspiciatis totam eum
												</div>
												<div className="price-wrap">
													<span>Price</span>
													<span className="price">$200</span>
												</div>
												<div className="book-btn">
													<a href="">Book</a>
												</div>
											</div>
										</div>
									</div>
								</Slider>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
