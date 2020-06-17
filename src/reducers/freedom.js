export const freedomInitState = [null, null, null, null];

export const freedomReducer = (state, action) => {
  switch (action.type) {
    case "DROP_FREEDOM":
      return state.reduce((a, b, index) => {
        // console.log("a:", a, "index:", index);
        return a.concat([index === action.index ? action.payload : b]);
      }, []);
    case "POP_FREEDOM":
      return state.map(el => {
        return el === action.name ? null : el;
      });
    default:
      return state;
  }
};
