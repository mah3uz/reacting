import Navbar from "./components/Navbar.jsx"
import PhotoCard from "./components/PhotoCard.jsx"
import { useId } from "react"

function App() {
  // https://www.freecodecamp.org/news/how-to-implement-infinite-scroll-in-next-js/
  const id = useId()

  return (
    <div id="App">
      <Navbar />

      <div className="max-w-7xl mx-auto">
        <div className="my-12">
          <h1 className="text-gray-800 font-bold text-6xl mb-6">Real Experiences</h1>
          <p className="text-gray-600 font-medium">
            See the beauty of world led by one-of-a-kind hosts — all without leaving home.
          </p>
        </div>

        <div className="columns-1 md:columns-3">
          {range(0, 25).map((num) => (
            <PhotoCard key={Math.random()} url={`https://source.unsplash.com/featured/${num}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

const range = (start, end, step = 1) => {
  let output = []

  if (typeof end === "undefined") {
    end = start
    start = 0
  }

  for (let i = start; i < end; i += step) {
    output.push(i)
  }

  return output
}

export default App
