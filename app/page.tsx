'use client'
import { useState } from "react";
import useCounter from "./hooks/useCounter";

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

const buttonStyles = "bg-zinc-900 p-4 rounded-lg hover:bg-zinc-800 transition-colors duration-500 shadow-xl active:focus:duration-200 active:focus:bg-zinc-600"

export default function Home() {
  const counter = useCounter()

  const [password, setPassowrd] = useState('')
  const [copyText, setCopyText] = useState('Copiar')
  
  function generate(){
    const characters = "'123456789-=qwertyuiopasdfghjklzxcvbnm"
    let length = 12
    let newPassword = ""
    for (let i = 0; i < length; i++){
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
      <h1 className="text-2xl">Gerador de senhas</h1>
      <div className="flex gap-8 ">
        <button onClick={generate} className={buttonStyles}>Gerar!</button>
        <button className={buttonStyles} onClick={copyToClipBoard}>{copyText}</button>
      </div>
      <div>{password}</div>
    </main>
  );
}
