console.log("JS at work!");

/* The Random Quote Generator - What does it do? */

/***
 * getRandomQuote(): Generates a random quote from the array by using Math.random()
 * printQuote(): Displays the random generated quote into the html
 * setInterval(): Display new random quote and background color every 5 seconds.
 ***/

var quotes=[
  {
   quote:"Motivation is what gets you started. Habit is what keeps you going.",
   source:"Jim Ryun",
   citation:"Somewhere",
   tag:"Motivational"
  },
  {
    quote:"Opportunities don’t happen, you create them.",
    source:"Chris Grosser",
    year: 1992
  },
  {
    quote:"It is during our darkest moments that we must focus to see the light.",
    source:"Aristotle Onassis"
  },
  {
    quote:"Always make a total effort, even when the odds are against you.",
    source:"Arnold Palmer"
  },
  {
    quote:"If you want to lift yourself up, lift up someone else.",
    source:"Booker T. Washington",
    tag:"Motivational"
  }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
  let randomNum = Math.floor(Math.random() * 5);
  let quoteNum = quotes[randomNum];
  return quoteNum;
}


/***
 * `getRandomColors` function
***/
function newColor(){
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let newRgb = `rgb(${r}, ${g}, ${b})`;
  return newRgb;
}


/***
 * `printQuote` function
***/
function printQuote(){
 let randomQuote = getRandomQuote();
 let changeColor = newColor();
 console.log(randomQuote);
 console.log(changeColor);
  let newp =`<p class="quote">${randomQuote.quote}</p>
             <p class="source">${randomQuote.source}`;
             if(randomQuote.citation){
                    newp +=`<span class="citation">${randomQuote.citation}</span>`;
             }
             if(randomQuote.year){
                    newp += `<span class="year">${randomQuote.year}</span>`;
             }
             if(randomQuote.tag){
                    newp += `<span class="tag">${randomQuote.tag}</span>`;
             }
             newp +=`</p>`;
  document.getElementById('quote-box').innerHTML = newp;
  document.body.style.backgroundColor = changeColor;
}


//Get new quotes automitcally every 5 seconds.
setInterval(() => {
  let randomQuote = getRandomQuote();
  let changeColor = newColor();
  console.log(randomQuote);
  console.log(changeColor);
   let newp =`<p class="quote">${randomQuote.quote}</p>
              <p class="source">${randomQuote.source}`;
              if(randomQuote.citation){
                     newp +=`<span class="citation">${randomQuote.citation}</span>`;
              }
              if(randomQuote.year){
                     newp += `<span class="year">${randomQuote.year}</span>`;
              }
              if(randomQuote.tag){
                     newp += `<span class="tag">${randomQuote.tag}</span>`;
              }
              newp +=`</p>`;
   document.getElementById('quote-box').innerHTML = newp;
   document.body.style.backgroundColor = changeColor;
}, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
const loadQuote = document.getElementById('load-quote');
loadQuote.addEventListener("click", printQuote, false);
loadQuote.addEventListener("click", newColor, false);
