module.exports = (sequelize, DataTypes) => {
    var Sections = sequelize.define("sections", {
        location: DataTypes.STRING,
        description: DataTypes.STRING
    })
    Sections.associate = models => {
        Sections.hasMany(models.books, {
            onDelete: 'cascade'
        })
    }
    return Sections
}



// module.exports = (sequelize, DataTypes) => {
//     var Todos = sequelize.define("toDos", {
//         name: DataTypes.STRING,
//         isDone: DataTypes.BOOLEAN
//     })
//     return Todos
// }