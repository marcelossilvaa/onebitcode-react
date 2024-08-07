import { useState } from "react";

function getInitialValue(){
  console.log("obtendo o valor inicial")
  return 1 + 1
}

export default function useCounter(){
  const [count, setCount] = useState(getInitialValue())
  
  const increment = () => {
    setCount((currentState) => currentState + 1)
    setCount((currentState) => currentState + 1)
  }
  console.log(count)

  return { count, increment }
}