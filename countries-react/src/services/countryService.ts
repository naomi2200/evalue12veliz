import axios from "axios";
import type { Country } from "../types/Country";

const API_URL =
  "https://restcountries.com/v3.1/all?fields=name,flags,region";

export const getCountries = async (): Promise<Country[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};