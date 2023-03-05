import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../features/counterSlice";
import { RootState } from "../store";

export default function Counter() {
  const count = useSelector((state: RootState) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}
