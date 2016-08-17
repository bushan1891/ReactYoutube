import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
// get it from cosole.google
const API_KEY = 'AIzaSyAK0sIaPpQr773qfrxx9l6S5kVFhGCFD2Q';
// this is the componet class  //  React.CreateClass
/*const App = function() {
     return <h1 > Hey there! < /h1>
 } */
// using ES 6 fat arrow for function //  this will have differnt this useage

// parents can not get details instantly add check to handle null props;

class  App extends Component {
	constructor(props) {

							super(props);

							// initialy loading results of surf boards
							this.videoSearch('surfboards');

							this.state={
								videos:[],
								selectedVideo:null
							};

						}

						videoSearch(term){
							YTSearch({key:API_KEY,term:term},(videos) => {
								this.setState({
									videos:videos,
									selectedVideo:videos[0]
								});
							})
						}


		render(){
			return (
						<div>
							<SearchBar onSearchTermChange={term =>this.videoSearch(term) } />
							<VideoDetail video={this.state.selectedVideo} />
							<VideoList onVideoSelect={ selectedVideo => this.setState({selectedVideo}) } videos={this.state.videos} />
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
