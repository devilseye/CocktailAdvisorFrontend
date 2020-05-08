import {CaPreparationMethod} from './ca-preparation-method.model';
import {CaGlassware} from '../../ca-inventory/model/ca-glassware.model';
import {CaCocktailCategory} from './ca-cocktail-category.model';

export class CaCocktail {
  id: string;
  name: string;
  description: string;
  receiptSteps: string[];
  preparationMethod: CaPreparationMethod;
  glassware: CaGlassware;
  imageLink: string;
  categories: CaCocktailCategory[];
}
