var _ = require('lodash');

const arrayOfObjects = [ {id:1, name: '1'}, {id:2, name: '2'} ];

// const withoutObjWithIdEqvalTwo = _.remove(arrayOfObjects, function(item){
//     return item.id === 1
// });

// console.log(withoutObjWithIdEqvalTwo); //  [ { id: 1, name: '1' } ]
// console.log(arrayOfObjects); //  [ { id: 2, name: '2' } ]

// ====>> More correctly do so

const filteredArr = _.filter(arrayOfObjects, function(item) {
    return item.id === 1
});
console.log(filteredArr); //  [ { id: 1, name: '1' } ]
console.log(arrayOfObjects); //  [ { id: 1, name: '1' }, { id: 2, name: '2' } ]

// If you need reverse mthod like filter - see reject