import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
// import success from "../../images/success.png";
import styles from "./styles.module.css";
// import { Fragment } from "react/cjs/react.production.min";
import React from "react";
const EmailVerify = () => {
	const [validUrl, setValidUrl] = useState(true);
	const param = useParams();
	const token = localStorage.getItem("token");
	useEffect(() => {
		const verifyEmailUrl = async () => {
			try {
				//3000 is back-end port. url must get from back-end api.
				// const url = `http://103.191.240.74:3000/api/user/${param.id}/verify/${token}`;
				// const url = `http://localhost:3000/api/user/${param.id}/verify/${token}`;
				const url = `http://test.serveranywhere.net:3000/api/user/${param.id}/verify/${token}`;
				const { data } = await axios.get(url);
				console.log(data);
				setValidUrl(true);
			} catch (error) {
				console.log(error);
				setValidUrl(false);
			}
		};
		verifyEmailUrl();
	}, [param]);

	return (
		<div>
			{validUrl ? (
				<div className={styles.container}>
					{/* <img src={success} alt="success_img" className={styles.success_img} /> */}

					<h1>Email verified successfully</h1>
					<Link to="/login">
						<button className={styles.green_btn}>Login</button>
					</Link>
				</div>
			) : (
				<h1>404 Not Found email veriry</h1>
			)}
		</div>
	);
};

export default EmailVerify;
