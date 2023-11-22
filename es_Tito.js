// esercizio n.1

let listaProdotti = [
    {
        id: 1,
        nome: "Iphone",
        prezzo: 1000,
    },
    {
        id: 2,
        nome: "Mac",
        prezzo: 3000,
    },

    {
        id: 3,
        nome: "Scrivania",
        prezzo: 200,
    },
    {
        id: 4,
        nome: "Lampadari",
        prezzo: 600,
    },
]


let listaNome = listaProdotti.sort(function(a,b){
    if (a.nome < b.nome)
    return -1;
if (a.nome > b.nome) 
return 1;
return 0;
    
})

// console.log(listaNome);

let listaPrezzo = listaProdotti.sort(function(a,b){
    if (a.prezzo < b.prezzo)
    return -1;
if (a.prezzo > b.prezzo) 
return 1;
return 0;
    
})

// console.log(listaPrezzo);


function listaFiltrata (listaProdotti){

    let listaFiltrata = []

for (let i = 0; i < listaProdotti.length; i++) {
    
    if(listaProdotti[i].prezzo > 250){

        listaFiltrata.push(listaProdotti[i])

    }
    
}

    return listaFiltrata;
}

let listaPrezzoMaggiore250 = listaFiltrata(listaProdotti);


// console.log(listaPrezzoMaggiore250);


let listaPrezzoMaggiore250_2 = listaProdotti.filter((listaPrezzo) => listaPrezzo.prezzo > 250)

// console.log(listaPrezzoMaggiore250_2);






// esercizio n.2

let url ="https://sitodiecommerce.com/paginaDelProdotto?idProdotto=12312312312&userId=314123&time=8999";

let urlsplittata = url.split("?")

let parametri = urlsplittata[1].split("&")

// console.log(parametri);


parametri.forEach(function (parametro) {

    let parametroSplittato = parametro.split("=")
    // console.log(parametroSplittato[1]);
    
})




// esercizio n.3


let frasePalindroma = "i topi non avevano nipoti";

// let fraseUnita = frasePalindroma.replace(/\W/g,"").toLowerCase();
// console.log(frasePalindroma);

// let fraseAlContrario = fraseUnita.split("").reverse().join();
// console.log(fraseAlContrario);

function palindroma (string){
    let fraseUnita = string.replace(/\W/g,"").toLowerCase();
    let fraseAlContrario = fraseUnita.split("").reverse().join("");
    let controlloFrase = fraseAlContrario === fraseUnita;

    return controlloFrase;

}


console.log(palindroma(frasePalindroma));



