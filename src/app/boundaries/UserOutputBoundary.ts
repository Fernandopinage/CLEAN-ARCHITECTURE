export interface UserOutputBoundary {

    statusCode: number,
    mensage: string,
    result?: Array<{
        id?: number,
        name: string,
        mail: string,
        age: number,
        sexo: string,
        cpf: string,
        rg: string,
    }>
}