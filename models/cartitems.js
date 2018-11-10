// Cart-items Model
module.exports = (sequelize, DataTypes) => {

  let CartItems = sequelize.define('cartitems', {
    qty: DataTypes.INTEGER
  }, {
    // Model tableName will be the same as the model name instead of being pluralized
    freezeTableName: true
  })

  // Provide point for associations 
  CartItems.associate = (models) => {
    
  }

  return CartItems
}