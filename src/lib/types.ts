interface IRegion {
  crime_per_citizen: number;
  year: number;
}

interface ICombinedData {
  year: string;
  data: Record<string, number>
}

type RegionsDataShape = Record<string, IRegion[]>;

type CombinedDataShape = ICombinedData[];

export type { CombinedDataShape, IRegion, RegionsDataShape };
