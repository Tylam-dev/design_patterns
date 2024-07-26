import { EarthLogistic, SeaLogistic } from "./Logistic";

const roadLogistic = new EarthLogistic();
const seaLogistic = new SeaLogistic();

const truck1 = roadLogistic.CreateTransport("Truck 1")
const boat = seaLogistic.CreateTransport("Boat 1")

truck1.deliver();
boat.deliver();