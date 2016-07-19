import BackgroundLines from './background.jsx'
import React from 'react';
import ReactDOM from 'react-dom';

const Ouroboros = React.createClass({
	render(){
		return(
			<svg height={ this.props.height + 115 } width={this.props.width + 60}>
				<BackgroundLines {...this.props} />
	  	</svg>
		)
	}
})

module.exports = function( configuration, targetID='ouroboros' ){
	ReactDOM.render( 
  	React.createElement( Ouroboros, configuration ), 
		document.getElementById(targetID) 
	)
}