import { buttonStyles } from "../page";

interface InputProps {
  passwordSize: number;
  setPasswordSize: (size: number) => void;
}

export default function Input({ passwordSize, setPasswordSize }: InputProps) {

  return (
    <>
      <label htmlFor="passwordSize">Tamanho:</label>
      <div>
        <button onClick={() => setPasswordSize(passwordSize - 1)} className={buttonStyles}>- </button>
        <input 
          type="number" 
          id="passwordSize" 
          min={1} 
          className={`w-24 ${buttonStyles}`}
          value={passwordSize}
          onChange={(ev) => setPasswordSize(Number(ev.target.value))}
          maxLength={5}
        />
        <button onClick={() => setPasswordSize(passwordSize + 1)} className={buttonStyles}>+ </button>
      </div>
    </>
  )
}