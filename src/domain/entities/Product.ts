import { IProductParms } from "./repositore/IProductParms";

export interface Product {

    execute():Promise<IProductParms>

}