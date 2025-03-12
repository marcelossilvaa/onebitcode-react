'use client'
import GameCard, { NewGameForm } from "../components/NewGameForm";
import useGameCollection from "../hooks/useGameCollection";

export default function Game() {
  const { games, addGame, removeGame } = useGameCollection()

  return (
    <div className="flex justify-center items-center bg-zinc-800 text-white h-dvh">
      <div className="m-10">
        <h1 className="text-2xl font-bold mb-2">Biblioteca de Jogos</h1>
        <NewGameForm addGame={addGame} />
        <div className="my-4 flex flex-wrap gap-[4%]">
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