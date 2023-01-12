import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { selectNoteById } from './NotesApiSlice'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import UpdateNoteForm from './UpdateNoteForm'

const UpdateNote = () => {
  const { id } = useParams()
  const note = useSelector(state => selectNoteById(state, id))
console.log('selected note:',note.title)
return (
  <>
  <UpdateNoteForm note = {note} />
  </>
)
}

export default UpdateNote