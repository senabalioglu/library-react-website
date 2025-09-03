import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import Categories from "../../components/Categories/Categories";
import { motion } from "motion/react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [bestSellersData, setBestSellersData] = useState([]);
  const [text, setText] = useState("");
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  //https://localhost:7056/api/Library/BestSellers?query=Sal

  useEffect(() => {
    const url = text.trim()
      ? `${apiUrl}/Library/BestSellers?query=${encodeURIComponent(text)}`
      : `${apiUrl}/Library/BestSellers`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setBestSellersData(data))
      .catch((err) => console.log(err));
  }, [text]);

  const goToDetail = (id, link) => {
    navigate("/details", { state: { id, link } });
  };
  
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="header-container">
          <SearchBar
            searchValue={text}
            onValueChange={(newText) => {
              setText(newText);
              console.log(newText);
            }}
          />
        </div>
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
        </div>

        <div className="header-container">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Categories />
            <div className="book-list">
              {bestSellersData.map((best) => (
                <Card navigateFunc={() => goToDetail(best.id, best.link)} key={best.id || best.link} bookItem={best} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
