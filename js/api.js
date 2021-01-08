//===================================================================
//======================== OBTENER PREGUNTAS ========================
//===================================================================
function getQuestions() {
    // alert("preguntas seleccionadas")
    const totalQuestions = document.getElementById("totalQuestions").value;
    const url = `https://opentdb.com/api.php?amount=${totalQuestions}`;

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
    let html = "";
    data.forEach((element) => {
        html += `<option value="${element.id}">${element.name}</option>`
    })
    categoriesConatiner.innerHTML = html;
}

getCategories();