import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./DetailPage.css";

function DetailPage() {
  const { state } = useLocation();
  const { id, link } = state || {};
  const apiUrl = import.meta.env.VITE_API_URL;
  const [detailInfo, setDetailInfo] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/Library/BestSellers/${id}?link=${link}`)
      .then((res) => res.json())
      .then((data) => setDetailInfo(data))
      .catch((error) => console.log(error));
  }, [id, link]);

  return (
    <>
      <div className="detail-outline">
        <div className="top-container">
          <div className="img-container">
            <img className="detail-img" src={detailInfo.imgUrl} />
          </div>
          <div className="info-container">
            <div>
              <h1> {detailInfo.title} </h1>
              <h3> Author: {detailInfo.author} </h3>
              <h3> Publisher: {detailInfo.publisher} </h3>
              <div>
                {detailInfo.categories.map((category, index) => (
                  <div className="category-cont">
                    <h4 key={index}> {category} </h4>
                  </div>
                ))}
              </div>
            </div>
            <div className="price-container">
              <h2 style={{ textAlign: "center" }}>
                {" "}
                Price: {detailInfo.price} ₺{" "}
              </h2>
            </div>
          </div>
        </div>

        <div className="desc-border">
          <p> {detailInfo.description} </p>
        </div>
      </div>
    </>
  );
}

export default DetailPage;
