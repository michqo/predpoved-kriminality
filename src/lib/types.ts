interface IRegion {
  crime_per_citizen: number;
  year: number;
}

type DataShape = Record<string, IRegion[]>;

export type { IRegion, DataShape };
