export interface CaPost {
  id: string;
  imageLink: string;
  title: string;
  summary: string;
  category: CaCategory;
}

export enum CaCategory {
  COCKTAIL = 'cocktail',
  BARWARE = 'barware',
  GLASSWARE = 'glassware'
}
