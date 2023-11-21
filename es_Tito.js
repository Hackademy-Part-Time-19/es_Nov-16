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


let listaNome = listaProdotti.map(function (listaProdotti){
    return listaProdotti.nome
})


let listaPrezzo = listaProdotti.map(function (listaProdotti){
    return listaProdotti.prezzo
})

// console.log(listaNome);


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


// eswercizio n.2

