import { createContext, useState } from "react";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {

  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  }

  const handleDecrement = () => {
    setCounter(counter - 1);
  }

  const handleClear = () => {
    setCounter(0);
  }

  return (
    <CounterContext.Provider
      value={{
        counter,
        handleDecrement,
        handleIncrement,
        handleClear
      }}
    >
      {children}
    </CounterContext.Provider>
  );
}