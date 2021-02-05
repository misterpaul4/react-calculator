/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

const random = max => Math.floor(Math.random() * Math.floor(max));

fetch('https://type.fit/api/quotes')
  .then(response => response.json())
  .then(data => {
    const randQuote = data[random(data.length)];
    console.log(randQuote);
  });

const quoteData = async () => {
  const url = 'https://type.fit/api/quotes';

  const response = await fetch(url);
  const jsonData = await response.json();

  return jsonData;
};

export default quoteData;
