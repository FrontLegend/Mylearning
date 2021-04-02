class Toggle extends React.Component {
	
	constructor (props) {
		super (props);
		
		this.state = {
			this.isToggleOn : true
		}
		this.handleToggle = this.handleToggle.bind(this)
	}

	handleToggle () {
		this.setState(preState => 			({
			isToggleOn : !preState.isToggleOn
		})
	}

	render () {
		return <button onClick={this.handleToggle}>{isToggleOn ? "ON" : "OFF"}</button>
	}
}

const eName = "app"
let tDom = document.getElementById(eName)

ReactDOM.render(<Toggle/>, tDom)
