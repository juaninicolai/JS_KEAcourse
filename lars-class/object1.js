
 const car = {
     name:"polo",
     make:"VW",
     year:1999,
     price: 500
 }

console.log(car)
car.price = 500

for(const property in car){
    console.log(`Property:${property}, Value: ${car[property]}`)
}

function add(n1,n2){
    return n1 + n2;
}

const sub = function(n1,n2){
    return n1-n2;
}
const f1 = function(n1,n2, callback){
    return "Result using the number: "+n1+" and "+n2+" = "+callback(n1,n2);
}
