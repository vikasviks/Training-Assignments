"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Importing Different Class and using Function\n");
const products_1 = require("./products");
function newProduct() {
    let p = new products_1.Product();
    p.Id = "1";
    p.Price = 200;
    p.Title = "taazaa";
    p.inStock = true;
    return p;
}
let p = newProduct();
console.log(p);
console.log("\n");
console.log("\nDifferent types of Data-Types\n");
var isdone = false;
var sandeep = "Engineer";
var ritik = "Stud";
var list = [1, 2, 3];
console.log(isdone);
console.log(sandeep);
console.log(ritik);
console.log(list);
console.log("\n");
console.log("\nUsing Union and Intersection with 'type'\n");
var x = [{
        name: 'Vikas',
        grade: 9,
        age: 23,
        sportsname: 'Cricket'
    },
    {
        name: 'Nishu',
        grade: 10,
        age: 21,
        sportsname: 'Baseball'
    },
    {
        name: 'viks',
        grade: 7,
        age: 20,
        sportsname: 'Badminton'
    }];
var y = [{
        name: 'Vks',
        grade: 9,
        sportsname: 'criket'
    },
    {
        name: 'Nish',
        age: 21,
        sportsname: 'chess'
    },
    {
        name: 'viku',
        grade: 10,
        age: 20
    }];
function prints(t) {
    t.forEach((t1) => {
        console.log(t1);
    });
    console.log("\n");
}
prints(x);
prints(y);
//# sourceMappingURL=app.js.map