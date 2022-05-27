import React from "react";
import { useDispatch } from "react-redux";
import { cancelGame } from "../Reducer/slicer/inicialGame";

const Fetch = () => {
  const dispatch = useDispatch();

  return (
        <button
        className="butonloading"
          onClick={() => dispatch(cancelGame())}
        >
         Loading..
        </button>
  );
};

export default Fetch;