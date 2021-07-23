// #1

// const arr = []
// for(var i = 0; i < 10; i++){
//     arr.push(Math.floor(Math.random() * (200 - 100) + 100))
// }
// console.log(arr);

// const calc = arr.filter(item => {
//     if(item % 21 === 0 || item % 7 === 0 || item % 39 === 0){
//        return item
//     }
// })
// console.log(calc);

// let obj = {...calc}
// console.log(obj);

// const {...rest} = obj
// let a = rest
// let b = a
// console.log(a);
// console.log(b);

// calc.forEach(item => {
//     let card = Card(item)
//     console.log(card)
// })


// function Card(el){
//     return `
//     <div class = 'card'>
//         <ul>
//             <li>
//                 ${el}
//             </li>
//         </ul>
//     </div>
//     `
// }



// #2

// let obj = [
//     {
//         name: 'Meerimay',
//         age: 21,
//         job: 'Frontend',
//         salary: 0,
//         hobby:'reading'
//     },
//     {
//         name: 'Diana',
//         age: 16,
//         job: 'Frontend',
//         salary: 0,
//         hobby:'reading'
//     },
//     {
//         name: 'Vika',
//         age: 16,
//         job: 'Frontend',
//         salary: 10,
//         hobby:'reading'
//     },
//     {
//         name: 'Nurik',
//         age: 17,
//         job: 'Frontend',
//         salary: 0,
//         hobby:'reading'
//     },
//     {
//         name: 'Rafuk',
//         age: 15,
//         job: 'Frontend',
//         salary: 0,
//         hobby:'reading'
//     }
// ]

// for(var i = 0; i < obj.length; i++){
//     obj[i].salary += +prompt('salary')
// }
// console.log(obj);

// obj.forEach(item => {
//     let card = Card(item)
//     console.log(card)
// })

// function Card(el){
//     return `
//     <div class = 'card'>
//         <h1> Name: ${el.name} </h1>
//         <h1> Age: ${el.age} </h1>
//         <h1> Job: ${el.job} </h1>
//         <h1> Salary: ${el.salary} </h1>
//         <h1> Hobby: ${el.hobby} </h1>
//     </div>
//     `
// }

// let narr = []
// for(var i = 0; i < obj.length; i++){
//     narr.push(obj[i].salary)
// }
// console.log(narr);

// console.log(narr.sort(function(a , b) {return b - a}));



// #3

let arrs = []
function calc(dlina, arr){
    for(var i = 0; i < l; i++){
        arr.push(Math.floor(Math.random() * (200 - 10) + 10))
    }
    console.log(arr);
    
}
calc(+prompt('length'), arrs)