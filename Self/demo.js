function Garage(carName,topSpeed){
    this.name = carName,
    this.Speed = topSpeed,
    this.run = function(){
        return (`${this.name} is running`);
    }
    // this.analyse = function(){
    //     return (`${1000-this.Speed}`)
    // }
}
var car1 = new Garage("lembo",800);
console.log(car1);