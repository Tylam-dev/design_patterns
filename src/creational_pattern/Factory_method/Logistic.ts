import { Transport } from "./ITransport"

interface ILogistic {
    CreateTransport(name:string):Transport
}
export class Logistic implements ILogistic {
    public CreateTransport(name:string):Transport {
        return new Transport(name)
    }
}