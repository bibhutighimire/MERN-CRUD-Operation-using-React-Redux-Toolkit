const asyncHandler = require('express-async-handler')
const { Await } = require('react-router-dom')
const Note = require('../models/noteModel')

/* const readNotes = asyncHandler(async(req, res) => {
    const notes = await Note.find().lean()
    if(!notes) {
        return res.status(400).json({message:"No Notes"})
    }
    res.status(200).json(notes)
})

const createNote = asyncHandler (async (req, res) => {
    const { title, description } = req.body
    if(!title || !description) {
        return res.status(400).json({message:'all field required'})
    }
    const note = await Note.create({title, description})
    res.status(200).json(note)
})

const updateNote = asyncHandler (async (req, res) => {
    const { id, title, description } = req.body

    if(!id || !title || !description) {
        return res.status(400).json({message:"all field required"})
    }
    const note = await Note.findById(id).exec()
    if(!note) {
        return res.status(400).json({message:"No ID found"})
    }
    note.title = title
    note.description = description

    const updatedNote = await note.save()
    if(!updatedNote) {
        return res.status(400).json({message:"Sorry we could not save"})
    }
    res.status(200).json({message:"updated"})

})

const deleteNote = asyncHandler (async (req, res) => {
    const { id } = req.body
    const note = await Note.findById(id).exec()
    if(!note) {
        return res.status(400).json({message:'no note found with that ID'})
    }
    const toBeDeleted = await note.deleteOne()
    res.status(200).json(toBeDeleted)
}) */

 const readNotes = asyncHandler(async(req,res) => {
    const notes = await Note.find().lean()
    if(!notes) {
        return res.status(400).json({message:"No Data"})
    }
    res.status(200).json(notes)
 })

 const createNote = asyncHandler(async(req, res) => {
    const {title, description} = req.body
    if(!title || !description) {
        return res.status(400).json({message:"All Fields Required"})
    }
     const noteObject = {title, description}
    const note = await Note.create(noteObject)
    if(!note) {
        return res.status(400).json({message:"Note could not be saved"})
    }
    res.status(200).json(note)
 })

 const updateNote = asyncHandler(async(req, res) => {
    const { id, title, description } = req.body
    if(!id || !title || !description) {
        return res.status(400).json({message:"All Fields Required"})
    }
    const note = await Note.findById(id).exec()
    if(!note) {
        return res.status(400).json({message:"No such ID found"})
    }
    note.title = title
    note.description = description

    const updatedNote = await note.save()
    if(!updatedNote) {
        return res.status(400).json({message:"Could not update"})
    }
    res.status(200).json(updatedNote)
 })

 const deleteNote = asyncHandler(async(req, res) => {
    const {id} = req.body
    if(!id) {
        return res.status(400).json({message:"ID field required"})
    }
    const note = await Note.findById(id).exec()
    if(!note) {
        return res.status(400).json({message:"No ID found"})
    }
    const deletedNote = await note.deleteOne()
    if(!deletedNote) {
        return res.status(400).json({message:"cOULD NOT BE DELETED"})
    }
    res.status(200).json(deletedNote)
 })

module.exports = {
    readNotes, createNote, updateNote, deleteNote
}