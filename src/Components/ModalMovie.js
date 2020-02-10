import React, { Component } from "react";
import { Modal, Button, Icon, Row, Col } from "antd";
import "antd/dist/antd.css";
import "./AddMovie.scss";
import Star from './Star'

class ModalMovie extends Component {
  state = {
    visible: false,
    key:"",
    title: "",
    rating: 0,
    image: "",
  };


  switshStar=(x)=>{
    this.setState({rating:x})
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    this.setState({
      visible: false
    });

    const { title, rating, image } = this.state;
    this.props.handleAdd({ title, rating, image });
    this.setState({title:"", rating:0, image:""})
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });

  };


  handleChangeNumber = e => {
    if (e.target.value < 6 && !e.target.value.match(/[^0-9/]/g)) {
      this.setState({rating: e.target.value})
    }
  }

  render() {
    const { handelChangeRate, clickedStarValue } = this.props
    return (
      <div>
        <div className="row">
          <div className="col-xs-12 col-md-3">
            <div
              className="card card-modal flip-horizontal-bottom"
              type="primary"
              onClick={this.showModal}
            >
              <Icon type="plus" />
            </div>
          </div>
        </div>
        <Modal
          title="Please enter your film"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>
            <input
              className="input-modal"
              type="text"
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
              placeholder="choose the title of your film"
            />
          </p>
          <p className="star-add">
            <label htmlFor="rating">choose the number of stars :</label>
            {/* <input
              className="input-modal"
              type="number"
              name="rating"
              id="rating"
              onChange={this.handleChange, this.handleChangeNumber}
              value={this.state.rating}
            /> */}
            <Star rating={this.state.rating} handelChangeRate={this.switshStar}/>
          </p>
          <p>
            <label for="avatar">choose the link for your movie :</label>
            <br />

            <input
              className="input-modal"
              id="avatar"
              type="text"
              name="image"
              onChange={this.handleChange}
              value={this.state.image}
            />
          </p>
        </Modal>
      </div>
    );
  }
}

export default ModalMovie;
