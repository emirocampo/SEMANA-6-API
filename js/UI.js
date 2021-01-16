
export default class UI {
    static printCategories(categories) {
        const container = document.getElementById("select-category");
        container.innerHTML = `<option value="8">Any Category</option>`;
        categories.forEach(element => {
            container.innerHTML += `<option value="${element.id}">${element.name}</option>`
        })
    }
    //                    data = data.results ==> vector de objetos, cada objeto es un pregunta.
    static printQuestions(data){
        const container = document.getElementById("form-questions-container");
        // const containerBtn = document.getElementById("btn-send-answers");        

        data.forEach(element => {
            element.incorrect_answers.push(element.correct_answer);
            element.incorrect_answers.sort();
        });

        container.innerHTML="";

        data.forEach((element,i) => {
            let answerBody = "";
            element.incorrect_answers.forEach((element,j) => {
                answerBody += `<div class="form-check">
                                    <input class="form-check-input" type="radio" name="radioAnswers${i}" id="radioAnswers${i}${j}" value="${element}">
                                    <label class="form-check-label" for="radioAnswers${i}">
                                        ${element}
                                    </label>
                                </div>`;
            });
            container.innerHTML += `<div class="col-md-4 mt-3">
                                        <div class="card mx-1 h-100">
                                            <div class="card-body" id="answer${i}">
                                                <p>
                                                    ${element.question}
                                                </p>
                                                ${answerBody}
                                            </div>
                                        </div>
                                    </div>`
        });
        container.innerHTML += `<div class="row col-md-4 mx-1" id="btn-send-answers">
                                    <input type="submit" value="Enviar respuestas" class="btn btn-primary mt-5">
                                </div>`;
        // containerBtn.innerHTML = ` <!-- <input type="submit" value="Enviar respuestas" class="btn btn-primary mt-5" id="btn-send-answers">`;
    }

    static getArrayAnswersCorrect(){
        return arrayAnswersCorrect;
    }
}