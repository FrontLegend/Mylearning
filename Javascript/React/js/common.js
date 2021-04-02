/**
 * Mycomponent
 * 
 * @return {vDOM}
 *
 */

class Mycomponent extends React.Component {
	constructor(props) {
		super(props)
		// state initial
		this.state = {
			isClick: false
		}
		this.handleClick = this.handleClick.bind(this)
	}
	
	//handleClick() {  this.setState(prevState => ({  isToggleOn: !prevState.isToggleOn  })); } 
	
	handleClick() {
		// state get
		//const isClick = !this.state.isClick
		// state update
		//this.setState({isClick})
		
		this.setState(prevState => ({  isClick: !prevState.isClick  }));
	}
	
	render() {
		// const isClick = this.state.isClick
		const {isClick} = this.state
		return <h2 onClick={this.handleClick}>{isClick ? 'ON' : 'OFF'}</h2>
	}

}

/**
 * render
 *
 */

ReactDOM.render( <Mycomponent/>, document.getElementById('app') );
