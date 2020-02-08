import {CaMeasureUnit} from '../../ca-ingredient/model/ca-measure-unit.model';

export class CaCocktailIngredient {
  id: string;
  ingredient: CaCocktailIngredient;
  count: number;
  measureUnit: CaMeasureUnit;
  isOptional: boolean;
  garnish: string;
}
