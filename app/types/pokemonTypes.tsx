export type PokemonData = {
    name: string;
    abilities: PokemonAbility[];
    sprites: PokemonSprite;
    height: number;
    weight: number;
    // Adicione outras propriedades conforme necessário
};

type PokemonAbility = {
    ability: {
        name: string;
        url: string;
    };
    is_hidden: boolean;
    slot: number;
};

type PokemonSprite = {
    front_default: string;
    back_default: string;
    // Adicione outros sprites conforme necessário
};

export type Pokemon = {
    name: string;
    url: string;
};
