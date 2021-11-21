export interface Abilitie {
    name: string;
    url: string;
};

export interface Pokemon {
    id: number;
    name: string;
    baseExperience: number;
    abilities: [Abilitie];
};
