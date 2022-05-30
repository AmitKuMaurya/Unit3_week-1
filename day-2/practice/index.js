
// var obj = {
//     team : "mi",
//     output : function(){
//         console.log(this);
//     },
// };

// obj.output()



// function n() {
//    console.log(this)
// }
// n();



// function products(n,b,p){
//     var obj = {};
//     obj.name = n;
//     obj.brand = b;
//     obj.price = p;

//     return obj;
// }
// var x = products("shirt","gicci","30000");
// console.log(x);


// function products(n,b,p){
//     this.name = n;
//     this.brand = b;
//     this.price = p;
//     this.print = function (){
//         console.log(this)
//     }
// };
// var x = new products("shirt","pucchi","30000");
// var y = new products("blanket","sujata","90300");
// var z = new products("shirt","pucchi","10000");
// console.log(x);
// x.print();
// y.print();
// z.print();





// function products(name,brand,price){
//     this.name = name;
//     this.brand = brand;
//     this.price = price;
// };

// let Array = [];

// function Getinfo(){
//     event.preventDefault();
   
//     let form = document.getElementById("form");

//       let  name = form.name.value;
//       let  brand = form.brand.value;
//       let price = form.price.value;
   
//     let x = new products(name,brand,price);
//     Array.push(x);
//     // console.log(x);
//     // console.log(Name,Brand,Price);
//     console.log(Array)
// }


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<--------------------------- call,apply,bind-------------------------------------->>>>>>>>>>>>>>>>>>>>>


let school = {
    name: "school",
    purpose: "study",
};
let college = {
    name: "college",
    purpose: "fun",
};
let office = {
    name: "office",
    purpose: "work",
};

function food(food,food1){
    console.log(`ordering ${food} & ${food1} from ${this.name}`)
}

food.call(school,"dal chawal","halwa paratha");
food.call(college,"dal chawal","halwa paratha");
food.call(office,"dal chawal","halwa paratha");


// apply
// var arr = ["dahi bhalle","pani poori"]
// food.apply(school,arr);

// bind 
// let f1 = food.bind(school, "Pizza");
// let f2 = food.bind(college, "Pizza");
// let f3 = food.bind(office, "Pizza");

// f1();




