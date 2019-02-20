var _ = require('lodash');

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

const firstTrue = _.find(users, 'active');
console.log(firstTrue); // { id: 1, name: 'Yaroslav', active: true }

const notActiveUser = _.find(users, ['active', false]);
console.log(notActiveUser); //{ id: 2, name: 'John', active: false }

const Sarah = _.find(users, ['name', 'Sarah']);
console.log(Sarah); //{ id: 3, name: 'Sarah', active: true }

const  firstIdMoreTwo = _.find(users, (item)=>{
    return item.id>1;
});
console.log(firstIdMoreTwo); //{ id: 2, name: 'John', active: false }