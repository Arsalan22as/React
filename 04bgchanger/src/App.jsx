import { useState } from "react";


function getRandomColor() {
  // return a random hex colour like #a3f4c2
  const hex = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0");
  return `#${hex}`;
}

function App() {
  const [colour, setColour] = useState("olive");

  return (
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: colour}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white/35 backdrop-blur-lg px-3 py-2 rounded-3xl">
            <button
            onClick={() =>setColour("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "red"}}
            >Red</button>
            <button
            onClick={() =>setColour("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "green"}}
            >Green</button>
            <button
            onClick={() =>setColour("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "blue"}}
            >Blue</button>
            <button
            onClick={() => setColour(getRandomColor())}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "#333"}}
            >Random</button>
          </div>
        </div>
      </div>
  )
}

export default App
