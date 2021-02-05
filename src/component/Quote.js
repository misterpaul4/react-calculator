/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, { useState } from 'react';
// import dd from '../utils/quoteGenerator';

const Quote = () => {
  const [quoteObj, generateQuote] = useState({
    text: '',
    author: '',
  });

  const random = max => Math.floor(Math.random() * Math.floor(max));

  const handClick = () => {
    fetch('https://type.fit/api/quotes')
      .then(response => response.json())
      .then(data => {
        const quote = data[random(data.length)];
        console.log(quote);
        generateQuote({
          text: quote.text,
          author: quote.author,
        });
      });
  };

  return (
    <div className="container text-center">
      <button type="button" onClick={handClick}>generate</button>
      <h1>Quote</h1>
      <p>{quoteObj.text}</p>
      <h1>author</h1>
      <p>{quoteObj.author}</p>
    </div>
  );
};

export default Quote;
