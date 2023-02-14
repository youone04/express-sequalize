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
        // ,
        // mahasiswa2Id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //       model: Mahasiswa2, // 'Movies' would also work
        //       key: 'id'
        //     }
        //   },
        // matakuliahId: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //       model: Matakuliah, // 'Actors' would also work
        //       key: 'id'
        //     }
        // }
    },{
        freezeTableName: true
    });

    return MahasiswaMatkul;
}