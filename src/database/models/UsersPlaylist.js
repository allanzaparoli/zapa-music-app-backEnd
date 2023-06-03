module.exports = (Sequelize, DataTypes) => {
    const UsersPlaylist = Sequelize.define('UsersPlaylist', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        videoId: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'video_id',
        },
        songName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'song_name',
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'user_id',
        },
    }, {
        timestamps: false,
        tableName: 'users_playlist',
        underscored: true,
    });

    return UsersPlaylist;
};
