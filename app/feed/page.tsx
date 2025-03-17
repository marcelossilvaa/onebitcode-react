'use client'
import React, { useState } from "react"

export default function Feed(){
  const [formData, setFormData] = useState({email: "", comment: ""})
  const [comments, setComments] = useState<{email: string, comment: string}[]>([]);

  const handleChange = (e: any) => {
    const {id, value} = e.target;
    setFormData(prevData => ({ ...prevData, [id]: value }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setComments(prevComments => [...prevComments, formData]);
    setFormData({ email: "", comment: "" }); 
  };

  return (
    <main className="m-10">
      <div className=" flex flex-col gap-8 items-center justify-center w-full">
        <h3 className="text-2xl">Seção de Comentários</h3>
        <form className="flex flex-col gap-4 w-full max-w-3xl" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="text-black" value={formData.email} onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="comment">Comentário</label>
            <textarea id="comment" className="text-black" value={formData.comment} onChange={handleChange}></textarea>
          </div>
          <button className="buttonStyles" type="submit">Enviar</button>
        </form>
      </div>
      <div className="p-8">
        <h3 className="text-2xl">Comentários Recentes</h3>
        {comments.map(({email, comment}) => (
          <div key={email} className="flex flex-col gap-2 items-start">
            <p><strong>{email}</strong>: {comment}</p>
          </div>
        ))}
      </div>
    </main>
  )
}