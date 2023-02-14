
export default (db , DataTypes) => {
    const Mahasiswa2 = db.define("mahasiswa2", {
        nama : {
            type: DataTypes.STRING
        },
        nim : {
            type: DataTypes.STRING,
            unique: true
        },
        prodi : {
            type: DataTypes.STRING
        }
    },{
        freezeTableName: true
    });

    return Mahasiswa2;
}