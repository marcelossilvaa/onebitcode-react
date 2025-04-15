"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Pokemon, PokemonData } from "../types/pokemonTypes";

interface GameContextType {
    pokemon: Pokemon[];
    loading: boolean;
    dataPokemon: PokemonData | null;
    setPokemon: React.Dispatch<React.SetStateAction<Pokemon[]>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setDataPokemon: React.Dispatch<React.SetStateAction<PokemonData | null>>;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
    const [pokemon, setPokemon] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [dataPokemon, setDataPokemon] = useState<PokemonData | null>(null);

    return (
        <GameContext.Provider
            value={{
                pokemon,
                loading,
                dataPokemon,
                setPokemon,
                setLoading,
                setDataPokemon,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};

export const useGameContext = () => {
    const context = useContext(GameContext);
    if (!context) {
        throw new Error("useGameContext must be used within a GameProvider");
    }
    return context;
};
