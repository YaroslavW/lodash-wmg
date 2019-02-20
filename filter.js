var _ = require('lodash');

const arr = [1,2,3,4,5,6,7,8,9];

const lessFour = _.filter(arr, (item)=>{
    return item < 4;
});
console.log(lessFour); //[ 1, 2, 3 ]

const users = [
    {
        id: 1,
        name:'Yaroslav',
        active: true
    },
    {
        id: 2,
        name:'John',
        active: false
    },
    {
        id: 3,
        name:'Sarah',
        active: true
    }
];

const activeUsers = _.filter(users, 'active');
console.log(activeUsers);
// [ { id: 1, name: 'Yaroslav', active: true },
//   { id: 3, name: 'Sarah', active: true } ]

const Yaroslav = _.filter(users, (item)=>{
    return item.name === 'Yaroslav';
});
console.log(Yaroslav); //[ { id: 1, name: 'Yaroslav', active: true } ]