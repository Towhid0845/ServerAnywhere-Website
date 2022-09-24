import React from "react";
import Button from "react-bootstrap/Button";

export default function BannerText() {
	return (
		<div className="row">
			<div className="col-lg-5">
				<div className="big-title pb-4">VPS Servers</div>
				<div className="section-text text-white">
					<p>
						No matter if you want to run a Minecraft server, run a voice server,
						or host a website; a VPS server allows you to do what you want
						without limitation! Our VPS servers provide you with stable and
						secure resources in order to allow your ideas to come to life.
					</p>
					<p className="py-4 text-white">
						Let our experts pick the plan that&apos;s right for you!
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
					src="/images/vps/vps.gif"
					alt="error"
					loading="lazy"
					width="100%"
				/>
			</div>
		</div>
	);
}
