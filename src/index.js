window.onload = () => game.init()


let form = document.querySelector('#form-container')
let rank = document.querySelector('.rank-container')
let record = document.querySelector('#record')
let button = document.querySelector('btn')
let list = document.querySelector('.list')
let input = document.querySelector('#input')



// Leer los elementos de la lista guardados en el almacenamiento local



function sendForm() {



    const dataBase = localStorage.getItem('record-list') //Comprueba el local storage
    const dataBaseList = dataBase ? JSON.parse(dataBase) : [] // comprueba si hay record-list en el localStorage(parseado),sino esta, crea un array vacio
    const newRecord = {  //esto es el objeto que va a llevar la lista del LS
        name: input.value,
        score: Number(record.textContent)
    }
    dataBaseList.push(newRecord) // pusheas el nuevo record a la lista de LS
    const newList = dataBaseList.sort((a, b) => { //ordenado la lista de orden descendiente
        return b.score - a.score
    })
    newList.length = 3 // limita que la lista siempre tenga 3 valores
    localStorage.setItem('record-list', JSON.stringify(newList)) //guarda el nuevo record en la lista de LS(en string, es el unico valor que acepta LS)

    newList.forEach(elm => { // para cada elemento de la lista , crea el elemento en el html y y le da el valor del objeto(clave y valor)
        let newLi = document.createElement('li')
        newLi.innerHTML = `
        <p>${elm.name} - ${elm.score} </p>`
        list.append(newLi)
    });

    form.classList.toggle('hidden')
    rank.classList.toggle('hidden')



}