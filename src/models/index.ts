import Users from "./Users";
import Workers from "./Workers";
import Services from "./Services";
import Reservations from "./Reservations";

Users.hasMany(Reservations, { foreignKey: "IDUser" });
Reservations.belongsTo(Users, { foreignKey: "UserID" });

Workers.hasMany(Reservations, { foreignKey: "IDWorker" });
Reservations.belongsTo(Workers, { foreignKey: "WorkerID" });

Services.hasMany(Reservations, { foreignKey: "IDService" });
Reservations.belongsTo(Services, { foreignKey: "ServiceID" });

export { Users, Workers, Services, Reservations };