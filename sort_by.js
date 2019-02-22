var _ = require('lodash');

const users = [
    {
        name: 'John',
        like: 5,
    },
    {
        name: 'Bob',
        like: 15,
    },
    {
        name: 'Jona',
        like: 1,
    },

];

const sortByLike = _.sortBy(users, [(user)=> {
    return user.like;
}]);
console.log(sortByLike);
//[ { name: 'Lana', like: 1 },
// { name: 'John', like: 5 },
// { name: 'Bob', like: 15 } ]

const sortByLike1 = _.sortBy(users, ['name']);
console.log(sortByLike1);
// [ { name: 'Bob', like: 15 },
//   { name: 'John', like: 5 },
//   { name: 'Lana', like: 1 } ]

const sortByLike2 = _.sortBy(users, ['name','like']);
console.log(sortByLike2);
// [ { name: 'Bob', like: 15 },
//   { name: 'John', like: 5 },
//   { name: 'Jona', like: 1 } ]
