const CURRENCY_CODE = ["AUD", "CAD", "CZK", "DKK", "HUF", "ILS", "JPY", "LVL", "LTL", "NOK", "SKK", "SEK", "CHF", "RUB", "GBP", "USD", "BYR", "EUR", "GEL", "PLZ"];
const URL = "https://api.privatbank.ua/p24api/exchange_rates?json&date=";

/*
* Gets current date
*
*/ 
let currentDate = () => {
    const date = new Date();

    return (date.getMonth()+1) + "." + date.getDate() + "." + date.getFullYear();
};

const from = document.querySelector("#from");
const to = document.querySelector("#to");
// const from = document.querySelector("#from");
// const from = document.querySelector("#from");