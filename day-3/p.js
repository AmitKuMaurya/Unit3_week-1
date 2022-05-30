// const product ={
//     brand: "nike",
//     logo: "tick",
//     seller : "flipkart"
// }

// const p1 = Object.create(product);
// p1.price = 98;
// console.log(p1);


// function Product(type){
//     this.type = type;
//     this.brand = "nike";
//     this.logo = "tick";
//     this.seller = "flipkart";
// }

// Product.prototype.discount = function(){
//     console.log("10% discount");
// }

// product.prototype.ChangeType = function(type){
//     this.type = type;
// }

// Product.prototype.price = 500;

// let p1 = new Product("shoes");

// p1.discount();
// p1.ChangeType("")
// console.log(p1);


// let arr = [1,2,3];
// let arr2 = new Array(1,2,3);
// console.log(arr2);

function myArray(){
    Object.defineProperty(this,"length",{
        value:0,
        writable:true,
        enumerable:false,
    })
    this.length = arguments.length;

    for(let i=0;i<arguments.length;i++){
        this[i] = arguments[i];
    }
}
let arr3 = new myArray(1,2,3,4,5);
console.log(Object.values(arr3));