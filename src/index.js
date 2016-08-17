import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
// get it from cosole.google
const API_KEY = 'AIzaSyAK0sIaPpQr773qfrxx9l6S5kVFhGCFD2Q';
// this is the componet class  //  React.CreateClass
/*const App = function() {
     return <h1 > Hey there! < /h1>
 } */
// using ES 6 fat arrow for function //  this will have differnt this useage



class  App extends Component {
	constructor(props) {

							super(props);

							YTSearch({key:API_KEY,term:'surfboards'},(data) => {
								this.setState({videos:data});
							})

							this.state={videos:[]};

						}

		render(){
			return (
						<div>
							< SearchBar />
							< VideoList videos={this.state.videos} />
						</div>
					);
			 }

}


// this is a functional
/*const App = ()=> {
		// we are passing props videoList
		return ( < div >
              < SearchBar / >
            < / div > );

}*/
// <App /> is componenet instance // React.createElement
ReactDOM.render( < App / > , document.querySelector( '.container' ) );
