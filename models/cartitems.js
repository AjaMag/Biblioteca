// Cart-items Model
module.exports = (sequelize, DataTypes) => {

  let CartItems = sequelize.define('cartitems', {
    sectionId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER,
    qty: DataTypes.INTEGER
  }, {
    // Model tableName will be the same as the model name instead of being pluralized
    freezeTableName: true
  })

  // Provide point for associations 
  CartItems.associate = (models) => {

    CartItems.belongsTo(models.carts, {
      as: 'Carts',
      foreignKey: {
        allowNull: false
      }
    })
  }

  return CartItems
}