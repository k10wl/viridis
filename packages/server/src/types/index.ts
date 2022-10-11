import { Document } from 'mongoose';

import { Recipe } from '@viridis/shared/types';

export type RecipeDocument = Recipe & Document;
