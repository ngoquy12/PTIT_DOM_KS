// Lấy theo id
let headingElement = document.getElementById("heading");
// Giá trị trả về sẽ là phần tử đầu tiên nó tìm thấy

// Lấy theo class
let headingElement1 = document.getElementsByClassName("heading");
// Giá trị trả về sẽ là một HTML Colection (Giống mảng nhưng khác ở chỗ nó không thể sử dụng được các hàm như push, pop, ...)

// Lấy theo seclector
let boxElement = document.querySelector("div");
// Giá trị trả về sẽ là phần tử đầu tiên mà nó tìm thấy

// Lấy theo querySelector
let boxes = document.querySelectorAll(".box-1");
// Giá trị trả về sẽ là một Node List
boxes.forEach((element) => {
  console.log(element);
});

// // Thêm một phần tử vào trong DOM
// let ulElement = document.createElement("ul");
// document.body.append(ulElement);

// let liElement = document.createElement("li"); // Tạo thẻ li
// liElement.innerHTML = "Xin chào các bạn";
// ulElement.appendChild(liElement); // Gắn thẻ li vào ul

const users = [
  {
    id: 1,
    user_name: "Nguyễn Văn Nam",
    age: 20,
    address: "Hà Nội",
    email: "nvnam@gmail.com",
  },
  {
    id: 1,
    user_name: "Nguyễn Văn Nam",
    age: 20,
    address: "Hà Nội",
    email: "nvnam@gmail.com",
  },
  {
    id: 1,
    user_name: "Nguyễn Văn Nam",
    age: 20,
    address: "Hà Nội",
    email: "nvnam@gmail.com",
  },
];

// b1: Lấy ra phần tử tbody
let tbodyElement = document.querySelector("#tbody");
// b2: Dùng map() để lặp qua từng phàn tử của mảng và kèm dữ liệu trong mảng
let userHtmls = users.map((user, index) => {
  return `
    <tr>
        <td>${index + 1}</td>
        <td>${user.user_name}</td>
        <td>${user.age}</td>
        <td>${user.address}</td>
        <td>${user.email}</td>
  </tr>
    `;
});

// b3: Ép mảng về dạng chuỗi HTML
let userHtml = userHtmls.join("");

console.log(userHtml);
// b4: Lấy chuỗi HTML ở b3 để gắn vào trong tbody
tbodyElement.innerHTML = userHtml;
