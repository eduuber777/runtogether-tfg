const express = require('express');
const router = express.Router();
const {
  registerToEvent,
  getMyRegistrations,
  cancelRegistration
} = require('../controllers/registration.controller');
const { protect } = require('../middleware/auth.middleware');

router.post('/', protect, registerToEvent);
router.get('/', protect, getMyRegistrations);
router.delete('/:id', protect, cancelRegistration);

module.exports = router;
