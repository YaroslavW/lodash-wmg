var _ = require('lodash');

let newArray = [11,12,13].map((item)=>{
    return item;
});
console.log(newArray); //[ 11, 12, 13 ]

let newArrLodash = _.map([{id: 21},{id: 22}, {id: 23}], function(item){
    return item.id;
});
console.log(newArrLodash); //[ 21, 22, 23 ]

let newArrLodash = _.map([{id: 21},{id: 22}, {id: 23}], (item)=>{
    return item.id;
});
console.log(newArrLodash); //[ 21, 22, 23 ]

let user = _.map({id: 33, name:'Yaroslav'}, (item)=>{
    return item;
});
console.log(user); //[ 33, 'Yaroslav' ]


newArrLodash2 = _.map([{id:111},{id:222},{id:333}], 'id');
console.log(newArrLodash2); //[ 111, 222, 333 ]