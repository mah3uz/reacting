import Navbar from "./components/Navbar.jsx"
import Card from "./components/Card.jsx"
import airData from "./data/airbnb.js"

function App() {
  return (
    <div id="App">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <div className="my-12">
          <h1 className="text-gray-800 font-bold text-6xl mb-6">Online Experiences</h1>
          <p className="text-gray-600 font-medium">
            Join unique interactive activities led by one-of-a-kind hosts — all without leaving
            home.
          </p>
        </div>
        <div className="flex justify-center gap-4 my-4">
          {airData.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
