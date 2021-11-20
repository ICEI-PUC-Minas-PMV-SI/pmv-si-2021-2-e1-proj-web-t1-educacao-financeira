//pegar url
function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}
//executa os metodos criados
function main(){
    //pega dados da api
    let data = fazGet("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL");
    //converte dados para json
    let dados = JSON.parse(data);
    // console.log(dados);
    let a = retornaDadoHTLM(dados);
}
function retornaDadoHTLM(dados){

    let array = Object.values(dados); //transforma objeto em array

    let cotacao = document.getElementById("cotacao");

    for(i=0; i<array.length; i++){
        let node = document.createElement("p");

        let name = document.createTextNode(array[i].name);
        node.appendChild(name);

        let space = document.createTextNode(" : R$ ");
        node.appendChild(space);

        let price = document.createTextNode(array[i].bid);
        node.appendChild(price);
        document.getElementById("cotacao").appendChild(node);    
        
    }


}
main()
// api 
// https://docs.awesomeapi.com.br/api-de-moedas
// https://dadosabertos.bcb.gov.br/dataset/dolar-americano-usd-todos-os-boletins-diarios/resource/ae69aa94-4194-45a6-8bae-12904af7e176