import { BuilderCar, Director } from "./Classes/Builder";

const director = new Director()
const builder = new BuilderCar()

director.setBuilder(builder)

console.log('Basic Car')
director.buildBasicCar()
builder.getCar().showCar()

console.log('Complex Car')
director.buildComplexCar()
builder.getCar().showCar()

console.log('custom car')
builder.SetColor('green')
builder.SetGlass()
builder.SetAirconditioner()
builder.getCar().showCar()