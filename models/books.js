module.exports = (sequelize, DataTypes) => {
    var Books = sequelize.define("books", {
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        year: DataTypes.SMALLINT,
        genre: DataTypes.STRING,
        summary: DataTypes.STRING,
        inStock: DataTypes.SMALLINT
    })
    return Books
}