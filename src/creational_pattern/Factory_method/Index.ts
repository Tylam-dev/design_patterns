import { Logistic } from "./Logistic";

const roadLogistic = new Logistic();
const seaLogistic = new Logistic();

const truck1 = roadLogistic.CreateTransport("Truck 1")
const boat = seaLogistic.CreateTransport("Boat 1")

truck1.deliver();
boat.deliver();