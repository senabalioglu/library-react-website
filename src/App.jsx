import { useState, useEffect } from "react"

function App() {

  const [bestSellersData, setBestSellersData] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/Library/BestSellers`)
    .then((res) => res.json())
    .then((data) => setBestSellersData(data))
    .catch((err) => console.log(err))
  }, [])
  return (
    <>
      <div>
        <h2> Library App </h2>
        <div>
          {
            bestSellersData.map((best) => (
              <>
                <li> {best.title} </li>
              </>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
