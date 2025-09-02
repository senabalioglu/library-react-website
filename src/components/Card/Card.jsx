import "./Card.css";

function Card({ bookItem, navigateFunc }) {
  return (
    <>
    {/*
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
      */}

      <div onClick={navigateFunc} className="book read">
        <div className="cover">
          <img src={bookItem.imgUrl} />
        </div>
        <div className="description">
          <p className="title"> {bookItem.title} <br />
            <span className="author"> {bookItem.author} </span>
            <br />
            <span className="author"> {bookItem.price} </span>
            </p>
        </div>
      </div>
    </>
  );
}

export default Card;
