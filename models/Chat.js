
export default (db , DataTypes) => {
    const Chat = db.define("chat", {
        sender_id : {
            type: DataTypes.INTEGER
        },
        text : {
            type: DataTypes.STRING,
        },
        received_id : {
            type: DataTypes.INTEGER
        }
    },{
        freezeTableName: true
    });

    return Chat;
}