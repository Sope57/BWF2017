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
			},
			submissions: {
				es: {
					span1: "Convocatoria del",
					span2: "1 de Febrero",
					span3: "al",
					span4: "5 de Abril"
				},
				en: {
					span1: "Submissions from",
					span2: "February 1st",
					span3: "to",
					span4: "April 5th"
				}
			},
			background: {
				mobil: {
					backgroundImage: "url(images/bg-mobil.jpg)"
				},
				desktop: {
					backgroundImage: "url(images/bg-desktop.jpg)"
				}
			},
			submit: {
				es: {
					off: {
						backgroundImage: "url(images/submit1.png)"
					},
					on: {
						backgroundImage: "url(images/submit2.png)"
					}
				},
				en: {
					off: {
						backgroundImage: "url(images/submit3.png)"
					},
					on: {
						backgroundImage: "url(images/submit4.png)"
					}
				}
			},
			activeBackground: window.innerWidth >= window.innerHeight ? "desktop" : "mobil",
			submitHover: "off"
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

	_updateBackground() {
		this.setState({
			activeBackground: window.innerWidth >= window.innerHeight ? "desktop" : "mobil"
		});
	}

	_buttonHoverOn() {
		this.setState({
			submitHover: "on"
		});
	}

	_buttonHoverOff() {
		this.setState({
			submitHover: "off"
		});
	}

	componentDidMount() {
		window.addEventListener("resize", this._updateBackground.bind(this));
	}

	render() {
		const { lang, rights, submissions, background, submit, activeBackground, submitHover } = this.state;

		const tagline = <div>{submissions[lang].span1} <span> {submissions[lang].span2} </span> {submissions[lang].span3} <span> {submissions[lang].span4} </span></div>	;

		return (
			<div id="main" style={background[activeBackground]}>
				<div id="banner-top">
					<TextAnimation  lang={lang}/>
					<div id="submit">
						<a href="https://filmfreeway.com/festival/BajaWebFest" target="_blank">
							<div 
								class="submit-button"
								style={ submit[lang][submitHover] }
								onMouseEnter={this._buttonHoverOn.bind(this)}
								onMouseLeave={this._buttonHoverOff.bind(this)}>
							</div>
						</a>
					</div>
				</div>
				<div id="banner-middle">
					<div id="bwflogo">
						<img src="images/logo.png" alt=""/>
						{ tagline }
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
								<a href="https://www.facebook.com/BajaWebFest/" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a>
							</li>
							<li>
								<a href="https://twitter.com/bajawebfest" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>
							</li>
							<li>
								<a href="https://www.instagram.com/bajawebfest/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
							</li>
						</ul>
						<ul id="logos">
							<li>
								<a href="https://www.facebook.com/WebSeriesWorldCup" target="_blank"><img src="images/worldcup.png" alt=""/></a>
							</li>
							<li>
								<a href="http://telenu.tv" target="_blank"><img src="images/telenu.png" alt=""/></a>
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