import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("demoPass");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [characterAllowed, setCharacterAllowed] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) {
      letters += "0123456789"
    }
    if (characterAllowed) {
      letters += "!@#$%^&*()_+[]{}|;:,.<>?"
    }

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * letters.length);
      pass += letters[index];
    }

    setPassword(pass)


  }, [length, numberAllowed, characterAllowed])

  //[length, numberAllowed, characterAllowed] // [length, numberAllowed, characterAllowed, setPassword] => why

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password]) //[password] => why

  useEffect(() => {
    passwordGenerator()
  }, [passwordGenerator])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/10 p-8 transform transition-all hover:scale-[1.01]">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 drop-shadow-sm">
            Password Generator
          </h1>
          <p className="text-gray-400 mt-3 font-medium tracking-wide">
            Create strong, secure passwords instantly
          </p>
        </div>

        {/* Password Display Box */}
        <div className="relative group mb-8">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
          <div className="relative flex items-center bg-gray-900 rounded-2xl p-2">
            <input
              type="text"
              className="w-full bg-transparent text-white px-4 py-3 text-xl outline-none font-mono placeholder-gray-600 tracking-wider"
              placeholder="P@ssw0rd123!"
              value={password}
              ref={passwordRef}
              readOnly
            />
            <button onClick={copyPassword} className="ml-2 flex-shrink-0 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-white font-bold rounded-xl px-6 py-3 transition-all active:scale-95 shadow-lg shadow-teal-500/30 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
              </svg>
              Copy
            </button>
          </div>
        </div>

        {/* Settings Box */}
        <div className="bg-gray-900/60 rounded-2xl p-6 border border-white/5 shadow-inner">
          <div className="flex flex-col space-y-6">

            {/* Length Range */}
            <div className="flex flex-col space-y-3">
              <div className="flex justify-between items-center text-gray-300">
                <label className="font-semibold tracking-wide">Password Length</label>
                <span className="text-teal-400 font-extrabold text-xl">{length}</span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-teal-500 hover:accent-teal-400 transition-all"
              />
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

            {/* Checkboxes */}
            <div className="flex justify-between items-center gap-4">
              <label className="flex items-center space-x-3 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input type="checkbox" onChange={() => setNumberAllowed(!numberAllowed)} checked={numberAllowed} className="peer appearance-none w-6 h-6 border-2 border-gray-600 rounded-lg bg-gray-800 checked:bg-teal-500 checked:border-teal-500 transition-all cursor-pointer" />
                  <svg className="absolute w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300 font-medium group-hover:text-white transition-colors">Numbers</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input type="checkbox" onChange={() => setCharacterAllowed(!characterAllowed)} checked={characterAllowed} className="peer appearance-none w-6 h-6 border-2 border-gray-600 rounded-lg bg-gray-800 checked:bg-teal-500 checked:border-teal-500 transition-all cursor-pointer" />
                  <svg className="absolute w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300 font-medium group-hover:text-white transition-colors">Characters</span>
              </label>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default App
