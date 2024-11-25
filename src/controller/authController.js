const authController = (req, res, next) => {
    res.json({
        status: 'success',
        message: 'Sigin up route',
    });
};

module.exports  = authController;