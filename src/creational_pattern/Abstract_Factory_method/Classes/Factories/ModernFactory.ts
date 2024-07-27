import { IFurnitureFatory } from "../../Interfaces/IFurnitureFactory";
import { ISofa } from "../../Interfaces/IProducts/ISofa";
import { ITable } from "../../Interfaces/IProducts/ITable";
import { ModernChair, ModernSofa, ModernTable } from "../Products/ModernProducts";

export class ModernFactory implements IFurnitureFatory {
    public createChair(): ModernChair {
        return new ModernChair(false, undefined)
    }
    public createSofa(): ISofa {
        return new ModernSofa(false, undefined)
    }
    public createTable(): ITable {
        return new ModernTable(false, undefined)
    }
}