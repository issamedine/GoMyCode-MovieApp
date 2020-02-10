import React, { Component } from "react";
import "./SearchBar.scss";
import Star from "./Star";

class SearchBar extends Component {
  render() {
    const { searchStar, handelChangeRate } = this.props;
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
        <span className="star-search">
          {/* <input className="search-star shadow-drop-2-center" type="text" placeholder="Search with number start" value={searchStar} onChange={e => this.props.handleSearchInputStar(e.target.value)}/> */}
          <Star rating={searchStar} handelChangeRate={handelChangeRate} />
        </span>
      </div>
    );
  }
}

export default SearchBar;
