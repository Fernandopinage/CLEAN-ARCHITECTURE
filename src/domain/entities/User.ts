import { IParms } from '../entities/repositore/IParms'

export class User{

    id: number | undefined;
    name: string;
    mail:string;
    age: number;
    sexo: string;
    cpf: string;
    rg: string;

    constructor(private parms:IParms){
        this.id = parms.id;
        this.name = parms.name;
        this.mail = parms.mail;
        this.age = parms.age;
        this.sexo = parms.sexo;
        this.cpf = parms.cpf;
        this.rg = parms.rg;
    }

    static create(params: IParms): User {
		return new User(params);
	}
}