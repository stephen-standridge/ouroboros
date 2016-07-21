import './css/effects.css';
import React from 'react';

const Ouroboros = React.createClass({
	render(){
		let colorClass = this.props.colorClass;
		let width = this.props.width;
		let height = this.props.height;
		return(	
			<g className="effects__wrapper">
				<rect x="52.7" y="25.1" className={`effects__stroke ${colorClass} effects__stroke--5`} width={width+8} height={height+8}/>
				<rect x="48.7" y="21.1" className={`effects__stroke ${colorClass} effects__stroke--4`} width={width+16} height={height+16}/>
				<rect x="44.7" y="17.1" className={`effects__stroke ${colorClass} effects__stroke--3`} width={width+24} height={height+24}/>
				<rect x="40.7" y="13.1" className={`effects__stroke ${colorClass} effects__stroke--2`} width={width+32} height={height+32}/>
				<rect x="36.7" y="9.1" className={`effects__stroke ${colorClass} effects__stroke--1`} width={width+40} height={height+40}/>	
			</g>
		)
	}
})
export default Ouroboros;