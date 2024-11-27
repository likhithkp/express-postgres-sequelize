const user = require("../../db/models/user");

const authController = async (req, res, next) => {
    const body = req.body;

    if (!['1', '2'].includes(body.userType)) {
        return res.status(400).json({
            stauts: 'fail',
            message: 'Unauthorized'
        });
    };

    const newUser = await user.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: body.password
    });

    if (!newUser) {
        return res.status(400).json({
            stauts: 'fail',
            message: 'Unauthorized'
        })
    };

    return res.status(201).json({
        status: 'Success',
        message: 'User created'
    })
};

module.exports = authController;