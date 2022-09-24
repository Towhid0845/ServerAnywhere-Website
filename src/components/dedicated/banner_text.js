import React from "react";
import Button from "react-bootstrap/Button";
export default function BannerText() {
	return (
		<div className="row">
			<div className="col-lg-5">
				<div className="big-title pb-4">DEDICATED SERVERS</div>
				<div className="section-text text-white">
					<p>
						Whether you want to run a Minecraft server, host a website, or run a
						voice server; a Dedicated server allows you to have your own
						personalized server to achieve what you are looking to do! Our
						Dedicated servers provide you with powerful hardware and secure
						assets to allow your ideas to come to life.
					</p>
					<p className="py-4 text-white">
						Our experts will help you pick the plan that&apos;s right for you!
					</p>
				</div>
				<div className="">
					<a href="/vps">
						<Button variant="primary" size="lg" className="text-uppercase">
							Order Now
						</Button>
					</a>
				</div>
			</div>
			<div className="col-lg-2"></div>
			<div className="col-lg-5">
				<img
					src="/images/vps/dribbble.gif"
					alt="error"
					loading="lazy"
					width="100%"
				/>
			</div>
		</div>
	);
}
