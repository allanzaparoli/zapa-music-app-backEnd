module.exports = (Sequelize, DataTypes) => {
    const UsersNotes = Sequelize.define('UsersNotes', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        noteTitle: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'note_title',
        },
        noteDescription: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'note_description',
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'user_id',
        },
    }, {
        timestamps: false,
        tableName: 'users_notes',
        underscored: true,
    });

    return UsersNotes;
};
