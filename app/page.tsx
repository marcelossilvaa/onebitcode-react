'use client'
import { useState } from "react";

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
    <main className="flex gap-8">
      <div className="flex gap-8">
      {array.map((item, index) => (
        <a key={index} href={item.title}>{item.title}</a>
      ))}
      </div>
      
    </main>
  );
}
