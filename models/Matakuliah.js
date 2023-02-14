export default (db , DataTypes) => {
    const Matakuliah = db.define("matakuliah", {
        nama_matkul : {
            type: DataTypes.STRING
        },
        kode_matkul : {
            type: DataTypes.STRING,
            unique: true
        },
        pengampu : {
            type: DataTypes.STRING
        }
    },{
        freezeTableName: true
    });

    return Matakuliah;
}
