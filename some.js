var _ = require('lodash');

const users = [
    {
        name: 'John',
        isActive: true
    },
    {
        name: 'Sarah',
        isActive: true
    },
    {
        name: 'Yaroslav',
        isActive: false
    },
];

const isArrayHasActiveUser = _.some(users, (item)=>{
    return item.isActive
});
console.log(isArrayHasActiveUser); // true

const isArrayHasNotActiveUser = _.some(users, {isActive: false});
console.log(isArrayHasNotActiveUser); // true