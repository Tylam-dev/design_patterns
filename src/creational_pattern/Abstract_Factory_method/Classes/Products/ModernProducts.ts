import { IChair } from "../../Interfaces/IProducts/IChair";
import { ITable } from "../../Interfaces/IProducts/ITable";

export class ModernChair implements IChair {
    hasLegs: boolean;
    legs?: number;
    constructor(hasLegs: boolean, legs: number | undefined){
        this.hasLegs = hasLegs
        this.legs = legs
    }
}
export class ModernTable implements ITable {
    hasLegs: boolean;
    legs?: number;
    constructor(hasLegs: boolean, legs: number | undefined){
        this.hasLegs = hasLegs
        this.legs = legs
    }
}
export class ModernSofa implements IChair {
    hasLegs: boolean;
    legs?: number;
    constructor(hasLegs: boolean, legs: number | undefined){
        this.hasLegs = hasLegs
        this.legs = legs
    }
}