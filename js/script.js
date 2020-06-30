/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [
  {
    quote: "All we have to decide is what to do with the time that is given us.",
    source: "Gandalf",
    citation: "From, 'The Fellowship of the Ring', J.R.R. Tolkein'",
    year: "1954",
    bgcolor: "rgb(58, 249, 27)",
    textColor: "black"
  },
  {
    quote: "Real courage is when you know you’re licked before you begin, but you begin anyway and see it through no matter what.",
    source: "Atticus Finch",
    citation: "From, 'To Kill a Mockingbird', Harper Lee",
    year: "1960",
    bgcolor: "rgb(211, 254, 123)",
    textColor: "black"
  },
  {
    quote: "There is no greater agony than bearing an untold story inside you.",
    source: "Maya Angelou",
    citation: "From, 'I Know Why the Caged Bird Sings'",
    year: "2009",
    bgcolor: "rgb(53, 64, 96)",
    textColor: "white"
  },
  {
    quote: "Do I love you? My God, if your love were a grain of sand, mine would be a universe of beaches.",
    source: "Westley",
    citation: "From, 'The Princess Bride', William Goldman",
    year: "1973",
    bgcolor: "rgb(26, 15, 104)",
    textColor: "white"
  },
  {
    quote: "Get busy living or get busy dying.",
    source: "Andy Dufresne",
    citation: "From, 'Rita Hayworth and the Shawshank Redemption', Stephen King",
    year: "1982",
    bgcolor: "rgb(105, 35, 192)",
    textColor: "white"
  },
  {
    quote: "We’ve all got both light and dark inside us. What matters is the part we choose to act on. That’s who we really are.",
    source: "Sirius Black",
    citation: "From, 'Harry Potter And The Order Of The Phoenix', J.K. Rowling",
    year: "2004",
    bgcolor: "rgb(220, 150, 207)",
    textColor: "black"
  }
]



/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
  //generate random number based on length of quotes array
  var randNum = Math.floor(Math.random()*quotes.length);
  console.log("print quote" + randNum);
  //return one object from quotes array
  return quotes[randNum];
}


/***
 * `printQuote` function
***/
function printQuote(){
  //get one randomly selected object from quotes array
  var randQuote = getRandomQuote();
  //construct message with <p> tags and classes and insert object properties
  var bgColor = `${randQuote.bgcolor}`;
  var txtColor = `${randQuote.textColor}`;
  var message = `<p class="quote" style='color:${txtColor}'>${randQuote.quote}</p><p class="source" style='color:${txtColor}'>${randQuote.source}<span class="citation">${randQuote.citation}</span><span class="year">${randQuote.year}</span></p>`;

  //add entire message with <p> tags and text
  document.querySelector('#quote-box').innerHTML= message;
  document.querySelector('#load-quote').style.color = `${randQuote.textColor}`;
  document.querySelector('#load-quote').style.border = `2px solid ${randQuote.textColor}`;
  document.querySelector('h1').style.color = `${randQuote.textColor}`;
  document.querySelector('h1').style.borderBottom = `4px solid ${randQuote.textColor}`;
  document.body.style.backgroundColor = bgColor;

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
setInterval(printQuote, 5000);