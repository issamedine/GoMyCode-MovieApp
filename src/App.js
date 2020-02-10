import React, { Component } from "react";
import "./App.scss";
import MovieList from "./Components/MovieList";
import SearchBar from "./Components/SearchBar";
import AddMovie from "./Components/AddMovie";
import img from "../src/imgs/lastdays.jpg";
import imgg from "../src/imgs/theosiris.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [
        { key: Math.random(), title: "The last days", rating: 3, image: img },
        {
          key: Math.random(),
          title: "The osiris child",
          rating: 2,
          image: imgg
        }
      ],
      searchInput: "",
      // searchStar:"",
      searchRating: 0,
      ClickRate: 0
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

  handleChangeInput = x => this.setState({ searchInput: x.trim() });

  // handleSearchInputStar = w => {
  //   if (["1", "2", "3", "4", "5", ""].includes(w)) {
  //     this.setState({ searchStar: w });
  //   }
  // };

  handelChangeRate = x => {
    this.setState({ searchRating: x });
  };

  // clickedStarValue = (value) => {
  //   this.setState({rating:value})
  // }
  render() {
    const { movieList, searchInput, searchRating, ClickRate } = this.state;
    console.log(this.state.searchRating);

    return (
      <div className="container">
        <h1 className="title-project heartbeat">Hello to Movie App..</h1>
        <SearchBar
          searchStar={searchRating}
          handleChangeInput={this.handleChangeInput}
          // handleSearchInputStar={this.handleSearchInputStar}
          handelChangeRate={this.handelChangeRate}
        />
        <MovieList
          movieList={movieList}
          searchInput={searchInput}
          searchStar={searchRating}
        />
        <AddMovie
          handleAdd={this.handleAdd}
          handelChangeRate={this.handelChangeRate}
        />
      </div>
    );
  }
}

export default App;
