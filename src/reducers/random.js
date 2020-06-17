import helper from "../utils/helper";

const setupData = () => {
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
  return setup;
};

export const randomInitState = setupData();

export const randomReducer = (state, action) => {
  switch (action.type) {
    case "POP_RANDOM":
      // console.log(state);
      const newState = state.map(r => {
        console.log(state);
        if (r[r.length - 1] === action.payload) {
          const temp = [...r];
          temp.length = temp.length - 1;
          return temp;
        }
        return r;
      });
      return newState;
    // case "POP_FREEDOM":
    //   return state.reduce((a, b, index) => {
    //     console.log("a:", a, "index:", index);
    //     return a.concat([index === action.index ? action.payload : b]);
    //   }, []);
    default:
      return state;
  }
};
