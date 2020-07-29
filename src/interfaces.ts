
export interface Languages {
    name:string;
}

export interface Currencies {
    name:string;
    symbol:string;
}

export interface Country {
    name: string;
    capital: string;
    alpha2Code: string;
    flag: string;
    borders: [];
    timezones: [];
    languages: Languages[];
    currencies: Currencies[];
    topLevelDomain: [];
}


