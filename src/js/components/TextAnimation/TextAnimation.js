import React from 'react'

export default class TextAnimation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lang: props.lang,
			text: {
				es: "Festival Internacional de Series Web",
				en: "International Web Series Festival"
			},
			currentText: "",
			count: 0
		}
		this.updateText;
	}

	_updateText(mode) {
		const { lang, text, currentText, count } = this.state;

		switch(mode) {
			case 'write':
				this.setState({
					currentText: text[lang].substr(0, count + 1),
					count: count + 1
				});
				break;
			case 'loop':
				if (currentText.length == text[lang].length) {
					this.setState({
						currentText: text[lang] + "_"
					});
				} else {
					this.setState({
						currentText: text[lang]
					});
				}
				break;
		}
	}

	_manageIntervals() {
		this.updateText = setInterval(()=>{
			this._updateText("write");
			if (this.state.count == this.state.text[this.state.lang].length) {
				clearInterval(this.updateText);
				this.updateText = setInterval(()=>{
					this._updateText("loop");
				}, 350);
			}
		}, 60);
	}

	componentWillMount() {
		this._manageIntervals();
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.lang != nextProps.lang) {
			this.setState({
				lang: nextProps.lang,
				count: 0
			});
			clearInterval(this.updateText);
			this._manageIntervals();
		}
	}

	render() {
		const { currentText } = this.state;

		return (
			<div id="text-animation">{currentText}</div>
		);
	}
}
