import { Boat, ITransport, Truck } from "./ITransport"

interface ILogistic {
    CreateTransport(name:string):ITransport
}
export class SeaLogistic implements ILogistic {
    public CreateTransport(name:string):Boat {
        return new Boat(name)
    }
}

export class EarthLogistic implements ILogistic {
    public CreateTransport(name:string):Truck {
        return new Truck(name)
    }
}