export interface CharacterInterface {
    id: string;
    images: string;
}

export interface CharacterResponseInterface {
    info: {
        currentPage: number;
        count: number;
        pages: number;
    };
    result: CharacterInterface[];
}

export interface CharacterHeroCharacteristics {
    quirk: string;
    affiliation: string;
    teams: string; 
}

export interface CharacterPersonalData {
    alias: string; 
    description: string;
    birthday: string;
    status: string;
}

export interface CharacterPhysicalDescription {
    gender: string;
    height: string;
    hair: string;
    eye: string;
    bloodtype: string;
}
