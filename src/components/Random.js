import React, { useState, useEffect } from "react";
import helper from "../utils/helper";
import Poker from "./Poker";
const Random = props => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const suits = ["spades", "hearts", "diamonds", "clubs"];
    const cards = suits.reduce((a, b) => {
      let temp = [];
      for (let i = 1; i <= 13; i++) {
        temp.push(`${b}-${i}`);
      }
      return a.concat(temp);
    }, []);
    const setup = [];
    helper.shuffle(cards);
    for (let i = 0; i < 8; i++) {
      setup.push([]);
    }
    cards.forEach((el, index) => {
      setup[index % 8].push(el);
    });
    setGroups(setup);
  }, []);
  return (
    <div className="random">
      {groups.map(group => {
        return (
          <div className="group-list">
            {group.map(el => {
              return (
                <div className="group-item">
                  <Poker name={el} />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Random;
