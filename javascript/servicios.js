const divWithQuote = document.getElementById("insertQuoteHere");

const getQuote = () => {
fetch("https://api.kanye.rest")
    .then((response) => response.json())
    .then((data) => (divWithQuote.innerHTML = data.quote));
};