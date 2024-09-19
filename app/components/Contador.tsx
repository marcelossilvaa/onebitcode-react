import useCounter from "../hooks/useCounter"
import { buttonStyles } from "../page"

export default function Contador(){
  const counter = useCounter()

  return(
    <button onClick={counter.increment} className={buttonStyles}>{counter.count}</button>
  )
}