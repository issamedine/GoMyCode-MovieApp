import React, { Component } from "react";
import "./App.scss";
import MovieList from "./Components/MovieList";
import SearchBar from "./Components/SearchBar";
import AddMovie from "./Components/AddMovie";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [
        { key: Math.random(), title: "aaa", rating: 3, image: "" },
        { key: Math.random(), title: "bbb", rating: 2, image: "" }
      ],
      searchInput: "",
      searchStar:"",
      searchRating: 0
    };
  }

  handleChangeModal = e => {
    this.setState({ inputModal: e.target.value });
  };

  handleAdd = v => {
    this.setState({
      movieList: [
        {
          key: Math.random(),
          title: v.title,
          rating: v.rating,
          image: v.image
        },
        ...this.state.movieList
      ]
    });
  };

  handleChangeInput = x => this.setState({searchInput:x.trim()})

  // handleSearchInputStar = w => {
  //   if (w < 6 && !w.match(/[^0-9/]/g)){
  //     this.setState({searchStar: w})
  //   }
  // }
  

  render() {
    return (
      <div className="container">
        <SearchBar handleChangeInput={this.handleChangeInput} handleSearchInputStar={this.andleSearchInputStar}/>
        <MovieList movieList={this.state.movieList} searchInput={this.state.searchInput} /* searchStar={Number(this.state.searchStar)}*/ /> 
        <AddMovie handleAdd={this.handleAdd} />
      </div>
    );
  }
}

export default App;


