import { Product } from "../../../domain/entities/Product";
import { IProductParms } from "../../../domain/entities/repositore/IProductParms";

export class SelectProduct implements Product{

    async execute(): Promise<IProductParms> {

        return {
            id:1, name:'luiz',price: 123
        }
    }

   
}