import BackgroundLines from './background.jsx'
import Effects from './effects.jsx'
import Ouroboros from './ouroboros.jsx'
import React from 'react';
import ReactDOM from 'react-dom';
import {getXY} from './utils';
import {FuncSubject} from 'rx-react';
import assign from 'object-assign';



const OuroborosPiece = React.createClass({
	getInitialState() {
	    return assign({
		    width: 0,
		    height: 0,
		    color: 'purple'		    
	    }, this.props )
	},
	componentWillMount: function () {
    this.hoverObservable = FuncSubject.create((e)=> getXY(e) );

    this.hoverObservable.subscribeOnNext(function( xy){
    	console.log(xy)
    }, this)
  },	
	changeColor(){
		let color = this.state.color == 'green' ? 'purple' : 'green';
		return this.setState({ color })
	},
	render(){
		let totalHeight = this.state.height + 115;
		let totalWidth = this.state.width + 100;
		return(
			<svg 
				height={totalHeight} 
				width={totalWidth} 
				onClick={this.changeColor}
				onMouseMove={this.hoverObservable}>

				<BackgroundLines {...this.state} 
					colorClass={this.state.color} 
					outerClass={'outer'} 
					innerClass={'inner'} 
					middleClass={'middle'} 
					patternClass={function(){return ''}} />

				<Effects {...this.state} 
					colorClass={this.state.color} />				
				<Ouroboros {...this.state} 
					colorClass={this.state.color}
					strokeClass={''}
					fillClass={''} />				
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