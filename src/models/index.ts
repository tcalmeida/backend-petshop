import User from "./Users";
import Worker from "./Workers";
import Service from "./Services";
import Reservation from "./Reservations";

User.hasMany(Reservation, { foreignKey: "UserID" });
Reservation.belongsTo(User, { foreignKey: "UserID" });

Worker.hasMany(Reservation, { foreignKey: "WorkerID" });
Reservation.belongsTo(Worker, { foreignKey: "WorkerID" });

Service.hasMany(Reservation, { foreignKey: "ServiceID" });
Reservation.belongsTo(Service, { foreignKey: "ServiceID" });

export { User, Worker, Service, Reservation };