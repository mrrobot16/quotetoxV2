// import { get } from "services/http"

export const defaultQuote = "A lion does not concern himself with the opinion's of the sheep.";

const quotes = [
  defaultQuote,
  "Defeated are those who stop fighting.",
  "Si un perdedor hace muchos esfuerzos, quizas pueda sobrepasar el poder que tiene un guerrero distinguido.",
  "If a loser does great efforts, perhaps he can surpass the power of a distinguished warrior.",
  "Nada es imposible para el que lucha.",
  "Nothing is impossible for the one who fights.",
  "Mas vale un dia como leon que cien como cordero",
  "A un leon no se preocupa por la opinion de los cordero",
];

const fetchQuotes = () => {
  // console.log('get("https://quotetox.herokuapp.com/quotes")', get("https://quotetox.herokuapp.com/quotes"))
}

export {
  quotes,
  fetchQuotes,

}
