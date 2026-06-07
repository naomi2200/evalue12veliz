export interface Country {
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
    svg: string;
  };
  region: string;
  capital?: string[];
  population?: number;
  cca3?: string;
}