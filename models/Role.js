
export default (db , DataTypes) => {
    const Role = db.define("role", {
        role : {
            type: DataTypes.STRING
        }
    },{
        freezeTableName: true
    });

    return Role;
}