import { useState, useEffect } from "react"
import Card from "./components/Card/Card";
import Categories from "./components/Categories/Categories";

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
      <div style={{display: 'flex', flexDirection: 'row'}} >
        <Categories />
        <div className="book-list" >
          {
            bestSellersData.map((best) => (
              <>
                <Card bookItem={best} />
              </>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
