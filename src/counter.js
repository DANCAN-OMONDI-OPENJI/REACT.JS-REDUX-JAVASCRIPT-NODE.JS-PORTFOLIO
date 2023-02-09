import React from "react";
import { connect } from "react-redux";
import { increment } from "./redux/index";
function Counter(props) {
  //const count = useSelector((state) => state.count);
  return (
    <div>
      <p>increment</p>
      {props.count}
      {props.person.name}
      <button onClick={() => props.dispatch(increment())}>increment</button>
      <button onClick={() => props.dispatch({ type: "DECREMENT" })}>
        decrement
      </button>
    </div>
  );
}
export default connect((state) => ({
  count: state.count,
  person: state.person,
}))(Counter);
