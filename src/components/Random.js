import React, { useState, useEffect, useContext } from "react";
import context from "../context";

import helper from "../utils/helper";
import GroupList from "./GroupList";

const Random = props => {
  const reducer = useContext(context);
  const { random, dispatch } = reducer;

  console.log("random=", random);
  return (
    <div className="random">
      {random.map((group, index) => {
        return <GroupList group={group} key={index} source="random" />;
      })}
    </div>
  );
};

export default Random;
