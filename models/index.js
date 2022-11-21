import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import UserModels from "./UserModels.js";
import Mahasiswa from "./Mahasiswa.js";
import Roles  from "./Role.js";
import Mahasiswa2 from "./Mahasiswa2.js";
import Matakuliah from "./Matakuliah.js";
import MahasiswaMatkul from "./MahasiswaMatkul.js";

const dbs = {};
dbs.Sequelize = Sequelize;
dbs.db = db;

dbs.user = UserModels(db , Sequelize);
dbs.mahasiswa  = Mahasiswa(db , Sequelize);
dbs.roles = Roles(db , Sequelize);
dbs.mahasiswa2 = Mahasiswa2(db , Sequelize);
dbs.matakuliah = Matakuliah(db , Sequelize);
dbs.mahasiswa_matkul = MahasiswaMatkul(db , Sequelize);

// relasi user dan role (many to one)
dbs.user.hasMany(dbs.roles , {as : "roles"});
dbs.roles.belongsTo(dbs.user, {
    foreignKey: 'userId',
    as: "user"
});

//relasi many to many mahasiswa2 dan matkul
dbs.matakuliah.belongsToMany(dbs.mahasiswa2, { through: dbs.mahasiswa_matkul });
dbs.mahasiswa2.belongsToMany(dbs.matakuliah, { through: dbs.mahasiswa_matkul });

export default dbs;
