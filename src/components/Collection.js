import React from "react";
import FreeCard from "./FreeCard";

const Collection = props => {
  return (
    <div className="collection">
      {[null, null, null, null].map((el, index) => {
        return <FreeCard type={"collection"} index={index} key={index} />;
      })}
    </div>
  );
};

export default Collection;
