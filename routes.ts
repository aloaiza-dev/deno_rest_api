import { Router } from "https://deno.land/x/oak/mod.ts"
import {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct,
} from "./controllers/products.ts"

const router = new Router()
const PRODUCTS_BASE_URL = "/api/v1/products"

router
    .get(`${PRODUCTS_BASE_URL}`, getProducts)
    .get(`${PRODUCTS_BASE_URL}/:id`, getProduct)
    .post(`${PRODUCTS_BASE_URL}`, addProduct)
    .put(`${PRODUCTS_BASE_URL}/:id`, updateProduct)
    .delete(`${PRODUCTS_BASE_URL}/:id`, deleteProduct)

export default router
