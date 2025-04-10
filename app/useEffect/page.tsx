"use client";
import React, { useState, useEffect } from "react";
import { PokemonData, Pokemon } from "../types/pokemonTypes";

async function fetchPokemon() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    return data.results;
}

async function fetchDataPokemon(url: string) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

console.log("Pokemons >>", fetchPokemon());
export default function pageUseEffect() {
    const [pokemon, setPokemon] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [dataPokemon, setDataPokemon] = useState<PokemonData | null>(null);

    useEffect(() => {
        fetchPokemon().then((results) => {
            setPokemon(results);
            setLoading(false);
            console.log("Pokemons:", results);
        });
    }, []);

    const handleClick = (url: string) => {
        fetchDataPokemon(url).then((results) => {
            setDataPokemon(results);
            console.log("Data Pokemon:", dataPokemon?.name);
        });
    };

    return (
        <div className="m-auto w-full flex justify-center flex-col my-10 gap-4 pl-5 max-w-[650px]">
            <h1 className="text-2xl">Page useEffect</h1>
            <hr className="h-1 w-full" />
            <h2 className="text-xl font-semibold">Pokemon</h2>
            <hr className="h-1 w-full" />
            {dataPokemon && (
                <div className="text-xl text-center pb-8 flex items-center justify-center flex-col">
                    <img
                        src={dataPokemon?.sprites.front_default}
                        alt={dataPokemon?.name}
                        className="w-[150px] mb-[-20px]"
                    />
                    <p>
                        Nome:{" "}
                        <span className="capitalize">{dataPokemon?.name}</span>
                    </p>
                    <p>Altura: {(dataPokemon?.height / 10).toFixed(1)} m</p>
                    <p>Peso: {(dataPokemon?.weight / 10).toFixed(1)} Kg</p>
                </div>
            )}

            {loading ? (
                <p className="w-full text-center py-8">Carregando...</p>
            ) : (
                <ul className="flex flex-col gap-6 text-lg overflow-y-scroll h-[45vh]">
                    {pokemon.map((poke, index) => (
                        <li
                            key={index}
                            className="grid grid-cols-2 gap-4 items-center border-b border-zinc-900"
                        >
                            <span className="capitalize mr-4">{poke.name}</span>
                            <button
                                className="buttonStyles !py-2  text-center"
                                onClick={() => handleClick(poke.url)}
                            >
                                Ver Detalhes
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
