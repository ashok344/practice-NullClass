// //
// var name = 'ashok';
// var age = 29;
// function One() {
//   var a = 'Hello';
//   two();
//   var x = a + name;
//   console.log(x)
// }
// function two() {
//   var b = 'Hi';
//   three();
//   var y = b + name;
//   console.log(y)
// }
// function three() {
//   var c = 'Hey!,';
//   var z = c + name;
//   console.log(z);
// }
// One()
// const a = 200;
// function Global() {
//   let a = 10;
//   console.log(10)
//   if (a === 10) {
//     a = 20;
//     console.log(a);
//   }
//   console.log(a);

// }
// Global();
// console.log(a)
//1.By object literals
// const obj = {
//   id: 1,
//   name: 'ashok',
//   salary: 30000,
//   company: 'Asite'
// }
// console.log(obj.id)
// console.log(obj.id + " " + obj.name + " " + obj.salary + " " + obj.company)
//2.By creating instance of object directly(using new keyword)

// const obj2 = new Object();
// obj2.id = 1;
// obj2.firstName = 'Ashok';
// obj2.age = 29;
// console.log(obj2.id + " " + obj2.firstName + " " + obj2.age)

//3.Byusing an object constructor (using new keyword)

// function Employee(id, name, age, comp) {
//   this.myId = id;
//   this.myName = name;
//   this.myAge = age;
//   this.myComp = comp;
//   this.ChangeAge = ChangeAge
//   function ChangeAge(otherAge) {
//     this.myAge = otherAge;
//   }
// }
// const e = new Employee(1, 'ashok', 29, 'Asite');
// console.log(e.myId + " " + e.myName + " " + e.myAge);
// e.ChangeAge(30);
// console.log(e.myId + " " + e.myName + " " + e.myAge);
//3.By usimg an object constructor(using new keyword)
// function Hello(id, name, age, salary) {
//   this.myId = id;
//   this.myName = name;
//   this.myAge = age;
//   this.mySalary = salary;
//   this.changeSalary = changeSalary;
//   function changeSalary(otherSlary) {
//     this.mySalary = otherSlary
//   }
// }
// const h = new Hello(1, 'AshokL', 29, 30000);
// console.log(h.myId + " " + h.myName + " " + h.myAge + " " + h.mySalary);
// h.changeSalary(50000);
// console.log(h.myId + " " + h.myName + " " + h.myAge + " " + h.mySalary);
// const anotherEmploy = new Hello(2, 'Naresh', 29, 70000);
// console.log(anotherEmploy.myId + " " + anotherEmploy.myName + " " + anotherEmploy.myAge + " " + anotherEmploy.mySalary);
// anotherEmploy.changeSalary(100000);
// console.log(anotherEmploy.myId + " " + anotherEmploy.myName + " " + anotherEmploy.myAge + " " //+ anotherEmploy.mySalary);
//1.By Object Literals
//2.By creating instance of object directly(using new keyword);
//3.By using an object constructor(using new keyword)
// const obj1 = { a: 1, b: 2, c: 5 };
// const obj2 = { c: 6, e: 5 };
// const op = Object.assign({}, obj1, obj2);
// console.log(op)
// const obj3 = { a: 0, b: { c: 0 } };
// //const obj4 = Object.assign({}, obj3);
// const obj4 = JSON.parse(JSON.stringify(obj3))
// // console.log(obj1);
// // console.log(obj2);
// // obj1.a = 1;
// // console.log(obj1)
// // console.log(obj2);
// // obj2.a = 10;
// // console.log(obj1)
// // console.log(obj2)
// // obj1.b.c = 500;
// // console.log(obj1)
// // console.log(obj2)
// obj3.a = 10;
// obj3.b.c = 100;
// console.log(obj3);
// console.log(obj4);
// const o1 = { a: 1 };
// const o2 = { b: 2 };
// const o3 = { c: 3 };
// const obj = Object.assign(o1, o2, o3);
// //console.log(obj);
// console.log(o1)
// //console.log(o2)
// console.log(o3)

// const obj = {
//   getName: function () {
//     console.log(this.firstName + this.lastName)
//   }
// }
// const e = Object.create(obj);
// e.firstName = 'Ashok';
// e.lastName = 'Lomada';
// e.getName();
// const obj = { 10: 'arry', 21: 'barry', 23: 'carry' };
// const arr = Object.entries(obj);
// console.log(arr[2])

// const obj = {
//   id: 1,
//   name: 'Ashok'
// }
// const obj2 = Object.freeze(obj);
// console.log(obj, obj2);
// obj.name = 'hi'
// console.log(obj2)
// const object1 = {
//   a: 'Rahul',
//   b: 0,
//   c: false
// };
// const op = Object.values(object1);
// console.log(op)
// var foo = { a: 1, b: 2, c: 3 };

// function GetValues(foo) {
//   let values = [];
//   for (let item in foo) {
//     values.push(foo[item])
//   }
//   return values;
// }
// console.log(GetValues(foo))
//1.By Array Literals
// var emp = ["Sonoo", "Vimal", "Ratan"];
// for (let i = 0; i < emp.length; i++) {
//   console.log(emp[i])
// }
//2.By Creating instance of array directly(using new keyword)
// var arr2 = new Array();
// arr2[0] = 1;
// arr2[1] = 'Ashok';
// arr2[2] = 29;
// console.log(arr2)
// for (let i = 0; i < arr2.length; i++) {
//   console.log(arr2[i])
// }
//3.By using an array constructor directly(using new keyword)
// const arr3 = new Array(1, 'Ashok Lomada', 29);
// let i;
// for (i = 0; i < arr3.length; i++) {
//   console.log(arr3[i])
// }
// const obj = {
//   getName: function () {
//     console.log(this.firstName + this.lastName)
//   }
// }
// const e = Object.create(obj)
// e.firstName = 'Ashok';
// e.lastName = 'Lomada'
// console.log(e)
// let arr1 = [1, 2, 3];
// let arr2 = [3, 5, 6];
// let arr3 = [4, 5, 6];
// let result = arr2.concat(arr3, arr1, [10, 20, 30]);
// console.log(result);
// console.log(arr1);

// console.log(arr2);
// var arr = ['John', 'Michael', 'Embrose', 'Herry', 'Lewis'];
// var itr = arr.entries();
// document.write("After applying the entries method:" + "<br>");

// for (var e of itr) //for loop using var.
// {
//   document.write(e + "</br>");
// }
// function has(num) {
//   let arr = [];
//   for (let i = 0; i <= num; i++) {
//     if (i % 2 == 1) {
//       arr.push(i)
//     }
//   }
//   return arr;


// }
// console.log(has(10))
// const arr = ['Mango', 'Apple', 'Banana', 'Kiwi'];
// for (item of arr) {
//   console.log(item)
// }
// const obj = { '100': "abc", '101': "pqr", '102': "xyz" }
// for (index in obj) {
//   console.log(index + ":" + obj[index])
// }
// const obj = { '100': "abc", '101': "pqr", '102': "xyz" }
// for (key in obj) {
//   console.log(key + " : " + obj[key])
// }
// var arr = ['John', 'Michael', 'Embrose', 'Herry', 'Lewis'];
// let itr = arr.entries();
// for (let a of itr) {
//   console.log(a)
// }
// var marks = [50, 40, 45, 37, 20];
// function Check(value) {
//   return value > 30;
// }
// console.log(marks.every(Check))
// function test(elemement, index, array) {
//   return index < 4;
// }
// console.log([21, 22, 2, 42, 23].every(test))
// var marks = [50, 40, 45, 37, 20];
// function check(value) {
//   return value > 30;
// }
// console.log(marks.every(check))
// function test(elemement, index, arr) {
//   return index < 4;
// }
// console.log([21, 22, 2, 45].every(test))
// var arr = [90, 18, [89, 56], [13, 20, [67, 17]]];
// var res = arr.flat(Infinity);
// console.log(arr)
// console.log(res)
// var arr = ['John', 'Peter', , 'Tomy', ['Eni', , 'Kerry']];
// var res = arr.flat();
// console.log(res)
// console.log(arr)
// var arr = Array.from("You are viewing an example of string");
// console.log(arr)
// var func = function (...args) {
//   console.log(Array.from(args))
// }
// func('John', 'Roy', 'Jess', 'Mary')
// var set = new Set(['C', 'C++', 'Java', 'C', 'Java', 'C++', 'Python', 'Perl'])
// console.log(Array.from(set))
// var marks = [50, 40, 45, 37, 20];
// function Check(marks) {
//   return marks > 30
// }
// console.log(marks.filter(Check))
// function isPrime(value, index, arr) {
//   var start = 2;
//   while (start <= Math.sqrt(value)) {
//     if (value % start++ < 1) {
//       return false;
//     }
//   }
//   return value > 1;
// }
// console.log([8, 4, 7, 22].find(isPrime));
// var arr = ["AngularJs", "Node.js", "JQuery"]
// var res = arr.join();
// console.log(res)
//let arr = ['Mon', 'Tue', 'Wed', 'Thu', 'Sat'];
// let itr = arr.keys();
// //console.log(itr);
// for (let item of itr) {
//   console.log(item)
// }
// for (let item in arr) {
//   console.log(item + ":" + arr[item])
// }
// let itr = arr.keys();
// for(let item )
// let itr = arr.keys()
// for (let item of itr) {
//   console.log(item)
// }
// let itr = arr.entries();
// for (let item of itr) {
//   console.log(item)
// }
// let itr = arr.keys();
// for (let item of arr) {
//   console.log(item)
// }
// let arr2 = arr.pop();
// console.log(arr2)
// console.log(arr)
//var arr = ["AngulaJS", "Node.js", "JQuery"];
// var len = arr.length;
// for (var i = 1; i <= len; i++) {
//   console.log('ELEMEM' + arr.pop())
//}
//console.log(arr.pop());
// var arr = ["AngulaJS", "Node.js", "JQuery"];
// var len = arr.length;

// for (var x = 1; x <= len; x++) {
//   document.writeln("Extracted element: " + arr.pop() + "<br>");
// }
// function resultAll(arr) {
//   let result = 0;
//   for (let k = 0; k < arr.length; k++) {
//     for (let m = 0; m < arr[k].length; m++) {
//       if (arr[k][m] > 9) result += (arr[k][m]);
//     }
//   }
//   return result;
// }
// console.log(resultAll([[1, 2], [3, 4], [5, 6, 7]]))
// var arr = [2, 4, 1, 8, 5];
// console.log(arr);
// var res = arr.sort();
// console.log(res)
// console.log(arr);

// var arr = [2, 4, 1, 8, 5]
// // var res = arr.sort();
// // var secMax = res[res.length - 3];
// // console.log(secMax)
// var res = arr.splice(2, 0, "Wednesday")""
// console.log(arr);
// var arr = ["Monday", "Tuesday", "Thursday", "Friday"];
// var res = arr.slice(1, 2);
// console.log(res);
// console.log(arr);
//var arr = ["Monday", "Tuesday", "Saturday", "Sunday", "Thursday", "Friday"];
// var arr = ["Monday", "Tuesday", "Thursday", "Friday"];
// var res = arr.splice(2, 0, 'wensday');
// console.log(res);
// console.log(arr);//["Monday","Tuesday","wensday",Thursday","Friday"]
// var arr = ["Monday", "Tuesday", "Saturday", "Sunday", "Thursday", "Friday"];
// var res = arr.splice(2, 2, 'Wensday');
// console.log(res);//["Saturday", "Sunday"];
// console.log(arr);//["Monday", "Tuesday","Wensday" "Thursday", "Friday"]
// var arr = ["Monday", "Tuesday", "Sunday", "Friday"];
// var res = arr.toString()
// console.log(res);//["Sunday"]
// console.log(arr);//["Monday", "Tuesday","Wensday", "Thursday", "Sunday", "Friday"]
// const arr = [1, 'a', new Date('08 Jan 1997 17:12:00 UTC')];
// const str = arr.toLocaleString('en', { timeZone: "UTC" })
// console.log(arr)
// console.log(str)
// var arr = ['j', 'a', 'v', 'a', 'T', 'p', 'o', 'i', 'n', 't']; //array elements
// var str = arr.toString();
// console.log(str);
// console.log(arr)
// var season = ["Spring", "Autumn", "Summer", "Winter"];
// var str = season.toString();
// console.log(str);
// console.log(season)
// var arr = ["1", "2", "3", "4"];
// document.write(arr.toString());
// var arr = ["AngularJS", "Node.js"];
// var result = arr.unshift("JQuery");
// console.log(arr);
// console.log(result);
// arr.unshift("Autumn");
// console.log(arr);
// console.log(result);
// var arr = ["John", "Mary", "Tom", "Harry", "Sheero"];
// //var itr = arr.values();
// for (item of arr) {
//   console.log(item)
// }

// //Q.1)Print values From 15 to 35
// for (var i = 15; i <= 35; i++) {
//   console.log(i);
// }
// //=========================================
// //Q.2)Print values From 56 to 35(Downwards Direction)
// for (var i = 56; i >= 35; i--) {
//   console.log(i)
// }
// var arr1 = ["C", "C++", "Python"];
// var arr2 = ["Java", "JavaScript", "Android"];
// var result = arr1.concat(arr2);
// console.log(result)
// document.writeln(result);
// var arr1 = ["C", "C++", "Python"];
// var arr2 = ["Java", "JavaScript", "Android"];
// var arr3 = ["Ruby", "Kotlin"];
// var result = arr2.concat(arr1, arr3);
// console.log(result);
// console.log(arr);
// var res = arr.copyWithin(0, 1, 2);
// console.log(res);//[]
// console.log(arr);//["Node.js", "Node.js", "JQuery", "Bootstrap"]
// var res2 = arr.copyWithin(1, 2);;
// console.log(res2);//["Node.js","JQuery", "Bootstrap","Bootstrap"]
// console.log(arr);
// var res3 = arr.copyWithin(2);
// console.log(res3);//["Node.js","JQuery","Node.js","JQuery",]
// console.log(arr);
// console.log(arr);
// var res1 = arr.copyWithin(0, 1, 2);
// console.log(res1);//["Node.js", "Node.js", "JQuery", "Bootstrap"]
// console.log(arr);//["Node.js", "Node.js", "JQuery", "Bootstrap"]
// var res2 = arr.copyWithin(0, 1, 3);
// console.log(res2);//["Node.js", "JQuery","JQuery", "Bootstrap", "Bootstrap"]
// console.log(arr);
// var res3 = arr.copyWithin(1, 2);
// console.log(res3);//["Node.js","JQuery", "Bootstrap", "Bootstrap"]
// console.log(arr);
// var res4 = arr.copyWithin(2);
// console.log(res4);//["Node.js","JQuery","Node.js","JQuery"]
// console.log(arr);
// var res1 = arr.copyWithin(0, 1, 2);
// console.log(res1);//["Node.js","Node.js", "JQuery", "Bootstrap"]
// console.log(arr);
//var res2 = arr.copyWithin(0, 1, 3);
//console.log(res2);//[ "Node.js", "JQuery", "JQuery", "Bootstrap"]
// var res3 = arr.copyWithin(1, 2);
// console.log(res3);//["AngularJS","JQuery", "Bootstrap","Bootstrap",]
// var arr = ["AngularJS", "Node.js", "JQuery", "Bootstrap"];
// var res4 = arr.copyWithin(2);
// console.log(res4);//["AngularJS", "Node.js","AngularJS", "Node.js",]
// var arr = ['John', 'Michael', 'Embrose', 'Herry', 'Lewis'];
// var itr = arr.entries();
// for (let item of itr) {
//   console.log(item)
// }
// var marks = [50, 40, 45, 37, 20];
// function Check(value) {
//   return value > 30
//   //console.log(value > 30);
// }
// console.log(marks.every(Check))
// var arr = ['a', 'b', ['c', 'd']];
//var arr = [90, 18, [89, 56], [13, 20, [67, 17]]];
// var arr = [90, 18, [13, 20, [67, 17, [56, 45]]]];
// var arr = ['John', 'Peter', , 'Tomy', ['Eni', , 'Kerry']];
// var res = arr.flat(Infinity);
// console.log(res);
// console.log(arr);
// var arr = [2, 4, 6, 8];
// // console.log(arr.flatMap(x => [[x / 2]]));
// var res = arr.flatMap(function (arr) {
//   return [[arr / 2]]
// })
// console.log(res);
// var arr1 = ['a', 'b', 'c', 'd'];
// var arr2 = [1, 2, 3, 4];
// //var newArr = arr1.flatMap((arr1, index) => [arr1, arr2[index]]);
// var newArr = arr1.flatMap(function (arr1, index) {
//   return [[arr1, arr2[index]]]
// })
// console.log(newArr)
// var arr = ["This is", , "JavaTpoint.com"];
// var newArr = arr.flatMap(x => x.split(" "));
// console.log(newArr);
// console.log(arr)
// var arr = ["AngularJS", "Node.js", "JQuery"];
// var res = arr.fill('Bootstrap');//['Bootstrap','Bootstrap','Bootstrap']
// console.log(res);//['Bootstrap','Bootstrap','Bootstrap']
// console.log(arr);
// //var res2 = arr.fill('Bootstrap', 1);//['"AngularJS"','Bootstrap','Bootstrap']
// var res3 = arr.fill('Bootstrap', 0, 2);//['Bootstrap','Bootstrap', "JQuery"]
// console.log(res3);//['"AngularJS"','Bootstrap','Bootstrap']
// var arr = Array.from("You are viewing an example of string");
// console.log(arr);
// function func(...arr) {
//   return Array.from(arr)
// }
// console.log(func('John', 'Roy', 'Jess', 'Mary'))
// var set = new Set(['C', 'C++', 'Java', 'C', 'Java', 'C++', 'Python', 'Perl']); //A set of different values.
// document.write(Array.from(set));
//console.log(Array.from({ length: 9 }, (v, i) => i))
//var marks = [50, 40, 45, 37, 20];
// function CheckFilter(value) {
//   return value > 30;
// }
// console.log(marks.filter(function (val) {
//   console.log(val > 30);
// }));
// function isPrime(value, index, arr) {
//   var start = 2;
//   while (start <= Math.sqrt(value)) {
//     if (value % start++ < 1) {
//       return false;
//     }
//   }
//   return value > 1;
// }
// console.log([8, 4, 7, 22].find(isPrime));
// var arr = ["C", "C++", "Python"];
// arr.forEach(function (item) {
//   console.log(item)
// });
// const str = 'To be, or not to be, that is the question.';
// let count = 0;
// let position = str.indexOf('e');

// while (position !== -1) {
//   count++;
//   position = str.indexOf('e', position + 1);
// }

// console.log(count); // 4
// let arr = ['Mon', 'Tue', 'Wed', 'Thu', 'Sat'];
// let itr = arr.keys();
// for (x of itr) {
//   console.log(x)
// }
// var arr = ["AngularJs", "Node.js", "JQuery"]
// var result = arr.join()
// console.log(result);
// var arr = ["C++", "C++"];
// var result = arr.lastIndexOf("C++", 2);
// console.log(result);
//console.log(Array.of(1, 2, 3, 4))
// var arr = ["AngularJS", "Node.js", "JQuery"];
// var res = arr.pop();
// console.log(res);
// console.log(arr)
// var arr = ["AngulaJS", "Node.js", "JQuery"];
// var rev = arr.reverse();
// console.log(rev);
// var arr = ["AngularJS", "Node.js", "JQuery"];
// var result = arr.unshift('lk');
// console.log(result);
// console.log(arr)
// var arr = ["AngularJS", "Node.js", "JQuery", "Bootstrap"]
// var result = arr.slice(-4, -1);
// console.log(result);
// console.log(arr)
// var arr = ["Monday", "Tuesday", "Thursday", "Friday"];
// var result = arr.splice(2, 0, "Wednesday")
// console.log(arr);
// console.log(result)
// var season = ["Spring", "Autumn", "Summer", "Winter"];
// var str = season.toString();
// console.log(str);
// console.log(season)
// var arr = ["1", "2", "3", "4"];
// var res = arr.toString();
// console.log(res);
// console.log(arr)
// var arr = ["John", "Mary", "Tom", "Harry", "Sheero"]; //Intializing array elements
// var itr = arr.values(); //Using values() method.
// document.write("The array elements are:<br>");
// for (let x of itr) {
//   console.log(x);
// }
// var arr1 = ["C", "C++", "Python"];
// var arr2 = ["Java", "JavaScript", "Android"];
// var res = arr1.concat(arr2);
// console.log(res);//["C","C++","Python","Java", "JavaScript", "Android"];
// console.log(arr1);
// console.log(arr2);
// var res2 = arr2.concat(arr1);
// console.log(res2.sort());
// console.log(res2);
// var arr = ["AngularJS", "Node.js", "JQuery", "Bootstrap"];
// var res4 = arr.copyWithin(2);
// console.log(res4);//["AngularJS", "Node.js","AngularJS", "Node.js"]
// console.log(arr);
// var res3 = arr.copyWithin(1, 2);
// console.log(res3);//["AngularJS","JQuery", "Bootstrap", "Bootstrap"]
// console.log(arr);
// var res2 = arr.copyWithin(0, 1, 3);
// console.log(res2);//["Node.js", "JQuery","JQuery", "Bootstrap"]
// console.log(arr);
// console.log(arr);
// var res = arr.copyWithin(0, 1, 2);
// console.log(res);//["Node.js","Node.js","JQuery", "Bootstrap"]
// console.log(arr)
// var arr = ['John', 'Michael', 'Embrose', 'Herry', 'Lewis'];
// var res = arr.entries();
// for (item of res) {
//   console.log(item)
// }
// var arr = ['a', 'b', ['c', 'd']];
// var res = arr.flat();
// console.log(res);
// console.log(arr)
// var arr1 = ['a', 'b', 'c', 'd'];
// var arr2 = [1, 2, 3, 4];
// var res = arr1.flatMap((arr1, index) => [arr1, arr2[index]]);
// console.log(res)
// var arr = ["This is", , "JavaTpoint.com"];
// var newArr = arr.flatMap(x => x.split(" "));
// console.log(newArr)
//var arr = ["AngularJS", "Node.js", "JQuery"];
//var res = arr.fill("Bootstrap");
// console.log(res);//["Bootstrap","Bootstrap","Bootstrap"]
// console.log(arr)
// var res2 = arr.fill("Bootstarp", 1);
// console.log(res2);//["AngularJS","Bootstrap","Bootstrap"]
// var res3 = arr.fill("Bootstrap", 0, 2);
// console.log(res3);//["Bootstrap","Bootstrap","JQuery"]
// console.log(arr);
// var arr = Array.from("You are viewing an example of string");
// console.log(arr);
// function Test() {
//   return Array.from(arguments);
// }
// console.log(Test('John', 'Roy', 'Jess', 'Mary'));
// var set = new Set(['C', 'C++', 'Java', 'C', 'Java', 'C++', 'Python', 'Perl']); //A set of different values.
// console.log(Array.from(set));
// console.log(Array.from({ length: 9 }, (v, i) => i))
// const inventory = [
//   { name: "apples", quantity: 2 },
//   { name: "bananas", quantity: 0 },
//   { name: "cherries", quantity: 5 },
// ];
// inventory.forEach(({ name }) => console.log(name));
// console.log(inventory)
// var arr = ["C", "C++", "AngularJS", "Bootstrap", "Bootstra", "C++", "Java"];
// var result = arr.lastIndexOf("C++", 2);
// console.log(result)
// var arr = ["AngularJs", "Node.js", "JQuery"]
// var result = arr.join('')
// console.log(result)
// var str = "Javatpoint";
// console.log(str.charAt(5))
// var x = "Javatpoint";
// var y = ".com ";
// var z = " Tutorials";
// var res = y.concat(x, z)
// console.log(res);
// console.log(x);
// console.log(y);
// console.log(z);
// var web = "Learn JavaScript on Javatpoint";
// var res = web.indexOf('on', 352)
// var str = "Javatpointjava";
// var res = str.match(/[a-p]/gi)
// console.log(res);
// var str = " Learn Node.js on Javatpoint. Node.js is a well-known JavaScript framework.";
// var res = str.replace(/Node.js/g, "AngularJs");
// var str = "Javatpoint";
// var res = str.replace(/tpoint/i, "Script")
// console.log(res)
// var str = "Javatpoint";
// var res = str.substring(5, 6);
// console.log(res)//'Java
// console.log(str)
// var str = "JAVATPOINT hgfds JavafTSCF";
// var res = str.toLocaleLowerCase()
// console.log(res)
// console.log(str)
// var str = new String('JAVATPOINT tutorials');
// var res = str.toLocaleLowerCase();
// console.log(res);
// console.log(str);
// var res = new String('javatpoint');
// var str = res.toString();
// console.log(str);
// console.log(res);
// var str = 'gh b javatpoint HI';
// var res = str.valueOf()
// console.log('result', res);
// console.log('original', str)
// var res = 'javatpoint';
// var str = res.split();
// console.log(str);
// console.log(res);
// var str = 'JAV ATPO INTt uto rials hi';
// var res = str.split(" ", 3);
// console.log(res);
// console.log(str);
// var str = "    Hi,javatpoint tutorial website";
// var res = str.trim();
// console.log(res);
// console.log(str)
// let num = 7;
// if(num%2==0 && num ==1){
//   console.log('it is prime number')
// }else{
//   console.log('not prime number')
// }<
// let number = 9;
// let i;
// for (i = 2; i < number; i++) {
//   if (number % 2 == 0) {
//     break;
//   }
// }
// if (number == i) {
//   console.log(number + ' is a prime number')
// }
// else {
//   console.log('not a prime number')
// }
// const isPrime = num => {
//   for (var i = 2; i < num; i++) {
//     if (num % i == 0) {
//       return false;
//     }
//   }
//   return num >= 2;
// }
// console.log(isPrime(4))
// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) {
//       return false;
//     }
//   }
//   return n >= 2
// }

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function PrimeNumArr(values) {
//   let emptyArr = [];
//   for (let i = 0; i < values.length; i++) {
//     if (values[i] %== 1 && values[i] % 2)
//   }
// }
// function isPrime(val) {
//   if (val <= 1) {
//     return false;
//   } else {
//     for (let i = 2; i < val; i++) {
//       if (val % i == 0) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// function isPrime(num) {
//   for (let i = 2; i < num; i++) {
//     if (num % 2 == 0) {
//       return false;
//     }
//   }
//   return num >= 2;
// }
// function isPrime(val) {
//   for (let i = 2; i < val; i++) {
//     if (val % i == 0) {
//       console.log('not a prime num')
//     } else {
//       console.log('prime number')
//     }
//   }
// }
// isPrime(9);
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function isPrime(val) {
//   if (val <= 1) {
//     return false;
//   }
//   else {
//     for (let i = 2; i < val; i++) {
//       if (val % i == 0) {
//         return false;
//       }
//     }
//   }
//   return true;
// }
// function FindPrimeArr(arr) {
//   const filterd = arr.filter(element => {
//     return isPrime(element)
//   });
//   return filterd;
// }
// console.log(FindPrimeArr(arr));
// var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

// numArray = numArray.filter((number) => {
//   for (var i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) return false;
//   }
//   return true;
// });

// console.log(numArray);
// var str = "hello world";
// console.log(str);
// var str2 = new String('Hi,Welcome javascript');
// console.log(str2)
// var web = "Learn JavaScript on Javatpoint";
// var res = web.lastIndexOf('a');//23
// console.log(res)
// var str = "JavaScript is a scripting language. Scripting languages are often interpreted";
// var res = str.search("ashok");
// var str = "JavatpointJAVA";
// console.log(str)
// var res = str.match(/[a,e,i,o,u]/g)
// console.log(res);
// var str = new String("Javatpoint")
// var res = str.toString()
// console.log(res);
// console.log(str);
//1.By Object Literals

// const obj = new Object();
// obj.id = 1;
// obj.name = 'Ashok Lomada';
// obj.age = 29;
// obj.comp = 'Asite 55 paisa'
//console.log(obj)
// function Func(id, name, age, comp) {
//   this.myId = id;
//   this.myName = name;
//   this.myAge = age;
//   this.myComp = comp;
//   this.changeAge = changeAge;
//   function changeAge(age) {
//     this.myAge = age
//   }
// }
//const obj = new Func(1, 'Lomada', 29, '5Paisa');
// console.log(obj.myId + " " + obj.myName + " " + obj.myAge + " " + obj.myComp);
//obj.changeAge(30);
//console.log(obj.myId + " " + obj.myName + " " + obj.myAge + " " + obj.myComp);

//2.By creating instance of object directly(using new keyword);
//3.By using object constructor(using new keyword);

// function Check(id, name, age) {
//   this.myId = id;
//   this.myName = name;
//   this.myAge = age;
//   this.changeAge = changeAge;
//   function changeAge(age) {
//     this.myAge = age
//   }
// }
// const obj = new Check(5, 'Ak', 29,);
// console.log(obj.myId + " " + obj.myName + " " + obj.myAge);
// obj.changeAge(30);
// console.log(obj.myId + " " + obj.myName + " " + obj.myAge);
//1.By Object Literals
//2.By creating instance of object directly(using new keyword)
//3.By using an Object constructor directly(using new keyword)
// const object1 = {
//   a: 1,
//   b: 2,
//   c: 1
// };
// const obj2 = Object.assign({ e: 2, d: 5 }, object1);
// console.log(obj2)
// const obj = {
//   printFunc: function () {
//     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//   }
// }
// const obj2 = Object.create(obj);
// obj2.name = 'Ashok Lomada';
// obj2.isHuman = true;
// obj2.printFunc();
// const obj = {
//   printFunc: function (age) {
//     console.log(`My name is ${this.name}. Am I human? ${this.isHuman} ${age}`);
//   }
// }
// const obj2 = Object.create(obj);
// obj2.name = 'Ashok Lomada';
// obj2.isHuman = true;
// obj2.printFunc(29)
// const obj = {
//   id: 1,
//   name: 'ashok lomada',
//   salary: 20000,
//   company: 'Asite'
// }
// const res = Object.entries(obj);
// console.log(res);
// console.log(obj)
// 'use strict';
// const obj1 = {
//   name: 'ashok'
// }
// const obj2 = Object.freeze(obj1);
// delete obj1.name
// obj2.name = '29';
// console.log(obj2);
// console.log(obj1);
//1.By Array Literals
//2.By creating instance of array directly(using new keyword)
//3.By using an array constructor(using new keyword);
//const arr1 = [1, 2, [3, 4, 5]];
//console.log(arr1)
// const arr2 = new Array();
// arr2[0] = 1;
// arr2[1] = 2;
// const arr3 = new Array(1, 2, 3, 4)
// console.log(arr3);
// var arr = ['John', 'Michael', 'Embrose', 'Herry', 'Lewis'];
// var itr = arr.entries();
// console.log("After applying the entries method:" + "<br>");

// for (var e of itr) //for loop using var.
// {
//   console.log(e);
// }
// const arr2 = arr1.flat();
// console.log(arr2);
// console.log(arr1);
// var arr = [10, 18, 12, 20];
// var sum = 0;
// arr.forEach(val => console.log(sum += val));
// var arr = ["AngularJS", "Node.js", "JQuery"]
// var result = arr.includes("javascript");
// console.log(result);
// var arr = ["C", "C++", "Python", "cvc", "C++", "Java"];
// var res = arr.indexOf('C++', 2);
// console.log(res);
// var arr = ["AngularJs", "Node.js", "JQuery"]
// var result = arr.values();
// for (let x of result) {
//   console.log(x);
// }
// var arr = ["C++", "Python", "C++", "C++", "Java", 'as', 'asl', 'C++'];
// var res = arr.lastIndexOf('C++', 2)
// console.log(Array.of(1, 2, 3, 4))
// var arr = ["AngularJS", "Node.js", "JQuery"];
// var res = arr.shift();
// console.log(arr);
// console.log(res)
// var arr = ["AngulaJS", "Node.js", "JQuery"];
// var rev = arr.reverse();
// console.log(rev);
// console.log(arr)
// var arr = [2, 4, 1, 8, 5];
// var result = arr.sort();
// console.log(result)
// console.log(arr)
// var arr = ['j', 'a', 'v', 'a', 'T', 'p', 'o', 'i', 'n', 't']; //array elements
// var str = arr.toString();
// console.log(str);
// console.log(arr);
// var str = " Learn Node.js on Javatpoint. Node.js is a well-known JavaScript framework.";
// var res = str.split(" ")
// console.log(str)
// console.log(res)
// class Employee {
//   constructor(id, name, age) {
//     this.myId = id;
//     this.myName = name;
//     this.myAge = age;
//   }
//   details() {
//     console.log(`${this.myId} ${this.myName} ${this.myAge}`)
//   }
// }
// const e = new Employee(5, 'Ashok Lomada', 29);
// e.details();
// const emp = class {
//   constructor(id, name, age) {
//     this.myId = id;
//     this.myName = name;
//     this.myAge = age;
//   }
//   details() {
//     console.log(`${this.myId} ${this.myName} ${this.myAge}`)
//   }
// }
// const e1 = new emp(101, "Martin Roy", 30);
// e1.details();

// function Employee(id, name, age) {

//   this.myId = id;
//   this.myName = name;
//   this.myAge = age;
//   this.changeDetails = changeDetails
//   function changeDetails() {
//     console.log(`${this.myId} ${this.myName} ${this.myAge}`)
//   }
// }
// const e = new Employee(101, "Martin Roy", 30);
// e.changeDetails();
// class Empoyee {
//   constructor(id, name, age) {
//     this.myId = id;
//     this.myName = name;
//     this.myAge = age;
//   }
//   details() {
//     console.log(`${this.myId} ${this.myName} ${this.myAge}`)
//   }
// }
//const e1 = new Empoyee(101, "Martin Roy", 30);

// const firstClass = class Employee {
//   constructor() {

//   }
//   details() {

//   }
// }
// const e1 = new Employee(101, "Martin Roy", 30);
// const e2 = new firstClass(5, 'Ashok Lomada', 29)
// e1.details();
// e2.details();
// class Employee {
//   constructor(id, name, age) {
//     this.myId = id;
//     this.myName = name;
//     this.myAge = age;
//   }
// }
// Employee.prototype.details = function () {
//   console.log(`${this.myId} ${this.myName} ${this.myAge} ${this.myComp}`);
// }
// const e1 = new Employee(101, "Martin Roy", 30);
// const e2 = new Employee(5, 'Ashok Lomada', 29)
// Employee.prototype.myComp = 'Asite';
// e2.details();
// e1.details();
// class Employee {
//   constructor() {
//     this.id = 1;
//     this.name = 'Ashok LOmada';
//   }
// }
// const e = new Employee()
// console.log(`${e.id} ${e.name}`)
// class CompanyName {
//   constructor() {
//     this.companyName = 'Javatpoint';
//   }
// }
// class Employee extends CompanyName {
//   constructor() {
//     super();
//     this.id = 5;
//     this.name = 'Ashok Lomada';
//   }
// }
// const e = new Employee();
// console.log(`${e.id} ${e.name} ${e.companyName}`)
// class Employee {
//   constructor() {
//     var name;
//     var marks;
//   }
//   getName() {
//     return this.name;
//   }
//   setName(name) {
//     this.name = name;
//   }
//   getMarks() {
//     return this.marks;
//   }
//   setMarks(marks) {
//     this.marks = marks
//   }
// }
// const e = new Employee();
// e.setName('Ashok Lomada');
// e.setMarks(99);
// console.log(e.getMarks() + " " + e.getName());
// class Student {
//   constructor() {
//     let name;
//     let marks;
//   }
//   getName() {
//     return this.name;
//   }
//   setName(name) {
//     this.name = name;
//   }
//   getMarks() {
//     return this.marks;
//   }
//   setMarks(marks) {
//     if (marks < 0 || marks > 110) {
//       alert(marks);
//     } else {
//       this.marks = marks;
//     }
//   }
// }
// const s = new Student();
// s.setName('LOmada Ashok');
// s.setMarks(110);
// console.log(s.getMarks() + " " + s.getName());
// class Moment extends Date {
//   constructor() {
//     super();
//   }
// }
// const s = new Moment();
// console.log(s.getDate() + "/" + (s.getMonth() + 1) + "/" + s.getFullYear());
// class Bike {
//   constructor(company) {
//     this.company = company;
//   }
// }
// class Vehicle extends Bike {
//   constructor(name, price, company) {
//     super(company);
//     this.myName = name;
//     this.myPrice = price
//   }

// }
// const v = new Vehicle('Shine', 80000, 'Honda');
// console.log(`${v.myName} ${v.myPrice} ${v.company}`)
// class Student {
//   constructor(name, gender) {
//     this.myName = name;
//     this.myGender = gender;
//   }
// }
// class Employee extends Student {
//   constructor(name, gender, age, company, salary) {
//     super(name, gender)
//     this.myAge = age;
//     this.myCompany = company;
//     this.mySalary = salary;
//   }
//   details() {
//     console.log(`${this.myName} ${this.myGender} ${this.myAge} ${this.myCompany} ${this.mySalary}`)
//   }
// }
// const s = new Employee('Ashok Lomada', 'male', 29, '5Paisa', 100000);
// s.details();
// class Bike {
//   constructor(companyName) {
//     this.myCompany = companyName
//   }
// }
// class Vehicle extends Bike {
//   constructor(companyName, model, price) {
//     super(companyName);
//     this.myModel = model;
//     this.myPrice = price;
//   }
//   details() {
//     console.log(`${this.myCompany} ${this.myModel} ${this.myPrice} ${this.newModel}`)
//   }
// }
// Vehicle.prototype.newModel = 'Raider'
// const v = new Vehicle('BMW', 'Sports-model', 2000000);
// delete v.myCompany;
// delete v.newModel;
// v.details();
