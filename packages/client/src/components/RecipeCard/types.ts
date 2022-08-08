import { RecipeBase } from '@viridis/shared/types';

export type RecipeProps = Omit<RecipeBase, 'cookingProcess'>;
