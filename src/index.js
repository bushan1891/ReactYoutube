import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import videoList from './components/video_list';
// get it from cosole.google
const API_KEY = 'AIzaSyAK0sIaPpQr773qfrxx9l6S5kVFhGCFD2Q';
// this is the componet class  //  React.CreateClass
/*const App = function() {
     return <h1 > Hey there! < /h1>
 } */
// using ES 6 fat arrow for function //  this will have differnt this useage
class App extends Component {
	constructor() {
		super( props );
		// setting up the state
		this.state = {
			videos: []
		};
		// making call to youtube for the data end point
		YTSearch( {	key: API_KEY,term :'surfboards'}, ( video ) => {this.setState( {videos: video} )} );
	}

	render() {
		// we are passing props videoList
		return ( < div >
              < SearchBar / >
            < / div > );
	}
}
// <App /> is componenet instance // React.createElement
ReactDOM.render( < App / > , document.querySelector( '.container' ) );
