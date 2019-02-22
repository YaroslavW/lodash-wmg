var _ = require('lodash');

const arr = [1, 2, 3, 4, 5];

const sum = _.reduce(arr, function( a, b){
    return a+b
}, 0);
console.log(sum);


const sum1 = _.reduce(arr, ( a, b) =>{
    return a+b
}, 0);
console.log(sum1);

const users = [
    {
        id: 20,
        name: 'Bob'
    },
    {
        id: 2,
        name: 'Boby'
    },
    {
        id: 80,
        name: 'Bob'
    },
    {
        id: 10,
        name: 'Bimbo'
    }
];

const allIdBob = _.reduce(users, (memo, item)=>{
   if(item.name ==='Bob'){
    memo.push(item.id);
   }
   return memo;
}, []);
console.log(allIdBob); // [ 20, 80 ]

const sumAllIdBob = _.reduce(users, (memo, item)=>{
    if(item.name ==='Bob'){
     return memo + item.id;
    }
    return memo;
 }, 0);
 console.log(sumAllIdBob); // 100 