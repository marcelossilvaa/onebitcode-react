'use client'
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import GameCard, { NewGameForm } from "../components/NewGameForm";
interface Game {
  id: number;
  title: string;
  cover: string;
}

export default function Game() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedGames = localStorage.getItem("obc-game-lib")
      if (storedGames) {
        setGames(JSON.parse(storedGames) as Game[])
      }
    }
  }, [])

  const addGame = ({title, cover}: { title: string; cover: string }) => {
    const id  = Math.floor(Math.random() * 1000000)
    const game: Game = { id, title, cover }
    setGames((state) => {
      const newState = [...state, game]
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))
      return newState
    }
  )}
  
  const removeGame = (id: number) => {
    setGames((state) => {
      const newState = state.filter((game: any) => game.id !== id)
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))
      return newState
    })
  }

  return (
    <div className="flex justify-center items-center bg-zinc-800 text-white">
      <div className="my-10">
        <h1 className="text-2xl font-bold mb-2">Biblioteca de Jogos</h1>
        <NewGameForm addGame={addGame} />
        <div className="my-4">
          {
            games.map((game) => (
              <GameCard 
                key={game.id}
                title={game.title}
                cover={game.cover}
                onRemove={() => removeGame(game.id)}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}