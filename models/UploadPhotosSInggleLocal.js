
export default (db , DataTypes) => {
    const PhotosLokaSinggle = db.define("photos", {
        nama_gambar : {
            type: DataTypes.STRING
        }
    },{
        freezeTableName: true
    });

    return PhotosLokaSinggle;
}