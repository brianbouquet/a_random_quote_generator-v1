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

//define quotes array of quote objects

const quotes = [
  {
    quote: 'Reality is wrong. Dreams are for real.',
    source: 'Tupac Shakur',
    citation: 'So Many Tears',
    year: 1995,
    category: 'Mainstream Rap',
    region: 'West Coast'
  },
  {
    quote: 'Being happy is my goal, but greatness is my mission.',
    source: 'Childish Gambino',
    citation: 'I\'m Alright',
    year: 2010,
    category: 'Mainstream Hip Hop'
  },
  {
    quote: 'Nobody built like you, you design yourself.',
    source: 'Jay-Z',
    citation: 'A Dream',
    year: 2002,
    category: 'Mainstream Rap',
    region: 'East Coast'
  },
  {
    quote: 'Everybody dies, but not everybody lives.',
    source: 'Drake',
    citation: 'Moment 4 Life',
    year: 2010,
    category: 'Mainstream Rap'
  },
  {
    quote: 'Without order, nothing exists. Without chaos, nothing evolves.',
    source: 'Jedi Mind Tricks',
    citation: 'Heavy Metal Kings',
    year: 2006,
    category: 'Underground Hip Hop'
  },
  {
    quote: 'We can\'t change the world unless we change ourselves.',
    source: 'The Notorious B.I.G.',
    year: 1994,
    category: 'Mainstream Rap',
    region: "East Coast"
  }
];



//log quotes object to console
//console.log(quotes);

//random quote function used to select a random quote from quotes object

function getRandomQuote(quotes) {
  randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

//log randomly selected quote to console
//console.log(getRandomQuote(quotes));

//print function used to assemble html and print to document

function printQuote() {
  quoteSelected = getRandomQuote(quotes);
  html = "";
  html += '<p class="quote">' + quoteSelected.quote + '</p>';
  html += '<p class="source">' + quoteSelected.source;
  if (quoteSelected.citation) {
    html += '<span class="citation">' + quoteSelected.citation + '</span>';
  }
  if (quoteSelected.year) {
    html += '<span class="year">' + quoteSelected.year + '</span>';
  }
  html += '</p>'
  html += '<p class="category">' + quoteSelected.category;
  if (quoteSelected.region) {  
    html += '<span class="region">' + quoteSelected.region + '</span>';
  }
  html += '</p>';

  //log printQuote generated html to console
  //console.log(html);
  div = document.getElementById('quote-box');
  div.innerHTML = html;
}

//test printQuote function
//printQuote();

//call printQuote function when "Show Another Quote" button is clicked

document.getElementById('load-quote').addEventListener("click", printQuote, false);