import React from 'react'

export default class TextAnimation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "Festival Internacional de Series Web",
			currentText: "",
			count: 0
		}
		this.updateText;
	}

	_updateText(mode) {
		const { text, currentText, count } = this.state;

		switch(mode) {
			case 'write':
				this.setState({
					currentText: text.substr(0, count + 1),
					count: count + 1
				});
				break;
			case 'loop':
				if (currentText.length == text.length) {
					this.setState({
						currentText: text + "_"
					});
				} else {
					this.setState({
						currentText: text
					});
				}
				break;
		}
	}

	componentWillMount() {
		this.updateText = setInterval(()=>{
			this._updateText("write");
			if (this.state.count == this.state.text.length) {
				clearInterval(this.updateText);
				this.updateText = setInterval(()=>{
					this._updateText("loop");
				}, 350);
			}
		}, 60);
	}

	render() {
		const { currentText } = this.state;

		return (
			<div id="text-animation">{currentText}</div>
		);
	}
}
