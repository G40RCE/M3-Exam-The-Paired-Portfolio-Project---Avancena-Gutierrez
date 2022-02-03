// For the 5 different quotes selection
function toggleText(){
    var firstQuote = document.getElementById('quote');
    if (firstQuote.style.display === "none") {
        firstQuote.style.display = "block";
    } 
    else {
        firstQuote.style.display = "none";
    }
}
function toggleText2(){
    var secondQuote = document.getElementById('quote2');
    if (secondQuote.style.display === "none") {
        secondQuote.style.display = "block";
    } 
    else {
        secondQuote.style.display = "none";
    }
}
function toggleText3(){
    var thirdQuote = document.getElementById('quote3');
    if (thirdQuote.style.display === "none") {
        thirdQuote.style.display = "block";
    } 
    else {
        thirdQuote.style.display = "none";
    }
}

function toggleText4(){
    var fourthQuote = document.getElementById('quote4');
    if (fourthQuote.style.display === "none") {
        fourthQuote.style.display = "block";
    } 
    else {
        fourthQuote.style.display = "none";
    }
}
function toggleText5(){
    var fifthQuote = document.getElementById('quote5');
    if (fifthQuote.style.display === "none") {
        fifthQuote.style.display = "block";
    } 
    else {
        fifthQuote.style.display = "none";
    }
}
// For random quote with different names
var quotes = [
    'All serious daring starts from within. -Harriet Beecher Stowe',
    'Wisdom begins in wonder. -Socrates',
    'Change in all things is sweet. - Aristotle',
    'What you fear is that which requires action to overcome. -Byron Pulsifer',
    'Real magic in relationships means an absence of judgement of others. -Wayne Dyer',
    'I never think of the future. It comes soon enough. -Albert Einstein',
    'Important principles may, and must, be inflexible. -Abraham Lincoln',
    'Courage is going from failure to failure without losing enthusiasm. -Winston Churchill',
    'Only do what your heart tells you. -Princess Diana',
    'No one can make you feel inferior without your consent. -Eleanor Roosevelt',
    'Victory belongs to the most persevering. -Napoleon Bonaparte'
]

function randomQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('randomquote').innerHTML = quotes[randomNumber];
}

