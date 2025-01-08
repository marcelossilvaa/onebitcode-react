'use client'
import { useState } from "react";
import Contador from "./components/Contador";
import Input from "./components/Input";

const array = [
{
  title: 'Teste',
  link: 'google.com'
},
{
  title: 'Teste',
  link: 'google.com'
},
]

export const buttonStyles = "bg-zinc-900 p-4 rounded-lg hover:bg-zinc-800 transition-colors duration-500 shadow-xl active:focus:duration-200 active:focus:bg-zinc-600"

export default function Home() {
  const [password, setPassowrd] = useState('')
  const [copyText, setCopyText] = useState('Copiar')
  const [customSize, setCustomSize] = useState(12)
  const [showInput, setShowInput] = useState(false)

  const passwordSize = showInput ? customSize : 8

  function generate(){
    const characters = "123456789-=qwertyuiopasdfghjklzxcvbnm#@$%&*"
    let newPassword = ""
    for (let i = 0; i < passwordSize; i++){
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]
    }
    setPassowrd(newPassword)
    setCopyText("Copiar")
  }

  function copyToClipBoard(){
    window.navigator.clipboard.writeText(password)
    setCopyText("Copiado!")
  }


  return (
    <main className="flex justify-center flex-col items-center gap-8 bg-zinc-800 text-white h-lvh w-full">
      <h1 className="text-3xl">Gerador de senhas</h1>
      <div className="flex flex-col items-center">
        <div className={`flex items-center gap-2 py-2 rounded-xl px-4  ${showInput ? `mb-4` : ``  } ${buttonStyles}`}>
          <input 
            className="w-4 h-4 cursor-pointer"
            type="checkbox" 
            id="showInput" 
            value={showInput.toString()} 
            onChange={() => 
            setShowInput(currentState => !currentState)} 
          />
          <label htmlFor="showInput" className="cursor-pointer">Customizar tamanho</label>
        </div>
        {showInput ? (
          <div>
          <Input passwordSize={passwordSize} setPasswordSize={setCustomSize}/>
        </div>
        ) : null}
        
      </div>
      <div className="flex gap-8 ">
        <div>
          <button onClick={generate} className={buttonStyles}>Gerar senha de {showInput ? passwordSize : 8} caracteres! </button>
        </div>
        
        <button className={buttonStyles} onClick={copyToClipBoard}>{copyText}</button>
      </div>
      <div>{password}</div>
      <hr className="h-[1px] w-[70%]"/>
      <Contador ></Contador>
    </main>
  );
}
