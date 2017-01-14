import React from 'react'

import TextAnimation from './TextAnimation/TextAnimation'

export default class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lang : "es",
			rights: {
				es: "Todos los Derechos Reservados",
				en: "All Rights Reserved"
			}

		}
	}

	_setLanguageEn() {
		this.setState({
			lang: "en"
		});
	}

	_setLanguageEs() {
		this.setState({
			lang: "es"
		});
	}

	render() {
		const { lang, rights } = this.state;

		return (
			<div id="main" style={{backgroundImage: "url(images/bg-mobil.jpg)"}}>
				<div id="banner-top">
					<TextAnimation  lang={lang}/>
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
								<div class={"lang-button " + (lang == "es" ? "active" : "")} onClick={this._setLanguageEs.bind(this)}>Es</div>
							</li>
							<li>
								<div class={"lang-button " + (lang == "en" ? "active" : "")} onClick={this._setLanguageEn.bind(this)}>En</div>
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
						Baja Web Fest 2017. { rights[lang] }
					</div>
				</div>
			</div>
		);
	}
}