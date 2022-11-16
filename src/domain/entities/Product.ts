import {IProductParms} from './interfaces/IProductParms'

export class Product {
    id: number | undefined;
    name: string;
    price: number;

    constructor(parms:IProductParms){
        this.id = parms.id;
        this.name = parms.name;
        this.price = parms.price;
    }   

    static create(params: IProductParms): Product {
		return new Product(params);
	}

}