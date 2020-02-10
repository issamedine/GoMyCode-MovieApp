import React, { Component } from "react";
import "./SearchBar.scss";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    const { searchStar } = this.props;
    return (
      <div className="search-bar">
        <span className="input-search">
          <input
          className="shadow-drop-2-center"
            type="text"
            placeholder="Type movie name to search"
            onChange={e => this.props.handleChangeInput(e.target.value)}
          />
          <button className="shadow-drop-2-center">Search</button>
        </span>
        <span>
          <input className="search-star shadow-drop-2-center" type="text" placeholder="Search with number start" value={searchStar} onChange={e => this.props.handleSearchInputStar(e.target.value)}/>
        </span>
      </div>
    );
  }
}

export default SearchBar;
