import { IProduct } from "../../intefaces/IProduct";
import { UserOutputBoundary } from "./boundaries/ProductOutBoundary";


export class SelectAllProduct implements IProduct{


    async execute():Promise<UserOutputBoundary> {

        return {
            statusCode: 200,
            mensage: 'sucesso',
            result: [{
                id:1,
                name:'luiz',
                price: 123
         }]
        }
    }

   
}