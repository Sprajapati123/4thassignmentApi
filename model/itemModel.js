var db = require('../dbconfig/dbconfig')

const Items = db.sequelize.define('Items', {
        // attributes

        id: {
            type: db.Sequelize.INTEGER,
            allowNull:false,
            autoIncrement: true,
            primaryKey:true

        },

        item_name: {
            type: db.Sequelize.STRING,
            allowNull: false
        },
        item_price: {
            type: db.Sequelize.STRING,
            allowNull: false
        },

        itemImage: {
            type: db.Sequelize.STRING,
            allowNull: false
        },
        item_description: {
            type: db.Sequelize.STRING,
            allowNull: false

        }

    },

    {
        // options
        freezeTableName:true,
        tableName:'items'
    }

);

Items.sync({force:false})
    .then(function(result){
        console.log(result);
    })
    .catch(function(err){
        console.log(err)
    })

module.exports= {
    Items
}