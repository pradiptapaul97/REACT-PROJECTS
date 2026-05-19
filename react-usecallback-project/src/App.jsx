import { useCallback, useState } from 'react'
import ChildComponent from './components/childComponent'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // function handleClick() {
  //   setCount(count + 1)
  //   // if (action === "inc") {
  //   //   setCount(count + 1)
  //   // } else {
  //   //   setCount(count !== 0 ? count - 1 : 0)
  //   // }
  // }

  const handleClick = useCallback(() => {
    setCount(count + 1)
  }, [count])

  return (
    <div className="app-container">
      <div className="counter-display">
        <span className="counter-label">Current Count</span>
        <span className="counter-value">{count}</span>
      </div>

      <div className="button-group">
        {/* <button className="btn" onClick={() => handleClick("dec")}>Decrement</button> */}
        <button className="btn btn-primary" onClick={handleClick}>Increment</button>
      </div>

      <div className="divider"></div>

      <ChildComponent buttonName="Child Button" />
    </div>
  )
}

export default App
