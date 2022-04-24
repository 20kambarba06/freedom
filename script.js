let arr_cars = [
    impala = {

        name: 'impala',
        year: 1967,
        isRadio: true,
        color: 'black',
        engine: 6.7,
        price: 80000

    },
    corvette = {
        name: 'corvette',
        year: 1967,
        isRadio: false,
        color: 'red',
        engine: 7,
        price: 300000

    },
    camaro = {
        name: 'camaro',
        year: 1967,
        isRadio: true,
        color: 'white',
        engine: 5.3,
        price: 100000

    },
]


////////////////1////////////////
let name = prompt(`We have: Impala,Corvette and Camaro`).trim().toLowerCase()
let find = arr_cars.find(item => item.name.toLowerCase() === name.toLowerCase())
////////////////2,3////////////////
let find_ofcar = confirm(`Do you want to delete this car?
Car: ${find.name}
Year: ${find.year}
Radio: ${find.isRadio}
Color: ${find.color}
Engine: ${find.engine}
Price: ${find.price}`)
////////////4////////////////
if (find_ofcar === true) {

    let finded = arr_cars.find((item, index) => item.name === name)

    let idx = arr_cars.indexOf(finded)

    arr_cars.splice(idx, 1)

    


} else {}
console.log(arr_cars);


