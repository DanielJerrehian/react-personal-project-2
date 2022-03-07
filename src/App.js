import data from "./data/data.js"
import Navbar from "./components/Navbar"
import Card from "./components/Card"

export default function App() {

  const cards = data.map(location => {
    return (
      <Card 
        key={location.id}
        location={location}
      />
    )
  })

  return (
    <div className="main">
      <Navbar />
      <div className="cards">
        {cards}
      </div>
    </div>
  )
}

