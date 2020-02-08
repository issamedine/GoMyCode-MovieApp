import React, { Component } from "react";
import { Modal, Button, Icon } from "antd";
import "antd/dist/antd.css";
import "./AddMovie.scss";

class ModalMovie extends Component {
  state = {
    visible: false,
    key:"",
    title: "",
    rating: 0,
    image: ""
  };

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
    return (
      <div>
        <div className="row">
          <div className="col-xs-12 col-md-3">
            <div
              className="card card-modal"
              type="primary"
              onClick={this.showModal}
            >
              <Icon type="plus" />
            </div>
          </div>
        </div>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>
            <input
              type="text"
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
            />
          </p>
          <p>
            <input
              type="number"
              name="rating"
              onChange={this.handleChange, this.handleChangeNumber}
              value={this.state.rating}
            />
          </p>
          <p>
            <label for="avatar">Choose a movie picture:</label>
            <br />

            <input
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
