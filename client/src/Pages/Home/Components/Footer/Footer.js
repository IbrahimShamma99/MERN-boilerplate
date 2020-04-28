import React from "react";
import './Footer.css';
import github from "../../../../img/github.png";
import linkedin from "../../../../img/linkedin.png";
import dev from "../../../../img/dev-brands.png"

const footer = ()=> (
		<div className="footer">
			<div id="footer" className="container-fluid text-center py-5">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-8 mx-auto">
						<a
						className="px-3"
						href="https://github.com/ibrahimshamma99"
						target="_blank"
						rel="noopener noreferrer">
						<img src={github} alt=""/>
					</a>
					<a	className="icon"
						href="https://www.linkedin.com/in/ibrahim-abushamma-890812184/"
						target="_blank"
						rel="noopener noreferrer">
						<img src={linkedin} alt=""/>
					</a>
					<a	className="px-3"
					href="https://dev.to/ibrahimshamma99"
					target="_blank"
					rel="noopener noreferrer">
					<img src={dev} alt=""/>
				</a>
				</div>
					</div>
					<h5>Ibrahim Abu-Shamma &copy; 2020</h5>
				</div>
			</div>
		</div>
);
export default footer;