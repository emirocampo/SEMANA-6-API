import Request from "./Request.js"
import UI from "./UI.js"

const form = document.getElementById("form-questions");
const btn = document.getElementById("btn-send-answers");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    // alert("detenemos el envio");
    Request.getQuestions()
        .then(response => response.json())
        .then(data => UI.printQuestions(data.results))
});

Request.getCategories()
    .then(response => response.json())
    .then(data => UI.printCategories(data.trivia_categories))

// btn.addEventListener("")