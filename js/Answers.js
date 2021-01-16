let arrayResponsesSent = [];
let arrayAnswersCorrect = [];
export default class Answers {
    
    static getSelectedAnswers(){
        let lista = document.getElementById("form-questions-container");
        
        for(let i = 0; i <= (lista.childNodes.length -2); i++) {
            //console.log(lista.childNodes[i]);
            let bloque = document.getElementById(`answer${i}`);
            let rdo = 0;
            if(bloque.childNodes.length == 8){
                 rdo = 4;
            }else{
                 rdo = 2;
            }
            for(let j=0; j < rdo; j++){
                // console.log(`i: ${i} j: ${j}`);
                if(document.getElementById(`radioAnswers${i}${j}`).checked){
                    arrayResponsesSent.push(document.getElementById(`radioAnswers${i}${j}`).value)
                }
            }
            
        }
        let msjResponse = "";
        let score = 0;
        for(let i=0; i< arrayResponsesSent.length; i++){
            if(arrayResponsesSent[i]==arrayAnswersCorrect[i]){
                score += 1;
            }else{
                msjResponse += `Usted se equivocó en la pregunta ${i+1}, la respuesta correcta era: ${arrayAnswersCorrect[i]}. `
            }
        }
        msjResponse += `SU PUNTAJE ES: ${score}`
        alert(msjResponse);
       
    }

    static corectAnswers(data){
        data.forEach(element => {
            arrayAnswersCorrect.push(element.correct_answer);
            // console.log(element.incorrect_answers);
        });
    }

    static answersArray(data){
        data.forEach(element => {
            element.incorrect_answers.push(element.correct_answer);
        });
    }
}