interface ITransport {
    name: string
    deliver(): void
}

export class Transport implements ITransport{
    private _name:string
    public get name() {
        return this._name
    }
    public set name(name:string) {
        this._name = name
    }
    public deliver(){
        console.log(`El ${this._name} salio a entrega`)
    }
    constructor(name: string){
        this._name = name
    }
}