import React from 'react';
import './results.css';
import TrackList from '../TrackList/TrackList.js';

class Results extends React.Component {
  render() {
    return (
    <div className="results">
        <h2>Results</h2>
        <TrackList 
          tracks = {this.props.searchResults}
          onAdd = {this.props.onAdd}
          isRemoval = {false}/>
    </div>
  )}
}

export default Results;