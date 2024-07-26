export interface ITransport {
    name: string
    deliver(): void
}

export class Truck implements ITransport{
    private _name:string
    public get name() {
        return this._name
    }
    public set name(name:string) {
        this._name = name
    }
    public deliver(){
        console.log(`El ${this._name} salio por tierra`)
    }
    constructor(name: string){
        this._name = name
    }
}

export class Boat implements ITransport{
    private _name:string
    public get name() {
        return this._name
    }
    public set name(name:string) {
        this._name = name
    }
    public deliver(){
        console.log(`El ${this._name} salio por el mar`)
    }
    constructor(name: string){
        this._name = name
    }
}