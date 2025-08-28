import "./Card.css";

function Card({ bookItem }) {
  return (
    <>
      <div className="book-container">
        <img className="book-img" src={bookItem.imgUrl} />
        <div className="inner-container">
          <div>
            <h3 className="book-title">{bookItem.title}</h3>
            <p className="book-author">{bookItem.author}</p>
          </div>
          <p className="book-price">{bookItem.price} ₺ </p>
        </div>
      </div>
    </>
  );
}

export default Card;
