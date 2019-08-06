import React, { useReducer } from "react";
import { Provider } from "./context";
import reducers from "./reducers";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import TopBar from "./components/TopBar";
import Navigation from "./components/Navigation";
import FreeCell from "./components/FreeCell";
import Target from "./components/Target";
import Random from "./components/Random";

function App() {
  const {
    collectionInitState,
    collectionReducer,
    freedomInitState,
    freedomReducer,
    randomInitState,
    randomReducer,
    combineDispatchs
  } = reducers;

  const [freedom, fDispatch] = useReducer(freedomReducer, freedomInitState);
  const [collection, cDispatch] = useReducer(
    collectionReducer,
    collectionInitState
  );
  const [random, rDispatch] = useReducer(randomReducer, randomInitState);
  return (
    <div className="App">
      <Provider
        value={{
          freedom,
          collection,
          random,
          dispatch: combineDispatchs([fDispatch, cDispatch, rDispatch])
        }}
      >
        <DndProvider backend={HTML5Backend}>
          <FreeCell>
            <TopBar />
            <Target />
            <Random />
          </FreeCell>
        </DndProvider>
        <Navigation />
      </Provider>
    </div>
  );
}

export default App;
