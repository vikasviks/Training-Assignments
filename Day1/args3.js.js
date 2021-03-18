function Product(title, price)
{
    this.title= title;
    this.price= price;
}
Product.prototype.owner="foo";
Product.prototype.displayproduct= function()
{
    console.log(this);
}
let p1= new Product("p1", 900);
let p2= new Product("p2", 700);
p1.displayproduct= function()
{
    console.log("hello");
    console.log(this);
    console.log(this.owner);
}
p1.displayproduct();
p2.displayproduct();
p1.displayproduct.call(p2);