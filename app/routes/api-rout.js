let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import contact controller
const contactController = require('../controllers/contact.controller');
// Contact routes
router.route('/add')
    .post(contactController.create)
router.route('/all')
    .get(contactController.findAll)
router.route('/find/:_id')
    .get(contactController.findOne)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);


module.exports = router;
