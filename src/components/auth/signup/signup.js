import { Button } from "@mui/material";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";
import { useState } from "react";
import ".././Login.css";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";

// import axios from "axios";
// import swal from "sweetalert";
// import { AdminContext } from "../../context/AdminContext";
// import { useContext, useEffect, useState } from "react";

const SignupPage = () => {
	const [visiblePassword, setVisiblePassword] = useState(false);
	const [user, setUser] = useState({
		name: "",
		email: "",
		phone: "",
		password: "",
	});
	let name, value;
	const handleInputs = (e) => {
		console.log(e);
		name = e.target.name;
		value = e.target.value;

		setUser({ ...user, [name]: value });
	};
	return (
		<div className="handleTheLoginBody">
			<div className="container mx-auto">
				<div className="pt-5 forCard  w-50 p-5 rounded mx-auto">
					<div className="mx-auto text-center">
						<img
							src="./images/brand/new-main-logo.jpg"
							className="handleLogoLogin rounded-pill"
							alt="logo"
						/>
					</div>
					<hr />
					<div className="mt-4 pt-2">
						<form>
							<InputGroup>
								<InputGroup.Text
									id="basic-addon1"
									className="bg-dark border-0 text-white"
								>
									<BsPersonLinesFill />
								</InputGroup.Text>
								<Form.Control
									style={{ textTransform: "lowercase" }}
									className="inputBackground"
									autoComplete="off"
									value={user.name}
									onChange={handleInputs}
									placeholder="user name"
									aria-label="Username"
									type="text"
									required
									aria-describedby="basic-addon1"
									name="name"
								/>
							</InputGroup>
							<br />
							<InputGroup>
								<InputGroup.Text
									id="basic-addon1"
									className="bg-dark border-0 text-white"
								>
									<FaEnvelope />
								</InputGroup.Text>
								<Form.Control
									style={{ textTransform: "lowercase" }}
									className="inputBackground"
									autoComplete="off"
									value={user.email}
									onChange={handleInputs}
									placeholder="Email"
									aria-label="Usermail"
									type="email"
									required
									aria-describedby="basic-addon1"
									name="email"
								/>
							</InputGroup>
							<br />
							<InputGroup>
								<InputGroup.Text
									id="basic-addon1"
									className="bg-dark border-0 text-white"
								>
									<FaPhoneAlt />
								</InputGroup.Text>
								<Form.Control
									style={{ textTransform: "lowercase" }}
									className="inputBackground"
									autoComplete="off"
									value={user.phone}
									onChange={handleInputs}
									placeholder="phone number"
									aria-label="Phonenumber"
									type="number"
									required
									aria-describedby="basic-addon1"
									name="phone"
								/>
							</InputGroup>
							<br />
							<InputGroup className="mb-3">
								<InputGroup.Text className="bg-dark border-0 text-white">
									<FaLock />
								</InputGroup.Text>
								<Form.Control
									aria-label="Password"
									className="inputBackground"
									placeholder="password"
									autoComplete="off"
									value={user.password}
									onChange={handleInputs}
									type={visiblePassword ? "text" : "password"}
									required
									name="password"
								/>
								<InputGroup.Text
									className="bg-dark text-center border-0 cursor-pointer text-white"
									role="button"
									type="button"
									onClick={() => setVisiblePassword(!visiblePassword)}
								>
									{visiblePassword ? <FaEye /> : <FaEyeSlash />}
								</InputGroup.Text>
							</InputGroup>

							<Form.Group className="mb-3" controlId="formBasicCheckbox">
								<Link
									className="text-decoration-none forgetPass"
									to="/admin/forgetpassword"
								>
									<p>Forgot password?</p>
								</Link>
							</Form.Group>
							<div className="mx-auto text-center">
								<Button
									style={{ backgroundColor: "#f74545" }}
									className="button-34 ps-5 pe-5 pt-2 pb-2"
									type="submit"
								>
									Sign Up
								</Button>
							</div>
							<Form.Group className="my-3" controlId="formBasicCheckbox">
								Already Have an Account?
								<Link className="text-decoration-none forgetPass" to="/login">
									<p>Login</p>
								</Link>
							</Form.Group>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignupPage;
