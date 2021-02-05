import React, { useState } from 'react';

const Quote = () => {
  const [quoteObj, generateQuote] = useState({
    text: 'The price of greatness is responsibility.',
    author: 'Winston Churchill',
  });

  const random = max => Math.floor(Math.random() * Math.floor(max));

  const handClick = () => {
    fetch('https://type.fit/api/quotes')
      .then(response => response.json())
      .then(data => {
        const rand = random(data.length);
        const quote = data[rand];
        generateQuote({
          author: quote.author,
          text: quote.text,
        });
      });
  };

  return (
    <div>
      <button type="button" onClick={handClick}>generate</button>
      <h1>Quote</h1>
      <p>{quoteObj.text}</p>
      <h1>{quoteObj.author ? 'Author' : ''}</h1>
      <p>{quoteObj.author}</p>
    </div>
  );
};

export default Quote;
