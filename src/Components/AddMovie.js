import React from "react";
import ModalMovie from "./ModalMovie";

function AddMovie({handelChangeRate, handleAdd}) {
  return (
    <div>
      <ModalMovie
        handleAdd={handleAdd}
        handelChangeRate={handelChangeRate}

      />
    </div>
  );
}
export default AddMovie;
