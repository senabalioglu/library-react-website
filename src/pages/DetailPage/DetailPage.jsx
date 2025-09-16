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

  const dateStr = detailInfo.date ;
  const date = new Date(dateStr);

  const formatted = date.toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

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
              <h3> Publish Date: {formatted} </h3>
              <h2 style={{ color: "aliceblue", marginTop: 20 }}>
                {detailInfo.pageNum} Pages{" "}
              </h2>
              <div>
                <h1> {detailInfo.subCategories} </h1>
              </div>
            </div>
            <div className="price-container">
              <h2 className="price-text"> {detailInfo.price} ₺ </h2>
            </div>
          </div>
        </div>

        <div className="desc-border">
          <p className="desc-text"> {detailInfo.description} </p>
        </div>
      </div>
    </>
  );
}

export default DetailPage;
