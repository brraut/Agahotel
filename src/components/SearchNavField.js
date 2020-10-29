import React, { useState, useEffect } from "react";
import {
	Formik,
	Field,
	Form,
	setFieldValue,
	ErrorMessage,
	FieldArray,
} from "formik";
import * as Yup from "yup";
import DateSearch from "./DateSearch";
import DatePicker from "./DatePicker";
import { addDays, set, format } from "date-fns";
import RoomSelector from "./RoomSelector";
import FormikControl from "./FormikComponent/FormikControl";

const validationSchema = Yup.object({
	destination: Yup.string().required("This Field Cannot be Empty"),
});
export default function SearchNavField() {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(addDays(new Date(), 1));
	const [cal, setCal] = useState(false);
	const [showRoom, setShowRoom] = useState(false);
	const [adultNumber, setAdultNumber] = useState(0);
	// const [adult, setAdult] = useState(0)
	const openMobileDateBar = (e) => {
		e.preventDefault();
		document.getElementById("mobileDateBar").style.width = "100%";
		getCalendarMobile();
	};

	/* Close/hide the sidenav */
	const closeMobileDateBar = (e) => {
		e.preventDefault();
		document.getElementById("mobileDateBar").style.width = "0";
	};
	const openOccupancyBar = () => {
		document.getElementById("occupancyBar").style.width = "100%";
		handleRoomMobile();
	};

	/* Close/hide the sidenav */
	const closeOccupancyBar = (e) => {
		e.preventDefault();
		document.getElementById("occupancyBar").style.width = "0";
	};
	// const getCalendar = (e) => {
	// 	e.preventDefault();
	// 	document
	// 		.querySelectorAll(".rdrDateRangeWrapper")[1]
	// 		.classList.add("active");
	// 	document.querySelectorAll(".option-content")[1].classList.remove("active");
	// };
	const handleRoom = (e) => {
		e.preventDefault();
		document.querySelectorAll(".option-content")[1].classList.add("active");
		document
			.querySelectorAll(".rdrDateRangeWrapper")[1]
			.classList.remove("active");
		if (!showRoom) {
			setShowRoom(true);
		} else {
			setShowRoom(false);
		}
	};
	const getCalendarMobile = () => {
		document
			.querySelector(".mobileDateBar .rdrDateRangeWrapper")
			.classList.add("active");
		document.querySelector(" .option-content").classList.remove("active");
	};
	const handleRoomMobile = () => {
		document.querySelector(".option-content").classList.add("active");
		document.querySelector(".rdrDateRangeWrapper").classList.remove("active");
		if (!showRoom) {
			setShowRoom(true);
		} else {
			setShowRoom(false);
		}
	};
	return (
		<div className="search-wrapper" id="searchBar">
			<Formik
				initialValues={{
					destination: "",
					checkIn: "",
					occupancy: [{ adult: 1, child: 0, id: "" + Math.random() }],
					specialRate: "",
					selectionRange: {
						startDate: startDate,
						endDate: endDate,
						key: "selection",
					},
				}}
				onSubmit={(data, { setSubmitting }) => {
					setSubmitting(true);
					setSubmitting(false);
					console.log(data)
				}}
				validationSchema={validationSchema}
			>
			{formik => 
					<Form className="container">
						<div className="bottom-search-bar d-none d-lg-flex">
							<div className="item">
								<span>
									<i className="fa fa-search"></i>
								</span>
								<Field
									type="text"
									placeholder="Los Angeles"
									name="destination"
								/>
								<div className="item-sup">Destination</div>
								{/* <span><ErrorMessage name="destination" /></span> */}
							</div>
							<div className="item">
								<div className="mobile-checkdate">
									<FormikControl 
									control="date"
									type="text"
									name="selectionRange" 
									/>
								</div>

								{/* <div className="item-sup" id="mobile-check-title">
									<div className="row">
										<div className="col-6" onClick={getCalendar}>
											<span className="d-block">Check-in</span>
										</div>
										<div className="col-6" onClick={getCalendar}>
											<span className="d-block">Check-out</span>
										</div>
									</div>
								</div> */}
							</div>

							<div className="item">
								<span>
									<i className="fas fa-users"></i>
								</span>
								<FormikControl
								name="occupancy"
								control="occupancy"
								/>
								{/* value={`${values.occupancy.length} Room ${adultNumber}`} */}
								<div className="item-sup">Occupancy</div>
							</div>
							<div className="item">
								<span>
									<i className="fas fa-dollar-sign"></i>
								</span>
								{/* <!-- <select>
                            <option value="">Lowest Available Rate</option>
                            <option value="">Promotional Code</option>
                            <option value="">Senior Citizen Rate</option>
                        			</select> --> */}
								<input type="text" placeholder="Lowest Available Rate" />
								<div className="item-sup">Special rates</div>
							</div>
							<div className="button-container">
								<button type="submit">
									Search
								</button>
							</div>
						</div>
						
					</Form>
				}
			</Formik>
		</div>
	);
}



{/* <Field name="ocup">
									{({ form, field }) => {
										const { values, setFieldValue } = form;
										
										return (
											<input
												type="text"
												onClick={handleRoom}
												value={`${
													values.occupancy.length
												} Room ${values.occupancy
													.map((item) => item.adult)
													.reduce((curval, newval) => curval + newval)} Adult`}
											></input>
										);
									}}
								</Field> */}




