import React, {useEffect} from "react";
import { Link, NavLink } from "react-router-dom";
import Slider from "react-slick";
export default function Banner() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	useEffect(() => {
		var navbar = document.getElementById("searchBar");
	window.onscroll = function () {
		if (navbar != null) {
			scrollFunction();
		}
	};
	var sticky = navbar.offsetTop + 35;
	function scrollFunction() {
		if (window.pageYOffset >= sticky) {
			navbar.classList.add("sticky");
		} else {
			navbar.classList.remove("sticky");
		}
	}
	}, [])
	function openNav() {
		document.getElementById("mySidenav").style.width = "250px";
	}
	
	
	
	return (
		<>
			<div className="banner">
				<div className="navbar-wrapper">
					<div className="primary-navbar container">
						<Link to="/" className="logo-container">
							<img
								src={require("../assets/images/logo2.png")}
								className="img-fluid"
								alt=""
							/>
						</Link>
						<div className="primary-content">
							<ul className="first-navbar-wrapper">
								<li>
									<i className="fa fa-phone"></i>
									<select name="" id="">
										<option value="">+1 (415) - 555 2671 </option>
										<option value="">+1 (415) - 554 2661 </option>
									</select>
								</li>
								<li>
									<a href="">Bookings</a>
								</li>
								<li>
									<a href="">FAQ</a>
								</li>
								<li>
									<select name="" id="">
										<option value="">English</option>
										<option value="">German</option>
									</select>
								</li>
							</ul>
							<ul className="second-navbar-wrapper">
								<li>
									<NavLink to="/brand" >Brands</NavLink>
								</li>

								<li>
									<a href="">Destination</a>
								</li>
								<li>
									<a href="">Deals</a>
								</li>
								<li>
									<NavLink to="/about">About</NavLink>
								</li>
								<li>
									<a href="">Rewards</a>
								</li>
							</ul>
						</div>
						<div className="bars d-block d-md-none">
							<span onClick={openNav}>
								<i className="fa fa-bars"></i>
							</span>
						</div>
					</div>
				</div>
				<div className="slider-wrapper">
					<Slider {...settings}>
						<div className="slider">
							<div className="img-container">
								<img
									src={require("../assets/images/b.jpg")}
									className="img-fluid"
									alt=""
								/>
							</div>
							<div className="overlay-container">
								<div className="container">
									<div className="title">We Care About You</div>
									<div className="subtitle">
										Peace of mind and greater travel flexibility are yours with
										our extended cancellation policy.
									</div>
								</div>
							</div>
						</div>
						<div className="slider">
							<div className="img-container">
								<img
									src={require("../assets/images/c.jpg")}
									className="img-fluid"
									alt=""
								/>
							</div>
							<div className="overlay-container">
								<div className="container">
									<div className="title">We Care About You</div>
									<div className="subtitle">
										Peace of mind and greater travel flexibility are yours with
										our extended cancellation policy.
									</div>
								</div>
							</div>
						</div>
						<div className="slider">
							<div className="img-container">
								<img
									src={require("../assets/images/e.jpg")}
									className="img-fluid"
									alt=""
								/>
							</div>
							<div className="overlay-container">
								<div className="container">
									<div className="title">We Care About You</div>
									<div className="subtitle">
										Peace of mind and greater travel flexibility are yours with
										our extended cancellation policy.
									</div>
								</div>
							</div>
						</div>
					</Slider>
				</div>

				<div className="search-wrapper" id="searchBar">
					<form className="container" action="hotel.html">
						<div className="bottom-search-bar d-none d-lg-flex">
							<div className="item">
								<span>
									<i className="fa fa-search"></i>
								</span>
								<input type="text" placeholder="Los Angeles" />
								<div className="item-sup">Destination</div>
							</div>
							<div className="item">
								<div className="mobile-checkdate">
									<span>
										<i className="fa fa-calendar"></i>
									</span>
									<input type="date" placeholder="Find a Hotel" />
									<input type="date" placeholder="Find a Hotel" />
								</div>

								<div className="item-sup" id="mobile-check-title">
									<div className="row">
										<div className="col-6">Check-in</div>
										<div className="col-6">Check-out</div>
									</div>
								</div>
							</div>
							<div className="item">
								<span>
									<i className="fas fa-users"></i>
								</span>
								<input type="text" placeholder="1 Room 1 Adult" />
								<div className="item-sup">Occupancy</div>
							</div>
							<div className="item">
								<span>
									<i className="fas fa-dollar-sign"></i>
								</span>
								{/* <select>
									<option value="">Lowest Available Rate</option>
									<option value="">Promotional Code</option>
									<option value="">Senior Citizen Rate</option>
								</select>  */}
								<input type="text" placeholder="Lowest Available Rate" />
								<div className="item-sup">Special rates</div>
							</div>
							<div className="button-container">
								<button>Search</button>
							</div>
						</div>
						<div
							className="bottom-search-bar-mobile d-flex d-lg-none"
							data-toggle="modal"
							data-target="#myModal"
						>
							<span>Where to</span>
							<span>
								<i className="fa fa-ellipsis-v"></i>
							</span>
						</div>
						<div className="modal" id="myModal">
							<div className="modal-dialog ">
								<div className="modal-content ">
									<div className="modal-header">
										<h5 className="modal-title">Where to</h5>
										<button
											type="button"
											className="close"
											data-dismiss="modal"
										>
											&times;
										</button>
									</div>

									<div className="modal-body">
										<div className="bottom-search-bar">
											<div className="item">
												<span>
													<i className="fa fa-search"></i>
												</span>
												<input type="text" placeholder="Los Angeles" />
												<div className="item-sup">Destination</div>
											</div>
											<div className="item">
												<div className="mobile-checkdate">
													<span>
														<i className="fa fa-calendar"></i>
													</span>
													<input type="date" placeholder="Find a Hotel" />
													<input type="date" placeholder="Find a Hotel" />
												</div>

												<div className="item-sup" id="mobile-check-title">
													<div className="row">
														<div className="col-6">Check-in</div>
														<div className="col-6">Check-out</div>
													</div>
												</div>
											</div>
											<div className="item">
												<span>
													<i className="fas fa-users"></i>
												</span>
												<input type="text" placeholder="1 Room 1 Adult" />
												<div className="item-sup">Occupancy</div>
											</div>
											<div className="item">
												<span>
													<i className="fas fa-dollar-sign"></i>
												</span>
												{/* <select>
												<option value="">Lowest Available Rate</option>
												<option value="">Promotional Code</option>
												<option value="">Senior Citizen Rate</option>
											</select>  */}
												<input
													type="text"
													placeholder="Lowest Available Rate"
												/>
												<div className="item-sup">Special rates</div>
											</div>
											<div className="button-container">
												<button>Search</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}