import { ModernFactory } from "./Classes/Factories/ModernFactory";
import { VictorianFactory } from "./Classes/Factories/VictorianFactory";

const modernFactory = new ModernFactory()
const victorianFactory = new VictorianFactory()

const newModernChair = modernFactory.createChair();
const newVictorianFactory = victorianFactory.createChair();

console.log(newModernChair, newVictorianFactory)