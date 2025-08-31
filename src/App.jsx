import { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import Categories from "./components/Categories/Categories";
import { motion } from "framer-motion";


function App() {
  const [bestSellersData, setBestSellersData] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/Library/BestSellers`)
      .then((res) => res.json())
      .then((data) => setBestSellersData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ marginTop: 40, marginBottom: 50 }}>
          <div className="header-container">
            {bestSellersData.slice(0, 5).map((bestImg) => (
              <motion.div
                whileHover={{ scale: 1.2 }}
                style={{ marginRight: 70 }}
                key={bestImg.id || bestImg.link}
              >
                <img
                  className="header-images"
                  src={bestImg.imgUrl}
                  alt={bestImg.title}
                />
              </motion.div>
            ))}
          </div>

          <div className="header-container">
            {bestSellersData.slice(5, 10).map((bestImg) => (
              <motion.div 
              whileHover={{ scale: 1.2 }} 
              style={{ marginLeft: 70 }} 
              key={bestImg.id || bestImg.link}>
                <img
                  className="header-images"
                  src={bestImg.imgUrl}
                  alt={bestImg.title}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="header-container">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Categories />
            <div className="book-list">
              {bestSellersData.map((best) => (
                <Card key={best.id || best.link} bookItem={best} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
