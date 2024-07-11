import { useState } from 'react'
import './App.css'


function App() {

  let [count, setCount] = useState(0)

  const addValue = ()=>{
    setCount(count + 1)
  }
  const subValue = ()=>{
    if(count>0) setCount(count - 1)
    else alert("Count can't be negetive")
  }

  return (
    <>
      <div id="content">
        <h1>Counter</h1>
        <div>Count is : {count}</div>
        <div className="buts">
        <button onClick = {addValue}>+1</button>
        <button onClick={subValue}>-1</button>
        </div>
      </div>
    </>
  )
}

export default App
