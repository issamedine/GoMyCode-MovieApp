import React from "react";
import "./Star.scss";

const Star = ({rating, handelChangeRate=()=>{}}) => {

  const arr = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      arr.push(
        <span
          key={i}
          onClick={() => handelChangeRate(i + 1)
          
        }
        >
          ★
        </span>
      );
    } else {
      arr.push(
        <span
          key={i}
          onClick={() => handelChangeRate(i + 1)
          }
        >
          ☆
        </span>
      );
    }
  }
  return (
    <div className="star">
      <div className="star-custom">{arr}</div>
    </div>
  );
};
export default Star;
