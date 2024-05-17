const URL = import.meta.env.VITE_API_URL;

const api = (customFetch = fetch) => ({
  data: async () => {
    const response = await customFetch(`${URL}/data`);
    const data = await response.text();
    const rows = data.split('\n').slice(1);
    return rows.map((row) => {
      const [region_name, year, value] = row.split(';');
      return { region_name, year: Number(year), value: Number(value) };
    });
  }
});

export { api };
