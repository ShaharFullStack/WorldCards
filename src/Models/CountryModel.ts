export interface CountryModel {
    name: {
      common: string;
      official: string;
    };
    capital: string[];
    population: number;
    flags: {
      png: string;
      svg: string;
    };
    languages: { [key: string]: string };
    unMember: boolean;
    continents: string[];
  }
  