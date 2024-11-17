// backend/routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const { createContact, getContacts, updateContact, deleteContact } = require('../controllers/contactController');

router.post('/contacts', createContact);
router.get('/contacts', getContacts);
router.put('/contacts/:id', updateContact);
router.delete('/contacts/:id', deleteContact);

module.exports = router;
