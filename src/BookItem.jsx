import Image from "./Image.jsx";
const BookItem = props => {
    console.log("props:");
    console.log(props);
    return (
      <div>
        <div className="card-title"><h3>{props.book.name}</h3></div>
        <div className="card-text"><h5>Жанр: {props.book.category}</h5></div>
        <div className="card-text"><h6>Написал(а): {props.book.author}</h6></div>
        <Image src={props.book.imageCover} />
        {/* <button onClick={props.removeBook.bind(null, props.book)}  className="add_item btn btn-lg btn-warning" >Удалить</button> */}
        <div className="card-text"><h6>Цена: {props.book.price}</h6></div>
        <button onClick={props.addBookToCart.bind(null, props.book)} className="btn btn-lg btn-success mx-1" >Купить</button>
      </div>
    );
  };
  export default BookItem;