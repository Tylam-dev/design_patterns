import { IChair } from "../../Interfaces/IProducts/IChair";
import { ITable } from "../../Interfaces/IProducts/ITable";

export class VictorianChair implements IChair {
    hasLegs: boolean;
    legs?: number;
    constructor(hasLegs: boolean, legs: number | undefined){
        this.hasLegs = hasLegs
        this.legs = legs
    }
}
export class VictorianTable implements ITable {
    hasLegs: boolean;
    legs?: number;
    constructor(hasLegs: boolean, legs: number | undefined){
        this.hasLegs = hasLegs
        this.legs = legs
    }
}
export class VictorianSofa implements IChair {
    hasLegs: boolean;
    legs?: number;
    constructor(hasLegs: boolean, legs: number | undefined){
        this.hasLegs = hasLegs
        this.legs = legs
    }
}