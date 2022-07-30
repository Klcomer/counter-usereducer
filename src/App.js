import logo from './logo.svg';
import Card from './Card'
import './App.css';
import { useReducer } from 'react';


const counterReducer = (state, action) => {
  if (action.type === "INCREASE") {
    state++
  } else if (action.type === "DECREASE") {
    state--
  } else if (action.type === "RESET") {
    state = 0
  }

  return state
}

function App() {
  const [counterState, dispatchCounterAction] = useReducer(counterReducer, 0)

  const increaseCounter = () => {
    dispatchCounterAction({
      type: "INCREASE",
    })
  }

  const decreaseCounter = () => {
    dispatchCounterAction({
      type: "DECREASE",
    })
  }

  const resetCounter = () => {
    dispatchCounterAction({
      type: "RESET",
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <Card>
          <span style={{ display: "block", color: "white", border: "1px solid", borderRadius: "3rem", backgroundColor: "red", marginBottom: "1rem" }}>{counterState}</span>
          <button onClick={increaseCounter} className='button'>INCREASE</button>
          <button onClick={resetCounter} className='button'>RESET</button>
          <button onClick={decreaseCounter} className='button'>DECREASE</button>
        </Card>
        <img src={logo} className="App-logo" alt="logo" />
      </header>

    </div>
  );
}

export default App;
