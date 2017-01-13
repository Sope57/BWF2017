import React from 'react'

import TextAnimation from './TextAnimation/TextAnimation'

export default class Layout extends React.Component {
	render() {
		return (
			<div id="main" style={{backgroundImage: "url(images/bg-mobil.jpg)"}}>
				<div id="banner-top">
					<TextAnimation />
					<div id="submit">
						<a href="http://bajawebfest.com">
							<img src="../images/btn-submit.png" alt=""/>
						</a>
					</div>
				</div>
				<div id="banner-middle">
					<div id="bwflogo">
						<img src="../images/logo.png" alt=""/>
						<div>Junio <span>2/3</span> Cine Tonala <span>Tijuana</span></div>
					</div>
				</div>
				<div id="banner-bottom">
					<div id="languages">
						<ul>
							<li>
								<div>En</div>
							</li>
							<li>
								<div>Es</div>
							</li>
						</ul>
					</div>
					<div id="social">
						<ul>
							<li>
								<a href="">F</a>
							</li>
							<li>
								<a href="">T</a>
							</li>
							<li>
								<a href="">I</a>
							</li>
						</ul>
					</div>
					<div id="footer">
						Baja Web Fest 2017. All Rights Reserved
					</div>
				</div>
			</div>
		);
	}
}