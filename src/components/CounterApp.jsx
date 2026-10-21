import { useState } from "react";
const CounterApp = () => {
  //hooks
  //Estado de un componente (memoria)
  //useState

  //   const personas = ["juan", "pedro", "Alberto"];
  //   const [persona1, persona2, persona3] = personas;

  //Variable de estado, función para actualizar el estado
  const [counter, setCounter] = useState(0);

  //   let counter = 5;
  const increment = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  const decrement = () => {
    setCounter(counter - 1);

    console.log(counter);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Contador</h2>
      <h3 style={{ fontSize: "35px", margin: "0px" }}>{counter}</h3>
      <div
        style={{
          margin: "10px 0px",
          display: "flex",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <button
          className="btn-react"
          style={{
            borderRadius: "5px",
            padding: "5px 10px",
            fontWeight: "bold",
          }}
          onClick={increment}
        >
          +1
        </button>
        <button
          className="btn-react"
          style={{
            borderRadius: "5px",
            padding: "5px 10px",
            fontWeight: "bold",
          }}
          onClick={decrement}
        >
          -1
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
