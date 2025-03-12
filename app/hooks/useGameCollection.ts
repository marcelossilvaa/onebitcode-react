'use client'
import { useEffect, useState } from "react"

interface Game {
  id: number;
  title: string;
  cover: string;
}

const useGameCollection = () => {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedGames = localStorage.getItem("obc-game-lib")
      if (storedGames) {
        setGames(JSON.parse(storedGames) as Game[])
      }
    }
  }, [])

  const addGame = ({ title, cover }: { title: string; cover: string }) => {
    const id = Math.floor(Math.random() * 1000000)
    const game: Game = { id, title, cover }
    setGames((state) => {
      const newState = [...state, game]
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))
      return newState
    }
    )
  }

  const removeGame = (id: number) => {
    setGames((state) => {
      const newState = state.filter((game: any) => game.id !== id)
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))
      return newState
    })
  }

  return { games, addGame, removeGame }
}

export default useGameCollection;
