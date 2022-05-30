
function Product(name,category,image,price,gender,sold= false){
    this.name = name;
    this.category = category;
    this.image = image;
    this.price = price;
    this.gender = gender;
    this.sold = sold;
}

// let Array1 = [];
let Array = JSON.parse(localStorage.getItem("Products")) || [];

function getInfo(event){
    event.preventDefault();
    let form = document.getElementById("form");
    let  name = form.name.value;
    let  category = form.category.value;
    let  image = form.image.value;
    let  price = form.price.value;
    let  gender = form.gender.value;
    
    
    let x = new Product(name,category,image,price,gender);
    Array.push(x);
    // console.log(x);
    localStorage.setItem("Products",JSON.stringify(Array));
    
    
    // console.log(name,category,image,price,gender);

}
// console.log(Array1);



