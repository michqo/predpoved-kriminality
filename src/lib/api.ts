import { IRegion } from "./types";

const URL = import.meta.env.VITE_API_URL;

const regions = [
  'Banskobystrický',
  'Bratislavský',
  'Košický',
  'Nitriansky',
  'Prešovský',
  'Trenčiansky',
  'Trnavský',
  'Žilinský'
];

const api = (customFetch = fetch) => ({
  region: async (region: string): Promise<IRegion[]> => {
    const response = await customFetch(`${URL}/region?region=${region}`);
    const data = await response.json();
    return data;
  }
});

export { api, regions };
