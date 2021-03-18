  
console.log("Importing Different Class and using Function\n")
import { Product } from "./products";
function newProduct(){
     let p=new Product();
     p.Id="1";
     p.Price=200;
     p.Title="taazaa";
     p.inStock=true;
     return p;
}
let p = newProduct();
console.log(p);
console.log("\n");



console.log("\nDifferent types of Data-Types\n");
var isdone:boolean=false;
var sandeep:string="Engineer";
var ritik:string="Stud";
var list:number[]= [1,2,3];
console.log(isdone);
console.log(sandeep);
console.log(ritik);
console.log(list);
console.log("\n");



console.log("\nUsing Union and Intersection with 'type'\n");
type student={
    name:string;
    grade:number;
    age:number
}
type player={
    name:string;
    sportsname:string;
}
type sp=student & player;
type sop = student | player;
var x:sp[]=[{
    name:'Vikas',
    grade : 9,
    age : 23,
    sportsname  : 'Cricket'
},
{
    name:'Nishu',
    grade : 10,
    age : 21,
    sportsname  : 'Baseball'
},
{
    name:'viks',
    grade : 7,
    age : 20,
    sportsname  : 'Badminton'
}]
var y:sop[]=[{
    name:'Vks',
    grade : 9,
    sportsname  : 'criket'
},
{
    name:'Nish',
    age : 21,
    sportsname  : 'chess'
},
{
    name:'viku',
    grade : 10,
    age : 20
}]
function prints(t:sp[]|sop[]){
    t.forEach((t1)=>{
        console.log(t1);
    })
    console.log("\n");
}
prints(x);
prints(y);