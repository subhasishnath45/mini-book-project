import React from 'react';
import ReactDom from 'react-dom';
// CSS import
import './index.css';

// let's make first book object
const firstBook = {
  img: 'https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg',
  title: 'Ikigai: The Japanese secret to a long and happy life',
  author: 'Héctor García'
}
const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/71Ctz4sO6KL._AC_UL200_SR200,200_.jpg',
  title: 'Keep Sharp: Build a Better Brain at Any Age',
  author: 'Sanjay Gupta M.D.'
}
// Our main componwnt
function BookList(){
return <section className='booklist'>
    <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
    <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
  </section>;
}
// Our Sub Component.
const Book = (props) => {
  // console.log(props);
  return (<article>
          <img src={props.img} />
          <h1>{props.title}</h1>
          <h4 style={{color:'#ff0000',fontStyle:'italic',marginTop:'5px'}}>{props.author}</h4>
        </article>);
}
ReactDom.render(<BookList/>, document.getElementById('root'));

export default BookList;