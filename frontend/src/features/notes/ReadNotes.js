import { useReadNotesQuery } from './NotesApiSlice'
import Note from './Note'

const NotesList = () => {

  const {
    data: notes,
    isLoading,
    isSuccess, 
    isError,
    error
  } = useReadNotesQuery()
  let content 

  if(isLoading) {
    content = <p>Loading</p>
  }

  if(isError) {
    content = <p>Error Occured </p>
  }

  if(isSuccess) {

    const { ids, entities } = notes
console.log("ids:",ids)
console.log("entities:",entities)
    const tableContent = ids?.length
        ? ids.map(noteId => <Note key={noteId} noteId={noteId} />)
        : null
content = (
<table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                 
                    <th>Action</th>
                    
                    
                </tr>
            </thead>
            <tbody>
                {tableContent}
            </tbody>
        </table>
)
}

  return content
}

export default NotesList