// function Person(name, age){
//   this.age = age;
//   this.name = name;
// }
//
// var p1 = new Person('khai', 2);
// console.log(p1);

class Person{
  constructor(name, age){
    this.age = age;
    this.name = name;
  }

  sayHello(){
    return 'Xin chao, toi la ' + this.name + ', nam nay' + this.age;
  }
}

class Child extends Person{
  constructor(name, age, hobby){
    super(name,age);
    this.hobby = hobby;
  }
  sayHello(){
    return 'Xin chao, em la ' + this.name;
  }
}

var p2 = new Person('khai',3);
var achild = new Child('teo',3);
console.log(achild.sayHello());
ReactDOM.render(
  <div>
    <khai1/>

  </div>

, document.getElementById("root") );
