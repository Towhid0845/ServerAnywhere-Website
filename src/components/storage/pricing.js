import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Axios from "axios";
import React from "react";
import UserReg from "./usr-reg";
import { Link } from "react-router-dom";
function Pricing() {
	const [data, setData] = useState([]);

	useEffect(() => {
		Axios.get("http://103.191.240.74/api/vpsproduct/")
			// Axios.get("http://localhost:3000/api/vpsproduct/")
			.then((res) => {
				console.log("getting data from fake api :::", res.data);
				setData(res.data);
			})
			.catch((err) => console.log(err));
	}, []);
	// console.log(data);
	const arr = data.map((data, index) => {
		return (
			<div className="col-lg-3 col-md-4 col-sm-6 offset-sm-0 col-8 offset-2 pb-5">
				<Card>
					<Card.Body>
						{/* <Card.Title>{data.name}</Card.Title> */}
						{/* <Card.Title>{data.id}</Card.Title> */}

						<Card.Title>{data.processor}</Card.Title>
						<Card.Text>{data.RAM}</Card.Text>
						<Card.Text>{data.OS}</Card.Text>
						<Card.Text>{data.diskspace}</Card.Text>
						<Card.Text className="price">
							<span>{data.price}</span>/ per month
						</Card.Text>
						<div className="d-grid gap-2 mx-4">
							<Link to="/storage/signup">
								<Button size="lg" onClick={<UserReg info={data.price} />}>
									Order
								</Button>
							</Link>
						</div>
					</Card.Body>
				</Card>
			</div>
		);
	});

	return (
		<div id="pricing">
			<div className="container">
				<div className="row">
					<div className="section-title pb-5">Our Services</div>
				</div>
				<div className="row">{arr}</div>
			</div>
		</div>
	);
}

export default Pricing;
