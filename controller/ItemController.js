var itemModel = require('../model/itemModel')

function addItems(req,res,next) {

    itemModel.Items.create({

        item_name : req.body.item_name,
        item_price : req.body.item_price,
        item_description: req.body.item_description,
        itemImage : req.body.itemImage

    })
        .then(function (result) {
            next()

        })
        .catch(function (err) {

            next({"status":500,"message":"DB error"});
        })

}



module.exports = {
    addItems
}
