import React from 'react';

// {video}  =>  is a jsx feature what is does is it takes incoming argumanet.video and created a varidable called video
const VideoListItem =({video}) =>{
//const video = props.video;

const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li className="list-group-item">
<div className="video-list media">

    <div className="media-left">

      <img className="media-object" src={imageUrl}/>

    </div>

    <div className="media-body">

      <div className="media-heading">{video.snippet.title}</div>

    </div>
</div>
     </li>
  )
}

export default VideoListItem;
