export interface Ability {
    name: string;
    url: string;
};

export interface Pokemon {
    id: number;
    name: string;
    baseExperience: number;
    abilities: [Ability];
};
