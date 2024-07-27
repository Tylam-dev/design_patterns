import { IFurnitureFatory } from "../../Interfaces/IFurnitureFactory";
import { ISofa } from "../../Interfaces/IProducts/ISofa";
import { ITable } from "../../Interfaces/IProducts/ITable";
import { VictorianChair, VictorianSofa, VictorianTable } from "../Products/VictorianProducts";

export class VictorianFactory implements IFurnitureFatory {
    public createChair(): VictorianChair {
        return new VictorianChair(true, 4)
    }
    public createSofa(): ISofa {
        return new VictorianSofa(true, 4)
    }
    public createTable(): ITable {
        return new VictorianTable(true, 4)
    }
}