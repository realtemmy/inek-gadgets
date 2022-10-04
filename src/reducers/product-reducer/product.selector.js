import { createSelector } from "reselect";

const selectProducts = (state) => state.product

export const selectProductCategories = createSelector(
    [selectProducts],
    (productsSlice) => productsSlice.products
)