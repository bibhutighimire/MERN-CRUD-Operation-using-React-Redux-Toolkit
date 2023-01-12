import { useUpdateNoteMutation, useDeleteNoteMutation } from './NotesApiSlice'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { selectNoteById } from './NotesApiSlice'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const UpdateNoteForm = ({note}) => {
    const [updateNote,{
    isSuccess, isError
  }] = useUpdateNoteMutation()



 const navigate = useNavigate()
 const [title, setTitle] = useState(note.title)
  const [description, setDescription] = useState(note.description)

  useEffect(() => {
if(isSuccess) {
  console.log('use effect in update called')

  setTitle('')
      setDescription('')
      navigate('/notes/readnotes')
}
  },[isSuccess, navigate])


 
  const onTitleChange = (e) => setTitle(e.target.value) 
  const onDescriptionChange = (e) => setDescription(e.target.value)

  const handleUpdate = async(e) => {
    await updateNote({id:note.id, title, description})
  }



  return (
    <>
    <form onSubmit={e => e.preventDefault()}>
      Title: <input type='text' name='title' onChange={onTitleChange} value={title} />
      Description: <input type='text' name='description' onChange={onDescriptionChange} value={description} />
      <button onClick={handleUpdate}>Update</button>
    </form>
    </>
  )
}
export default UpdateNoteForm