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
    <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}>
      <p>
        simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </Book>
    <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
  </section>;
}
// Our Sub Component.
const Book = ({img,title, author, children}) => {
  // console.log(props);
  return (<article>
          <img src={img} />
          <h1>{title}</h1>
          <h4 style={{color:'#ff0000',fontStyle:'italic',marginTop:'5px'}}>{author}</h4>
          {children}
        </article>);
}
ReactDom.render(<BookList/>, document.getElementById('root'));

export default BookList;