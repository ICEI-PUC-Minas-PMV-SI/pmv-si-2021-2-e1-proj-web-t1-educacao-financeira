function publicaComentario() {
    var formName = document.getElementById("formName");
    var formComent = document.getElementById("formComent");

    var dados = JSON.parse(localStorage.getItem("dadosComent_podcast"));

    if (dados == null) {
        localStorage.setItem("dadosComent_podcast", "[]");
        dados = [];  //cria o array
    } 
    var auxRegistro = {
        nome: formName.value,
        comentario: formComent.value
    }
    dados.push(auxRegistro);

    localStorage.setItem("dadosComent_podcast", JSON.stringify(dados));

    alert("Comentário publicado")

    formName.value = "";
    formComent.value = "";

}
function main() {
    var dados = JSON.parse(localStorage.getItem("dadosComent_podcast"));
    // console.log(dados)
    let a = retornaDadoHTLM(dados);
}
function retornaDadoHTLM(dados){

    let array = Object.values(dados); //transforma objeto em array

    for(i=0; i<array.length; i++){
        let node_name = document.createElement("h6"); //cria elemento
        let name = document.createTextNode(array[i].nome); //cria texto com os dados do array na posição declarada
        node_name.appendChild(name); //adiciona o texto ao elemento 

        let node_comentario = document.createElement("p");
        let comentario = document.createTextNode(array[i].comentario);
        node_comentario.appendChild(comentario);

        let node_line = document.createElement("hr"); //cria linha horizontal

        document.getElementById("comentarios").appendChild(node_name); //adiciona no html o elemento criado com os dados
        document.getElementById("comentarios").appendChild(node_comentario);
        document.getElementById("comentarios").appendChild(node_line);
    }  
}
main()