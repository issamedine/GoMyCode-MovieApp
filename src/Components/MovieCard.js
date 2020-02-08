import React, { Component } from "react";
import "./MovieCard.scss";
// import { Rate } from "antd";
import "antd/dist/antd.css";
import Star from './Star'

function MovieCard(props) {
  //objet qui contient 'title', 'rating',..
  const { title, rating, image } = props.movie;
  
  
  return (
    <div className="col-xs-12 col-md-3">
      <div className="card">
        {/* <Rate value={rating} /> */}
        <Star rating={rating}/>
        <img src={image} alt="..." width="400" height="200" />
        <div className="title">{title}</div>
      </div>
    </div>
  );
}

export default MovieCard;
