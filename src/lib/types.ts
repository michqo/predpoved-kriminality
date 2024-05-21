interface IRegion {
  crime_per_citizen: number;
  year: number;
}

interface ICombinedRegion {
  region: string;
  crime_per_citizen: number;
  year: number;
}

type RegionsDataShape = Record<string, IRegion[]>;

type CombinedDataShape = ICombinedRegion[];

export type { CombinedDataShape, IRegion, RegionsDataShape };
