import { Router , Request, Response } from 'express';
import {
    createProduct, 
    deleteProduct, 
    getALLProducts, 
    getProductById, 
    modifyProduct
} from "../controllers/productController"
const productRouter:Router = Router();

productRouter.get('/', getALLProducts)

productRouter.get('/:id', getProductById);

productRouter.post('/', createProduct)

productRouter.patch('/:id', modifyProduct)

productRouter.delete('/:id', deleteProduct)

export default productRouter;