const URL = import.meta.env.VITE_API_URL;

const api = (customFetch = fetch) => ({
  data: async (region: string) => {
    const response = await customFetch(`${URL}/region?region=${region}`);
    const data = await response.json();
    return data;
  }
});

export { api };
