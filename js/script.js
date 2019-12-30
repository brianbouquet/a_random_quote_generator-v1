/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

let div;
let html = '';
let quoteSelected = {};
let randomNumber;

/*** 
 * `quotes` array 
***/

let quotes = [
  {
    quote: 'Reality is wrong. Dreams are for real.',
    source: 'Tupac Shakur',
    citation: 'So Many Tears',
    year: 1995
  },
  {
    quote: 'Being happy is my goal, but greatness is my mission.',
    source: 'Childish Gambino',
    citation: 'I\'m Alright',
    year: 2010
  },
  {
    quote: 'Nobody built like you, you design yourself.',
    source: 'Jay-Z',
    citation: 'A Dream',
    year: 2002
  },
  {
    quote: 'Everybody dies, but not everybody lives.',
    source: 'Drake',
    citation: 'Moment 4 Life',
    year: 2010
  },
  {
    quote: 'Without order, nothing exists. Without chaos, nothing evolves.',
    source: 'Jedi Mind Tricks',
    citation: 'Heavy Metal Kings',
    year: 2006
  },
  {
    quote: 'We can\'t change the world unless we change ourselves.',
    source: 'The Notorious B.I.G.',
    year: 1994
  }
];



//log quotes object to console
//console.log(quotes);

/***
 * `getRandomQuote` function
***/

function getRandomQuote(quotes) {
  randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

//log randomly selected quote to console
//console.log(getRandomQuote(quotes));

/***
 * `printQuote` function
***/

function printQuote(quotes) {
  quoteSelected = getRandomQuote(quotes);
  html += '<p class="quote">' + quoteSelected[quote] + '</p>';
  html += '<p class="source">' + quoteSelected.source;
  if (quoteSelected.citation) {
    html += '<span class="citation">' + quoteSelected.citation + '</span>';
  }
  if (quoteSelected.year) {
    html += '<span class="year">' + quoteSelected.year + '</span>';
  }
  html += '</p>';
  console.log(html);
  div = document.getElementById('quote-box');
  div.innerHTML = html;
}

printQuote(quotes);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);