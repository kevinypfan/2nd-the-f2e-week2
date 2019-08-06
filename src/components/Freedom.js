import React, { useContext } from "react";
import FreeCard from "./FreeCard";
import context from "../context";

const Freedom = props => {
  const reducer = useContext(context);
  const { freedom, dispatch } = reducer;
  console.log(freedom);
  return (
    <div className="freedom">
      {freedom.map((el, index) => {
        return (
          <FreeCard
            name={el}
            dispatch={dispatch}
            type={"freedom"}
            index={index}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Freedom;
