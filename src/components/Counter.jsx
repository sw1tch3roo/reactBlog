// import React, { useState } from "react"; // useState - обязательный импорт
// // без импорта не работает

// const Counter = () => {
//   const [count, setCount] = useState(0);
//   // аргумент - значение по умолчанию
//   // useState функция, принимает  1 аргумент - само значение
//   // 2 аргумент - функция для измненияя состояния!!!
//   // ТО ЕСТЬ USE STATE ДВУСТОРОННЕ СВЯЗЫВАЕТ состояние со значением DOM-элемента

//   function increment() {
//     setCount(count + 1);
//   }

//   function decrement() {
//     setCount(count - 1);
//   }

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// };

// export default Counter;
