import { IProduct } from "../../intefaces/IProduct";
import { Request, Response } from "../../protocols/http/boundaries";


export class SelectAllProduct implements IProduct{


    async execute():Promise<Response> {

        return {
            statusCode: 200,
            mensage: 'sucesso',
            body: [{
                id:1,
                name:'luiz',
                price: 123
         }]
        }
    }

   
}