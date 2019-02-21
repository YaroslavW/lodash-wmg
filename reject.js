var _ = require('lodash');

const arrayOfObjects = [ {id:1, name: '1'}, {id:2, name: '2'} ];

// const rejectedOneArr = _.reject(arrayOfObjects, function(item) {
//     return item.id === 1
// });
const rejectedOneArr = _.reject(arrayOfObjects, {id:1});
console.log(rejectedOneArr); //  [ { id: 2, name: '2' } ]
console.log(arrayOfObjects); //  [ { id: 1, name: '1' }, { id: 2, name: '2' } ]