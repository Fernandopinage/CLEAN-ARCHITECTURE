import { Product } from '../../../domain/entities/Product'
import { Request, Response} from '../../protocols/http/boundaries'

export class CreateProduct{

    execute(input:Request):Response{

        const product =  Product.create({
            id: input.body.id,
            name: input.body.name,
            price: input.body.price,
        });


        return{
            statusCode: 201,
            mensage: 'cadastro realizado com sucesso',
            body:product
        }
    }   
}