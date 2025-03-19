'use client'
import React, { useState } from "react"

export default function Feed(){
  const [formData, setFormData] = useState({email: "", comment: "", date : "", name: ""});
  const [comments, setComments] = useState<{email: string, comment: string, date: string, name: string}[]>([]);

  const handleChange = (e: any) => {
    const {id, value} = e.target;
    setFormData(prevData => ({ ...prevData, [id]: value }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const date = new Date(Date.now()).toLocaleString();
    const commentWithDate = {...formData, date}
    setComments(prevComments => [...prevComments, commentWithDate]);
    setFormData(prevData => ({ ...prevData, date }));
    setFormData({ email: "", comment: "", date: date, name: ""}); 
  };

  return (
    <main className="m-10">
      <div className=" flex flex-col gap-8 items-center justify-center w-full">
        <h3 className="text-2xl">Seção de Comentários</h3>
        <form className="flex flex-col gap-4 w-full max-w-3xl" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" className="bg-zinc-900  p-4" value={formData.name} onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="bg-zinc-900  p-4" value={formData.email} onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="comment">Comentário</label>
            <textarea id="comment" className="bg-zinc-900   p-4" rows={6} cols={30} value={formData.comment} onChange={handleChange}></textarea>
          </div>
          <button className="buttonStyles" type="submit">Enviar</button>
        </form>
      </div>
      <div className="p-8">
        <h3 className="text-2xl">Comentários Recentes</h3>
        {comments.map(({email, comment, date, name}) => (
          <div key={email} className="flex flex-col gap-2 items-start">
            <p><strong>{name}</strong></p>
            <p><strong>{email}</strong></p>
            <p>Data: {date}</p>
            <p className="te">-{comment}</p>
          </div>
        ))}
      </div>
    </main>
  )
}