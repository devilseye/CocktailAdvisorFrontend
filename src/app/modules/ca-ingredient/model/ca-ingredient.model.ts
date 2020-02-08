import {CaIngredientCategory} from './ca-ingredient-category.model';

export class CaIngredient {
  id: string;
  name: string;
  description: string;
  category: CaIngredientCategory;
  imageLink: string;
}
