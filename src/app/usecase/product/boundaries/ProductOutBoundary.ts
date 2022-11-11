export interface UserOutputBoundary{
    statusCode: number,
    mensage: string,
    result?: Array<{
        id?: number,
        name: string,
        price:number
    }>
}