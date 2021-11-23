function publicaComentario() {
    var formName = document.getElementById("formName");
    var formComent = document.getElementById("formComent");

    var dados = JSON.parse(localStorage.getItem("dadosComent"));

    if (dados == null) {
        localStorage.setItem("dadosComent", "[]");
        dados = [];  //cria o array
    } 
    var auxRegistro = {
        nome: formName.value,
        comentario: formComent.value
    }
    dados.push(auxRegistro);

    localStorage.setItem("dadosComent", JSON.stringify(dados));

    alert("Comentário publicado")

    formName.value = "";
    formComent.value = "";

}