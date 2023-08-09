// import React, { useState, useEffect } from "react";
// import Counter from "./counter";
// import Display from "./display";

// function App() {
//   const [cha, setCha] = useState(3);
//   const [chaEven, setChaEven] = useState(cha % 2 === 0);
//   const [int, setInt] = useState(5);
//   const [intEven, setIntEven] = useState(int % 2 === 0);
//   const [str, setStr] = useState(8);
//   const [strEven, setStrEven] = useState(str % 2 === 0);

//   useEffect(() => {
//     // Check if the count value is even or odd and update isEven accordingly.
//     setChaEven(cha % 2 === 0);
//     setCha(cha);
//   }, [cha]);

//   useEffect(() => {
//     // Check if the count value is even or odd and update isEven accordingly.
//     setIntEven(int % 2 === 0);
//     setInt(int);
//   }, [int]);

//   useEffect(() => {
//     // Check if the count value is even or odd and update isEven accordingly.
//     setStrEven(str % 2 === 0);
//     setStr(str);
//   }, [str]);

//   return (
//     <div className="App">
//       <Counter number={cha} />
//       <Counter number={int} />
//       <Counter number={str} />
//       <Display name="Charisma" number={cha} />
//       <Display name="Intelligence" number={int} />
//       <Display name="Strength" number={str} />
//     </div>
//   );
// }

// export default App;
