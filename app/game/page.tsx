'use client'
import { useState } from "react"

export default function Game() {
  const [title, setTitle] = useState("")
  const [cover, setCover] = useState("")
  const [games, setGames] = useState(() => {
    const storedGames = localStorage.getItem("obc-game-lib")
    if (!storedGames) return []
    return JSON.parse(storedGames)
  })

  const addGame = ({title, cover}: { title: string; cover: string }) => {
    const id  = Math.floor(Math.random() * 1000000)
    const game = {id, title, cover}
    setGames((state: any) => {
      const newState = [...state, game]
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))
      return newState
    }
  )}
  
  const removeGame = (id: number) => {
    setGames(state => {
      const newState = state.filter(game => game.id !== id)
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))
      return newState
    })
  }

  const handleSubmit = (ev: any) => {
    ev.preventDefault()
    addGame({title, cover})
    console.log({title, cover})
    setTitle("")
    setCover("")
  }

  
  return (
    <div className="flex justify-center items-center h-lvh bg-zinc-800 text-white">
      <div className="">
        <h1 className="text-2xl font-bold mb-2">Biblioteca de Jogos</h1>
        <form action="" className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="title">Título:</label>
            <input 
              type="text" 
              id="title" 
              name="title" 
              className='buttonStyles' 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="cover">Capa: </label>
            <input 
              type="text" 
              id="cover" 
              name="cover" 
              className='buttonStyles'
              value={cover}
              onChange={(e) => setCover(e.target.value)}
            />
          </div>
          <button type="submit" className="buttonStyles">Adicionar à biblioteca</button>
        </form>
        <div className="my-4">
          {
            games.map(game => (
              <div className="mb-4 flex gap-5 bg-neutral-700 p-4 rounded-2xl" key={game.id}>
                  <img src={game.cover} alt={game.title} className="w-32 h-32 object-cover rounded-2xl" />
                  <div className="flex flex-col gap-4 justify-around">
                    <h2>{game.title}</h2>
                    <button className="buttonStyles !py-2" onClick={() => removeGame(game.id)}>Romover Jogo</button>
                  </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}