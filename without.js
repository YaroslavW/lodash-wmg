var _ = require('lodash');

const arr = [1, 2, 3, 4];

const arrWithoutItemsTwoAndFour = _.without(arr, 2, 4);
console.log(arrWithoutItemsTwoAndFour); //[ 1, 3 ]

// ===>> Don't work with array of objects

const arrOfObjc = [{id:1}, {id:2}];
console.log(_.without(arrOfObjc,{id:1})); //[ { id: 1 }, { id: 2 } ]

// ===>> Don't work with function as second element

console.log(_.without(arrOfObjc, function(item){
    return  item.id === 1 
})); //[ { id: 1 }, { id: 2 } ]

// If we need delete item from jbiect - see method remove
