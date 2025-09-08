import "./Card.css";

function Card({ bookItem, navigateFunc }) {
  return (
    <>

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
