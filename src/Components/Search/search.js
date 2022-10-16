import React from 'react';
import './search.css';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search() {
    this.props.onSearch(this.state.term)
  }

  handleTermChange(event) {
    this.setState({term: event.target.value})
  }

  render() {
    return (
      <div className="SearchBar">
        <input 
          placeholder="Enter the name of the song"
          onChange={this.handleTermChange} />
        <button 
          className="SearchButton"
          onClick={this.search}
          >SEARCH</button>
      </div>
    )}
}

export default Search;