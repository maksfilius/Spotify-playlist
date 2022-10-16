import React from 'react';
import './playlist.css';
import TrackList from '../TrackList/TrackList.js';

class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value)
  }

  render() {
    return (
    <div className="playlist">
        <input defaultValue ={'New Playlist'} onChange=
        {this.handleNameChange}/>
          <TrackList 
            tracks={this.props.playlistTracks}
            onRemove={this.props.onRemove}
            isRemoval={true} />
        <button 
          className="playlist_btn"
          onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
    </div>
  )}
}
  
export default Playlist