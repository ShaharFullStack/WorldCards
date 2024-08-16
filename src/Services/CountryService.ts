import axios from "axios";
import { CountryModel } from "../Models/CountryModel";
import { appConfig } from "../Utils/AppConfig";

class CountryService {
    public async getAllCountries(): Promise<CountryModel[]> {
        const response = await axios.get<CountryModel[]>(appConfig.countriesUrl);
        return response.data;
    }

    public async getOneCountry(name: string): Promise<CountryModel> {
        // Use the correct endpoint: /name instead of /all
        const response = await axios.get<CountryModel[]>(`${appConfig.countryDetailsUrl}/name/${name}`);
        return response.data[0]; // The API returns an array, so we need to access the first item
    }
}

export const countryService = new CountryService();
