//===================================================================
//======================== OBTENER PREGUNTAS ========================
//===================================================================
function getQuestions() {
    
    const totalQuestions = document.getElementById("totalQuestions").value;
    const category = document.getElementById("select-category").value;
    const difficulty = document.getElementById("select-difficulty").value;
    const type = document.getElementById("select-question-type").value;
    
    let url = `https://opentdb.com/api.php?amount=${totalQuestions}`;

    // si category==="8" quiere decir que no se escogió una categoría, las preguntas vienen variadas
    if(category !="8"){
        url += `&category=${category}`;
    }
    if(difficulty != "any"){
        url += `&difficulty=${difficulty}`;
    }
    if(type != "any"){
        url += `&type=${type}`;
    }    
    
    fetch(url)
        .then((response) => response.json())
        .then((data) => printData(data.results))
    
}

function printData(data) {
    //obtner los datos
    const containerData = document.getElementById("questions-container");
    //generar los datos
    let html = "";
    data.forEach(element => {
        html += `<div class="col-md-4 mt-3">
                    <div class="card h-100">
                        <div class="card-body">
                            ${element.question}
                        </div>
                    </div>
                </div>`;
    });
    //poner los datos en HTML
    containerData.innerHTML = html;


}

//===================================================================
//======================== OBTENER CATEGORIAS =======================
//===================================================================

function getCategories() {
    // alert("preguntas seleccionadas")
    // const totalQuestions = document.getElementById("totalQuestions").value;
    const url = "https://opentdb.com/api_category.php";

    fetch(url)
        .then((response) => response.json())
        .then((data) => printCategories(data.trivia_categories))
    
}

function printCategories(data) {
    
    const categoriesConatiner = document.getElementById("select-category");
    let html = `<option value="8">Any Category</option>`;
    data.forEach((element) => {
        html += `<option value="${element.id}">${element.name}</option>`
    })
    categoriesConatiner.innerHTML = html;
}

getCategories();