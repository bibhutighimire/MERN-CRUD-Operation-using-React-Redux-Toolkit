import { store } from '../../app/store'
import { notesApiSlice } from '../notes/NotesApiSlice'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'

const Prefetch = () => {

    useEffect(() => {
        console.log('subscribing')
        const notes = store.dispatch(notesApiSlice.endpoints.readNotes.initiate())
        return () => {
            console.log('unsubscribing')
            notes.unsubscribe()
        }
    }, [])
  return <Outlet />
}

export default Prefetch