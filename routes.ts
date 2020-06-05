import { Router } from "https://deno.land/x/oak/mod.ts"
import {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct,
} from "./controllers/products.ts"

const router = new Router()
const BASE_URL = "/api/v1"

router
    .get(`${BASE_URL}/products`, getProducts)
    .get(`${BASE_URL}/products/:id`, getProduct)
    .post(`${BASE_URL}/products`, addProduct)
    .put(`${BASE_URL}/products/:id`, updateProduct)
    .delete(`${BASE_URL}/products/:id`, deleteProduct)

export default router
