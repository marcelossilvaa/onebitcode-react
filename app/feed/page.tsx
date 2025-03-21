'use client';
import React, { useEffect, useState } from 'react';

export default function Feed() {
  const [formData, setFormData] = useState({
    id: 0,
    email: '',
    comment: '',
    date: '',
    name: '',
    age: 0,
  });
  const [comments, setComments] = useState<
    { id: number; email: string; comment: string; date: string; name: string; age: number }[]
  >([]);

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const date = new Date(Date.now()).toLocaleString();
    const id = Math.floor(Math.random() * 1000);
    const commentWithDate = { ...formData, id, date };
    setComments((prevComments) => [...prevComments, commentWithDate]);

    setFormData((prevData) => ({ ...prevData, date }));
    setFormData({ id: 0, email: '', comment: '', date: date, name: '', age: 0 });
  };

  useEffect(() => {
    console.log('📌 ~ handleSubmit ~ comments', comments);
  }, [comments]);

  return (
    <main className="m-10 max-w-3xl mx-auto px-5">
      <div className=" flex flex-col gap-8 items-center justify-center w-full">
        <h3 className="text-2xl">Seção de Comentários</h3>
        <form className="flex flex-col gap-4 w-full max-w-3xl" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              className="bg-zinc-900  p-4"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="age">Idade</label>
            <input
              type="text"
              id="age"
              className="bg-zinc-900  p-4"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="bg-zinc-900  p-4"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="comment">Comentário</label>
            <textarea
              id="comment"
              className="bg-zinc-900   p-4"
              rows={6}
              cols={30}
              value={formData.comment}
              onChange={handleChange}
            ></textarea>
          </div>
          <button className="buttonStyles" type="submit">
            Enviar
          </button>
        </form>
      </div>
      <div className="p-8 ">
        {comments.length > 0 && (
          <>
            <h3 className="text-2xl mb-5">Comentários Recentes</h3>
            {comments.map(({ email, comment, date, name, age }) => (
              <div key={email} className="flex flex-col gap-2 items-start mb-10">
                <p>
                  <strong>
                    {name} - {age} anos
                  </strong>
                </p>
                <p>
                  <strong>{email}</strong>
                </p>
                <p>Data: {date}</p>
                <p className="capitalize">- {comment}</p>
                <hr className="h-[2px] w-full bg-black" />
              </div>
            ))}
          </>
        )}
      </div>
    </main>
  );
}
