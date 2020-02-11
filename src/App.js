import React, { Component } from "react";
import "./App.scss";
import Container from './Container'
import Hoc from './Hoc'

const ListWithLoading = Hoc(Container);

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading:false
    }
    
  }





componentDidMount() {
  setInterval(() => {
    this.setState({loading: true})
  }, 3000);
}

  



  // // constructor(props) {
  // //   super(props);
  // //   this.state = {
  // //     movieList: [
  // //       { key: Math.random(), title: "The last days", rating: 3, image: img },
  // //       {
  // //         key: Math.random(),
  // //         title: "The osiris child",
  // //         rating: 2,
  // //         image: imgg
  // //       }
  // //     ],
  // //     searchInput: "",
  // //     // searchStar:"",
  // //     searchRating: 0,
  // //     ClickRate: 0,
  // //     loading: false
  // //   };
  // // }

  // handleChangeModal = e => {
  //   this.setState({ inputModal: e.target.value });
  // };

  // handleAdd = v => {
  //   this.setState({
  //     movieList: [
  //       {
  //         key: Math.random(),
  //         title: v.title,
  //         rating: v.rating,
  //         image: v.image
  //       },
  //       ...this.state.movieList
  //     ]
  //   });
  // };

  // handleChangeInput = x => this.setState({ searchInput: x.trim() });

  // // handleSearchInputStar = w => {
  // //   if (["1", "2", "3", "4", "5", ""].includes(w)) {
  // //     this.setState({ searchStar: w });
  // //   }
  // // };

  // handelChangeRate = x => {
  //   this.setState({ searchRating: x });
  // };

  // // clickedStarValue = (value) => {
  // //   this.setState({rating:value})
  // // }

 

  render() {
    

    return (
      <div className="container">
        <ListWithLoading isLoading={this.state.loading} />
      </div>
    );
  }
}

export default App;
