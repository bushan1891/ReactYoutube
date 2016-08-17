import React from 'react';
import VideoListItem from './video_list_item';
// with functional component props is passed as argument with calss based component props can be accessed using this.props
const VideoList = (props) => {

const videoItems = props.videos.map((video) => {
  return <VideoListItem key ={video.etag} video={video} />
} );

// stay away from for loop use map
  return (
    <ul className="col-md-4 list-group">
    {videoItems}
    </ul>
  )
}

export default VideoList;
