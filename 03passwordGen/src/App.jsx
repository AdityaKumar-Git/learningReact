import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [isNum, setIsNum] = useState(false);
  const [isChar, setIsChar] = useState(false);

  let passwordRef = useRef(null);

  let copyTxt = ()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select();
    document.execCommand("copy");
  }

  let genPass = useCallback(() => {
    let pass = "";
    let s = "abcdefghijklmnopqrstuvwxyz";
    if (isNum) s += "0123456789";
    if (isChar) s += "!@#$%^&*()_+";

    let draft = (len)=>{
      let ret = "";
      for (let i = 0; i < len; i++) {
        ret += s.charAt(Math.floor(Math.random() * s.length));
      }
      return ret;
    }

    while(true){
      let charBreak = true;
      let numBreak = true;
      let alpBreak = false;
      let n = "0123456789";
      let c = "!@#$%&*_+";
      let a = "abcdefghijklmnopqrstuvwxyz"
      pass=draft(length);
      if(isChar){
        charBreak = false;
        for(let i=0;i<length;i++){
          if(c.includes(pass.charAt(i))){
            charBreak = true;
            break;
          }
        }
      }
      if(isNum){
        numBreak = false;
        for(let i=0;i<length;i++){
          if(n.includes(pass.charAt(i))){
            numBreak = true;
            break;
          }
        }
      }
      for(let i=0;i<length;i++){
        if(a.includes(pass.charAt(i))){
          alpBreak = true;
          break;
        }
      }
      if(charBreak && numBreak && alpBreak) break;
    }

    // pass = draft(length);
    setPassword(pass);
  }, [length, isNum, isChar]);

  useEffect(() => {
    genPass();
  }, [genPass, isNum, isChar, length]);

  return (
    <>
    <div className="container w-full min-h-screen min-w-full flex justify-center align-middle bg-slate-300">
    <div className="w-5/12 h-5/6 m-auto flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4 text-gray-900 dark:text-gray-100 rounded-2xl shadow-2xl">
      <div className="text-4xl font-bold mb-6">Password Generator</div>
      <div className="w-8/12 flex items-center mb-4">
        <input
          type="text"
          value={password}
          readOnly
          className="w-full max-w-md p-2 text-center border border-gray-300 dark:border-gray-700 rounded-md bg-gray-200 dark:bg-gray-800"
        />
        <button
          className="ml-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
          onClick={copyTxt}
        >
          Copy
        </button>
      </div>
      <div className="w-full max-w-md mb-4">
        <label className="block text-2xl mb-2">Length: {length}</label>
        <input
          type="range"
          min="4"
          max="32"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="w-full"
        />
      </div>
      <div className="w-full max-w-md mb-4 flex items-center justify-between">
        <label className="text-2xl">Include Numbers</label>
        <input
          type="checkbox"
          checked={isNum}
          onChange={(e) => setIsNum(e.target.checked)}
          className="ml-2"
        />
      </div>
      <div className="w-full max-w-md mb-6 flex items-center justify-between">
        <label className="text-2xl">Include Special Characters</label>
        <input
          type="checkbox"
          checked={isChar}
          onChange={(e) => setIsChar(e.target.checked)}
          className="ml-2"
        />
      </div>
      <button
        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
        onClick={genPass}
      >
        Generate
      </button>
    </div>
    </div>
    </>
  );
}

export default App;
