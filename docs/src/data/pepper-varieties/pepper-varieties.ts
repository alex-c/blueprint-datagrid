/* eslint-disable @typescript-eslint/consistent-type-assertions */
export enum PodColor {
  GREEN = <any>"green",
  WHITE = <any>"white",
  PEACH = <any>"peach",
  YELLOW = <any>"yellow",
  ORANGE = <any>"orange",
  RED = <any>"red",
  PURPLE = <any>"purple",
  BLACK = <any>"black",
  CHOCOLATE = <any>"chocolate",
  MUSTARD = <any>"mustard",
}

export interface Variety {
  name: string;
  species: string;
  shuLowerBound: number;
  shuUpperBound: number;
  rare: boolean;
  colorUnripe: PodColor;
  colorRipe: PodColor;
}

export const varieties: Variety[] = [
  {
    name: "Jalapeno",
    species: "C. annuum",
    shuLowerBound: 4000,
    shuUpperBound: 8500,
    rare: false,
    colorUnripe: PodColor.GREEN,
    colorRipe: PodColor.RED,
  },
  {
    name: "Inca Peach Drop",
    species: "C. baccatum",
    shuLowerBound: 55000,
    shuUpperBound: 100000,
    rare: true,
    colorUnripe: PodColor.GREEN,
    colorRipe: PodColor.PEACH,
  },
  {
    name: "Habanero Red Savina",
    species: "C. chinense",
    shuLowerBound: 100000,
    shuUpperBound: 350000,
    rare: false,
    colorUnripe: PodColor.GREEN,
    colorRipe: PodColor.RED,
  },
  {
    name: "Yaki Blue",
    species: "C.chinense",
    shuLowerBound: 150000,
    shuUpperBound: 600000,
    rare: true,
    colorUnripe: PodColor.PURPLE,
    colorRipe: PodColor.RED,
  },
];
