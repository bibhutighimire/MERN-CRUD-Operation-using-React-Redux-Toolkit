import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from '../../app/api/apiSlice'

const notesAdapter = createEntityAdapter({})

const initialState = notesAdapter.getInitialState()
console.log('Initial State',initialState)

export const notesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        readNotes: builder.query({
            query: () => 'api/notes',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            transformResponse: responseData => {
                const loadedNotes = responseData.map(note => {
                    note.id = note._id
                    return note
                })
                return notesAdapter.setAll(initialState, loadedNotes)
            },
            providesTags: (result, error, arg) => {
                if(result?.ids) {
                    return [
                        {type: 'Note', id:'LIST'},
                        ...result.ids.map(id => ({type: 'Note', id}))
                ]}
                else return [
                    {type:'Note', id: 'LIST'}
                ]
                
            }
          }),

          createNote: builder.mutation({
            query: initialNoteData => ({
                url:'/api/notes',
                method:'POST',
                body: {
                    ...initialNoteData
                }
            }),
            invalidatesTags: [
                { type: 'Note', id: 'LIST' }
            ]            
          }),

          updateNote: builder.mutation({
            query: initialNoteData => ({
                // url: '/api/notes/${id}',
                url: '/api/notes',
                method: 'PATCH',
                body: {
                    ...initialNoteData,
                }
            }),
             invalidatesTags: (result, error, arg) => [
                { type: 'Note', id: arg.id }
            ]
        }),

        deleteNote: builder.mutation({
            query: ({ id }) => ({
                url: '/api/notes',
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Note', id: arg.id }
            ]
        }),
        })
      })
          
export const { useReadNotesQuery, useCreateNoteMutation, useUpdateNoteMutation, useDeleteNoteMutation } = notesApiSlice
export const selectNotesResult = notesApiSlice.endpoints.readNotes.select()
// returns the query result object
const selectNotesData = createSelector(
    selectNotesResult,
    notesResult => notesResult.data // normalized state object with ids and entities
)
// getselectors creates these selectors and we rename them with aliases using destructuring

export const {
    selectAll: selectAllNotes,
    selectById: selectNoteById,
    selectIds: selectUserIds
} = notesAdapter.getSelectors(state => selectNotesData(state) ?? initialState)
