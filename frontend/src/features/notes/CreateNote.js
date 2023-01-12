import { useEffect, useState } from 'react'
import { notesApiSlice } from './NotesApiSlice'
import { useNavigate } from 'react-router-dom'
import { useCreateNoteMutation } from './NotesApiSlice'

const CreateNote = () => {
  const [ createNote, {
    isSuccess
  } ] = useCreateNoteMutation()

  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    if(isSuccess) {
      setTitle('')
      setDescription('')
      navigate('/notes/readnotes')
    }
  },[navigate, isSuccess])


  const handleAdd = async(e) => {
    e.preventDefault()
    await createNote({title, description})
  }

  const onTitleChange = (e) => setTitle(e.target.value) 
  const onDescriptionChange = (e) => setDescription(e.target.value)


  return (
    <>
    <form onSubmit={handleAdd}>
      Title: <input type='text' name='title' onChange={onTitleChange}/>
      Description: <input type='text' name='description' onChange={onDescriptionChange} />
      <button type='submit'>Add</button>
    </form>
    </>
  )
}

export default CreateNote