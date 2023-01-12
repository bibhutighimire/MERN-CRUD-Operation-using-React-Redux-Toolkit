import React from 'react'
import { useSelector } from 'react-redux'
import { selectNoteById, selectAllNotes } from './NotesApiSlice'
import { useNavigate } from 'react-router-dom'
import { useUpdateNoteMutation, useDeleteNoteMutation } from './NotesApiSlice'
import { useEffect, useState } from 'react'

const Note = ({noteId}) => {
    const navigate = useNavigate()
    const [deleteNote,{
      isSuccess: isDelSuccess, isError: isDelError
    }] = useDeleteNoteMutation()

    console.log("Note Id:", noteId)

    const note = useSelector(state => selectNoteById(state, noteId)) 
    console.log("Note:", note)
 useEffect(() => {
    if(isDelSuccess) {
    navigate('/notes/readnotes')
    }
      },[isDelSuccess, navigate])

    const handleEdit = () => {
        navigate(`/notes/${note.id}`)
    }

      const handleDelete = async(e) => {
    await deleteNote({id:note.id})
  }

  return (
    <>
    <tr>
        <td>{note.title}</td>
        <td>{note.description}</td>
        <td><button onClick={handleEdit}>Edit</button></td>
        <td>      <button onClick={handleDelete}>Delete</button>
</td>
    </tr>
      
    </>
  )
}

export default Note