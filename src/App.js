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
        { key: Math.random(), title: "First movie", rating: 3, image: "" },
        { key: Math.random(), title: "Second movie", rating: 2, image: "" }
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

  handleSearchInputStar = w => {
    if (["1", "2", "3", "4", "5", ""].includes(w)){
      this.setState({searchStar: w})
    }
  }

  render() {
    const { movieList, searchInput, searchStar } = this.state;
    return (
      <div className="container">
        <h1 className="title-project heartbeat">Hello to Movie App..</h1>
        <SearchBar searchStar={searchStar} handleChangeInput={this.handleChangeInput} handleSearchInputStar={this.handleSearchInputStar}/>
        <MovieList movieList={movieList} searchInput={searchInput} searchStar={searchStar} /> 
        <AddMovie handleAdd={this.handleAdd} />
      </div>
    );
  }
}

export default App;


