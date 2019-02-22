var _ = require('lodash');

// const arr = [1, "name", true, null];
// const res = _.every(arr, Boolean);
// console.log(res); // false


const users = [
    {
        name: 'John',
        isActive: true
    },
    {
        name: 'Sarah',
        isActive: true
    },
];

const AllUsersIsActive = _.every(users, function(item){
    return item.isActive === true;
});
console.log(AllUsersIsActive); // true

// ===> Refactoring
const AllUsersIsActive1 = _.every(users, function(item){
    return item.isActive
});
console.log(AllUsersIsActive1); //true

const AllUsersIsActive2 = _.every(users, {isActive: true});
console.log(AllUsersIsActive2); // true