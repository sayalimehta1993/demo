import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counter/CounterSlice'


function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;