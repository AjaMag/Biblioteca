// Books Model

module.exports = (sequelize, DataTypes) => {

    let Books = sequelize.define("books", {
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        year: DataTypes.SMALLINT,
        genre: DataTypes.STRING,
        summary: DataTypes.STRING,
        stockQty: DataTypes.SMALLINT,
        totalUse: DataTypes.INTEGER
    }, {
        // Model tableName will be the same as the model name instead of being pluralized
        freezeTableName: true
    })

    // Provide point for associations 
    Books.associate = models => {

        Books.hasMany(models.cartitems, {
            as: 'CartItems',
            onDelete: 'cascade'
        })
    }

    return Books

} // module.exports