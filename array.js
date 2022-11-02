const lodash = require('lodash');
const { stringify } = require('querystring');

let array = [
  {
    quantity: 1,
    name: 'A',
    id: 1,
    cost: 900,
  },
  {
    quantity: 10,
    name: 'B',
    id: 2,
    cost: 500,
  },
  {
    quantity: 10,
    name: 'B',
    id: 2,
    cost: 500,
  },
  {
    quantity: 4,
    name: 'C',
    id: 3,
    cost: 900,
  },
  {
    quantity: 8,
    name: 'A',
    id: 1,
    cost: 200,
  },
  {
    quantity: 1,
    name: 'E',
    id: 5,
    cost: 800,
  },
  {
    quantity: 9,
    name: 'A',
    cost: 900,
    id: 1,
  },
];
const TongGia = 0;

// Viết code dưới đoạn này

//
console.log({ array });
console.log({ TongGia });

// 1. Giảm quantity của sản phẩm A đi 1, nếu quantity < 1 xóa sản phẩm A khỏi mảng
// 2. Gộp các sản phẩm cùng id lại thành 1. Ví dụ A id: 1, quantity: 2 và A id: 1 quantity:3 => A id: 1, quantity: 5
// 3. Tăng quantity của sản phẩm B lên 1
// 4. Tính tổng giá trị của tất cả các sản phẩm. Giá = cost * quantity

const filter = array.filter(item => item.quantity !== 0);

console.log(filter);

const a = array.filter((item, index) => array.indexOf(item) !== index);
console.log(a);
console.log('==============');
console.log(array);

// for (let i = 0; i < array.length - 1; i++) {
//   let id = array[i].id;
//   let count = 0;
//   let temp = array[i];
//   for (let j = i + 1; j < array.length; j++) {
//     if (array[j].id === id) {
//       temp = {
//         ...temp,
//         quantity: array[j].quantity + temp.quantity,
//       };
//       count++;
//     }
//   }

//   if (count > 0) {
//     array = array.filter(item => item.id !== id);
//     array.push(temp);
//   }

// }
for (let i = 0; i < array.length; i++) {
  let q = 0;

  for (let j = i; j < array.length; j++) {
    if (array[j].id === array[i].id) q += array[j].quantity;
  }

  array[i].quantity = q;
  array = lodash.reject(array, el => {
    return el.id === array[i].id && !lodash.isEqual(el, array[i]);
  });
}

console.log(array);

const T = array.reduce((acc, item) => acc + item.quantity * item.cost, 0);

console.log(T);
