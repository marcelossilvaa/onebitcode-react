"use client";
import GameCard, { NewGameForm } from "../components/game/NewGameForm";
import useGameCollection from "../hooks/useGameCollection";
import { useGameContext } from "../hooks/GameContext";
import { GameProvider } from "../hooks/GameContext";

export default function Game() {
    return (
        <GameProvider>
            <GameContent />
        </GameProvider>
    );
}

function GameContent() {
    const {
        pokemon,
        loading,
        dataPokemon,
        setPokemon,
        setLoading,
        setDataPokemon,
    } = useGameContext();
    const { games, addGame, removeGame } = useGameCollection();
    console.log("📌 ~ Game ~ games:", games);

    return (
        <div className="flex justify-center items-center text-white">
            <div className="m-10">
                <h1 className="text-2xl font-bold mb-2">Biblioteca de Jogos</h1>
                <NewGameForm addGame={addGame} />
                <div className="my-4 flex flex-wrap gap-[4%]">
                    {games.length === 0 && <p>Nenhum jogo adicionado</p> ? (
                        <h2 className="text-xl font-bold my-7 text-center w-full">
                            Nenhum jogo adicionado
                        </h2>
                    ) : (
                        games.map((game) => (
                            <GameCard
                                key={game.id}
                                title={game.title}
                                cover={game.cover}
                                onRemove={() => removeGame(game.id)}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
