"use client";
import React, { useState, useEffect } from "react";

type Pokemon = {
    name: string;
    url: string;
};

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
    const [namePokemon, setNamePokemon] = useState("");
    const [imagePokemon, setImagePokemon] = useState("");
    useEffect(() => {
        fetchPokemon().then((results) => {
            setPokemon(results);
            setLoading(false);
            console.log("Pokemons >>", results);
        });
    }, []);

    const handleClick = (url: string) => {
        fetchDataPokemon(url).then((results) => {
            console.log("Data Pokemon >>", results);
            setNamePokemon(results.name);
            setImagePokemon(results.sprites.front_default);
            console.log("Nome do Pokémon >>", namePokemon);
        });
    };

    useEffect(() => {
        console.log("Nome do Pokemon Escolhido >>", namePokemon);
    }, [namePokemon]);

    return (
        <div className="m-auto w-full flex justify-center flex-col my-10 gap-4 pl-5 max-w-[650px]">
            <h1 className="text-2xl">Page useEffect</h1>
            <hr className="h-1 w-full" />
            <h2 className="text-xl font-semibold">Pokemon</h2>
            <hr className="h-1 w-full" />
            {namePokemon && (
                <div className="text-xl text-center pb-8 flex items-center justify-center flex-col">
                    <img
                        src={imagePokemon}
                        alt={namePokemon}
                        className="w-[150px] mb-[-20px]"
                    />
                    <p>Nome do Pokémon Escolhido: {namePokemon}</p>
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
