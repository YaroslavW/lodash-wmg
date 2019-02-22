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
    {
        name: 'Bob',
        isActive: false
    },

];

const activeUsers = _.groupBy(users, function(user){
    return user.isActive;
});
console.log(activeUsers);
// { true: 
//     [ { name: 'John', isActive: true },
//       { name: 'Sarah', isActive: true } ],
//    false: 
//     [ { name: 'Yaroslav', isActive: false },
//       { name: 'Bob', isActive: false } ] 
// }
const activeUsers1 = _.groupBy(users, 'isActive');
console.log(activeUsers1);
// { true: 
//     [ { name: 'John', isActive: true },
//       { name: 'Sarah', isActive: true } ],
//    false: 
//     [ { name: 'Yaroslav', isActive: false },
//       { name: 'Bob', isActive: false } ] 
// }