export class Car {
    public parts: string[] = []
    public showCar():void {
        console.log(`Car parts are ${this.parts.join(', ')}`)
    }
}