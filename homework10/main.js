//HW1 Cho đoạn code sau, sau đó biểu diễn các cách để truy cập được các thuộc tính bên trong object đó
// let person = {
//     name:       'Bob',
//     occupation: 'web developer',
//     hobbies:    'painting',
//};
// console.log(person.name)
// console.log(person['name'])

//HW2 Cho object obj, hãy tạo một array chứa key của tất cả các property của obj và đều viết hoa
// let obj = {
//     b: 2,
//     a: 1,
//     c: 3,
//};

//   let arr = [];
// obj2 = Object.keys(obj);
// arr.push(obj2);
// output = arr.join();
// console.log(output.toUpperCase())

//HW3: Tạo một object mới có tên family và sử dụng Object myFamily như là prototype của object đó

// function Family(quantity, member, location) {
//     this.quantity = quantity;
//     this.member = member;
//     this.location = location;
// }
//  Family.prototype.myFamily= {
//     quantity: 4,
//     member: ["Dad", "Mom", "Me", "Daughter"],
//     location: "Vietnam",
// };
//  let family =new Family()
//  console.log(family.myFamily)

//HW4 Thay đổi giá trị 6 bằng 606 bằng 2 cách
//C1
// let obj = {
//     foo: { a: "hello", b: "world" },
//     bar: ["example", "mem", null, { xyz: 6 }, 88],
//     qux: [4, 8, 12]
// };
// let obj2 = obj.bar;
// obj2[3].xyz = 606;
// console.log(obj)

//C2
// let obj = {
//     foo: { a: "hello", b: "world" },
//     bar: ["example", "mem", null, { xyz: 6 }, 88],
//     qux: [4, 8, 12]
// };
// function changeBar(number) {
//     obj.bar[3].xyz =  number;
//     console.log(obj)
// }
// changeBar(606)

//HW5 For in loop and recursive to get all keys of object

var user = {
  name: "Hieu",
  age: 18,
  appearence: {
    hairColor: "black",
    skinColor: "yellow",
    height: 1700,
    weight: 68,
  },
};
function getAll(user, key) {
  if(!(user instanceof Array) && typeof user == 'object') {
    for( let i in user) {
        key.push[i];
        let value = user[i];
        if(typeof value === 'object' && !(value instanceof Array)) {
            getAll(value, key);
            console.log(key)
        }
    }
  }
  return key;
}
getAll(user, key);

//HW6 Write function to insert element at index of aray

// function insert(array,index,element) {
//     array.splice(index, 0, element);
//     console.log(array)
// }
// insert([21, 4, 5, -1], 3, 99)




