// setTimeout(()=>{
//  console.log('After 2 seconds')
// }, 2000)

// const { callbackify } = require("util");

// const names = ['Sheldon', 'Raj', 'Haword', 'Lenord']
// const shortNames = names.filter((name) => {
//     return name.length > 3;
// })
// console.log(shortNames)

// const geoCode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitiude: 0,
//             logitude: 0
//         }
//         callback(data)
//     }, 2000);
// }
// geoCode('India',(data)=>{
//     console.log(data)
// })

const add = (num1,num2, callback)=>{
    setTimeout(() => {
        callback(num1 + num2)
    }, 2000);
}
add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})