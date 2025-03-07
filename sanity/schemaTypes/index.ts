import { type SchemaTypeDefinition } from "sanity";

import { categoryType } from "./categoryType";
import { ProductType } from "./productType";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [categoryType, ProductType],
};
