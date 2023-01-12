const express = require('express')
const router = express.Router()
const noteController = require('../controllers/noteController')

router.get('/', noteController.readNotes)
router.post('/', noteController.createNote)
router.patch('/', noteController.updateNote)
router.delete('/', noteController.deleteNote)

module.exports = router