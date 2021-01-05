import React from 'react';
import ReactDom from 'react-dom';

function BookList(){
return <section>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
  </section>;
}
// Our sub components.
const Book = () => {
  return <article>
    <Image/>
    <Title/>
    <Author/>
  </article>
}
const Image = () => {
  return <img src="https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg" />
};
const Title = () => {
  return <h1>Ikigai: The Japanese secret to a long and happy life</h1>;
};
const Author = () => {
  return <h4>Héctor García</h4>;
};
ReactDom.render(<BookList/>, document.getElementById('root'));

export default BookList;