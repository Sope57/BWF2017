import React from 'react'

export default class TextAnimation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "Festival Internacional de Series Web",
			currentText: "",
			count: 1
		}
		this.updateText;
	}

	_updateText() {
		const { text, currentText, count } = this.state;
		
		if (count <= text.length) {
			this.setState({
				currentText: text.substr(0, count),
				count: count + 1
			});
		} else {
			clearInterval(this.updateText);
			setInterval(()=>{
				console.log(text);
				console.log(currentText);
				if (currentText.length == text.length) {
					this.setState({
						currentText: text + "__"
					});
				} else {
					this.setState({
						currentText: text
					});
				}
			}, 1000);
		}
	}

	componentWillMount() {
		this.updateText = setInterval(()=>{
			this._updateText();
		}, 40);
	}

	render() {
		const { currentText } = this.state;

		return (
			<div id="text-animation">{currentText}</div>
		);
	}
}
