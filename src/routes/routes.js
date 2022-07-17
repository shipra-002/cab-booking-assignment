var userModel = require('../models/userModel');
var cabModel = require('../models/cabModel')

var express = require('express');
var router = express.Router();


router.post('/user_detail', async function (req, res) {
    try {
        let requestData = { name, phone, address };
        const userData = await users.create(requestData);
       return res.status(201).json({ status: true, data: userData });
    } catch (error) {
       return res.status(500).json({ status: false, error: error.message });

    }
})

router.put("/:update_user", async (req, res) => {

    const foundData = await users.findById(_id);

    if (foundData) {

        const updateData = req.body;

        users.forEach(user => {

            if (user.id === parseInt(req.params._id)) {

                user.name = updateData.name ? updateData.name : user.name;

                user.phone = updateData.phone ? updateData.phone : user.phone;

                user.address = updateData.address ? updateData.address : user.address;

                res.json({ msg: "User updated", user });

            }

        });

    } else {
        res.json({
            message: "failed"
        });
    }


});

//-----------------------------------------------------------------------------------------------------------------------

module.exports = router;