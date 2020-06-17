import React from "react";
import Poker from "./Poker";
import { useDrop } from "react-dnd";
import ItemTypes from "../ItemTypes";

const GroupList = props => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.POKER,
    drop: () => console.log("droped: ", props.group),
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  });
  return (
    <div className="group-list" ref={drop}>
      {props.group.map((el, index) => {
        return (
          <Poker
            key={el}
            name={el}
            isCanDrag={props.group.length - 1 === index}
            source={props.source}
          />
        );
      })}
    </div>
  );
};

export default GroupList;
