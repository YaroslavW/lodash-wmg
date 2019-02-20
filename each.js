// to run this file press Ctrl + Alt + N
var _ = require('lodash');

// _.each([1,2,3,45,16,35,3], function(item){
//     console.log(item);
// });

const a = {id: 1, name: 'some name'};

// a.forEach(function(item){
//     console.log(item);
// });

// a.forEach((item)=>
//     console.log(item);
// );
// ==Error

_.each(a, (item)=>console.log(item));

// 1
// some name

// _.each(a, (item, index)=>console.log(item, index));

// 1 'id'
// some name name

let arr = [];

_.each(a,(item)=>{
    arr.push(item);
});

console.log(arr); //[ 1, 'some name' ]