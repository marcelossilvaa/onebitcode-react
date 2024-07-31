'use client'
import { useState } from "react";
import "./globals.css";
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

export default function Home() {

  return (
    <main className="flex justify-center items-center gap-8 bg-black text-white h-lvh w-full">
      <div className="flex gap-8">
        {array.map((item, index) => (
          <a key={index} href={item.title}>{item.title}</a>
        ))}
      </div>
      <div>
        <button className="bg-slate-600 p-5 rounded-3xl" >Teste</button>
      </div>
    </main>
  );
}
