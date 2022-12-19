import Mahasiswa2 from "./Mahasiswa2.js";
import Matakuliah from "./Matakuliah.js";

export default (db , DataTypes) => {
    const MahasiswaMatkul = db.define("mahasiswaMatkul", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        selfGranted: DataTypes.BOOLEAN
    },{
        freezeTableName: true
    });

    return MahasiswaMatkul;
}