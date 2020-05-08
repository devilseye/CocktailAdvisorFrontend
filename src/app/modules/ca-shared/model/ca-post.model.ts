export interface CaPost {
  id: string;
  imageLink: string;
  title: string;
  summary: string;
  category: CaCategoryTypes;
}

export enum CaCategoryTypes {
  COCKTAIL = 'cocktails',
  BARWARE = 'barware',
  GLASSWARE = 'glassware'
}

