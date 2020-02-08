import React from "react";
import "./Star.scss"

function Star(props) {
  console.log("props", props.rating);
  const arr = [];
    for (let i = 0; i < 5; i++) {
      if (i < props.rating) {
        arr.push(<span>★</span>);
      } else {
        arr.push(<span>☆</span>);
      }
    }
return <div className="star"><div className="star-custom">{arr}</div></div> ;
}
export default Star;
