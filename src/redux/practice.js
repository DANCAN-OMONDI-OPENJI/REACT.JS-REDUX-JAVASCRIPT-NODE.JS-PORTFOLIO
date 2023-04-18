import { configureStore } from "@reduxjs/toolkit";
//import { createStore, applyMiddleware } from "redux";
//import thunk from "redux-thunk";
export function increment() {
  return function (dispatch, getState, api) {
    let myData;
    fetch(api)
      .then((res) => res.json())
      .then((data) => (myData = data))
      .then(
        setTimeout(() => {
          dispatch({
            type: "INCREMENT",
            payload: myData,
          });
        }, 3000)
      );
  };
}
export function decrement() {
  return {
    type: "DECREMENT",
  };
}
const myState = {
  count: 3,
  person: { yoh: "het" },
};
//let myNum = 1;
function reducer(state = myState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
        person: action.payload,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}
let api = `https://swapi.dev/api/people/1/`;
const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    });
  },
  //applyMiddleware(thunk.withExtraArgument(api))
});
store.subscribe(() => {
  console.log(store.getState());
});
export default store;
