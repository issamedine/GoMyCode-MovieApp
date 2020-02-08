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
            type="text"
            placeholder="Type movie name to search"
            onChange={e => this.props.handleChangeInput(e.target.value)}
          />
          <button>Search</button>
        </span>
        <span>
          <input type="text" value={searchStar} onChange={e => this.props.handleSearchInputStar(e.target.value)}/>
        </span>
      </div>
    );
  }
}

export default SearchBar;
