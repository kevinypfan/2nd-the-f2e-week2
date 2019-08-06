import { collectionInitState, collectionReducer } from "./collection";
import { freedomInitState, freedomReducer } from "./freedom";
import { randomInitState, randomReducer } from "./random";

function combineDispatchs(dispatchs) {
  return function(obj) {
    for (let i = 0; i < dispatchs.length; i++) {
      dispatchs[i](obj);
    }
  };
}

export default {
  collectionInitState,
  collectionReducer,
  freedomInitState,
  freedomReducer,
  randomInitState,
  randomReducer,
  combineDispatchs
};
