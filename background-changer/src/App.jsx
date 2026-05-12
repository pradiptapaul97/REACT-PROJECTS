import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive");

  const tailwindRainbow = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'purple'
  ];

  const colorChange = (col) => {
    setColor(col)
  }

  return (
    <>
      <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            {tailwindRainbow.map((c, i) => {
              return (
                <>
                  <button
                    key={i}
                    className='w-30 rounded-3xl'
                    style={{ backgroundColor: c }}
                    onClick={() => colorChange(c)}
                  >{c.charAt(0).toUpperCase() + c.slice(1)}</button>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
