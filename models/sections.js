// Sections Model

module.exports = (sequelize, DataTypes) => {

    var Sections = sequelize.define("sections", {
        location: DataTypes.STRING,
        description: DataTypes.STRING
    })

    // Provide point for associations 
    Sections.associate = models => {
        Sections.hasMany(models.books, {
            as: 'Books',
            onDelete: 'cascade'
        })
    }

    return Sections

} // module.exports
