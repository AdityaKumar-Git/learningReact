
import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState('white');

  return (
    <>
    <div className="container" style={{backgroundColor: color}}>
    <div className='SideBar'>
      <ul className=' bg-gradient-to-bl bg-slate-200'>
        <li style={{backgroundColor: 'red'}} className = ' text-white' onClick={()=>setColor("red")}>Red</li>
        <li style={{backgroundColor: 'blue'}} className = ' text-white' onClick={()=>setColor("blue")}>Blue</li>
        <li style={{backgroundColor: 'yellow'}} onClick={()=>setColor('yellow')}>Yellow</li>
        <li style={{backgroundColor: 'orange'}} onClick={()=>setColor("orange")}>Orange</li>
        <li style={{backgroundColor: 'green'}} className = ' text-white' onClick={()=>setColor("green")}>Green</li>
        <li style={{backgroundColor: 'black'}} className = ' text-white' onClick={()=>setColor("black")}>Black</li>
        <li style={{backgroundColor: 'white'}} className = ' text-black' onClick={()=>setColor("white")}>White</li>
      </ul>
    </div>
    </div>
    </>
  )
}

export default App
