import { IChair } from "./IProducts/IChair";
import { ISofa } from "./IProducts/ISofa";
import { ITable } from "./IProducts/ITable";

export interface IFurnitureFatory {
    createChair():IChair,
    createTable():ITable,
    createSofa():ISofa
}