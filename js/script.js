/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

//instructor note: please reject project if this does not meet "Exceeds Expectations" grade

//variable declarations
let div;
let html = '';
let quoteSelected = {};
let randomQuote = {};
let randomQuotes = [];
let randomNumber;
let timeInt;

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

//create a copy of quotes array
let quotesCopy = [...quotes];

//random quote function used to select a random quote from quotes object
function getRandomQuote(quotes) {
  //check to see if quotes array is empty and restore quotes
  if (quotes.length === 0) {
    randomQuotes.forEach(quote => quotes.push(quote));
    randomQuotes = [];
  }
  //get random number
  randomNumber = Math.floor(Math.random() * quotes.length);
  //remove randomly selected quote from quotes array and store in randomQuote
  randomQuote = quotes[randomNumber];
  //push randomly selected quote to random quotes array
  randomQuotes.push(quotes.splice(randomNumber, 1));
  return randomQuote;
}

//random color function used to generate randomly generated RGB color
function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let rgbColor = 'rgb(' + r + ' ,' + g + ' ,' + b + ")";
  //log randomly generated RGB color to console
  console.log(rgbColor);
  return rgbColor;
}

//print function used to assemble html and print to document
function printQuote() {
  quoteSelected = getRandomQuote(quotesCopy);
  //assemble html string
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
  //set "quote-box" innerHTML to html string assembled
  div = document.getElementById('quote-box');
  div.innerHTML = html;
  //set document's background color to randomly generated RGB color
  document.body.style.background = randomColor();
  //reset changeQuote() timer
  resetTimer(timeInt);
}

//interval function used to rotate quotes after set duration
function changeQuote() {
  timeInt = setInterval(printQuote, 10000);
}

//clear interval function use to reset timer
function resetTimer(timeInt) {
  clearInterval(timeInt);
  changeQuote();
}

//call printQuote function when "Show Another Quote" button is clicked
document.getElementById('load-quote').addEventListener("click", printQuote, false);