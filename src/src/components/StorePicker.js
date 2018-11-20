import React from 'react';
import { getFunName } from '../helpers'; 
import PropTypes from 'prop-types';

class StorePicker extends React.Component{
	// constructor(){
	// 	super();
	// 	this.getToSotore = this.getToSotore.bind(this);
	// }

	getToSotore(event){
		event.preventDefaults();
		const storeId = this.storeInput.value;
		this.context.router.history.push('/store/${storeId}');
	}

	render(){
		return (
			<form className="store-selector" onSubmit={(e) => this.getToSotore(e)}> 
			{/*<form className="store-selector" onSubmit={this.getToSotore}> */}
				{/* This is a comment section */}
				<h2> Please Enter A Store </h2>
				<input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}}/>
				<button type="submit"> Visit Store -> </button>
			</form>
		)
	}
}

StorePicker.contextTypes = {
	router: React.PropTypes
}

export default StorePicker;