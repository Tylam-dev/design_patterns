import { Car } from "./Car";

export class BuilderCar implements BuilderCar {
    constructor() {
        this.reset();
    }
    private car: Car = new Car()
    public reset():void {
        this.car = new Car()
    }

    public SetGlass():void{
        this.car.parts.push('normal glass')
    }
    public SetAirconditioner():void{
        this.car.parts.push('airconditioner')
    }
    public SetScreenPanel():void{
        this.car.parts.push('screen panel')
    }
    public SetColor(color:string):void{
        this.car.parts.push(color)
    }
    public getCar() {
        const result = this.car
        this.reset()
        return result
    }
}

export class Director {
    private builder: BuilderCar = new BuilderCar()
    public setBuilder(builder: BuilderCar){
        this.builder = builder
    }

    public buildBasicCar(): void {
        this.builder.SetColor('gray')
        this.builder.SetGlass()
    }

    public buildComplexCar():void {
        this.builder.SetAirconditioner()
        this.builder.SetColor('black')
        this.builder.SetGlass()
        this.builder.SetScreenPanel()
    }
}