import BackgroundLines from './background.jsx'
import Ouroboros from './ouroboros.jsx'
import React from 'react';
import ReactDOM from 'react-dom';

const OuroborosPiece = React.createClass({
	render(){
		return(
			<svg height={ this.props.height + 115 } width={this.props.width + 100}>
				<BackgroundLines {...this.props} 
					colorClass={'green'} 
					outerClass={'outer'} 
					innerClass={'inner'} 
					middleClass={'middle'} 
					patternClass={function(){return ''}}
				/>
				<Ouroboros {...this.props} />				
	  	</svg>
		)
	}
})

module.exports = function( configuration, targetID='ouroboros' ){
	ReactDOM.render( 
  	React.createElement( OuroborosPiece, configuration ), 
		document.getElementById(targetID) 
	)
}