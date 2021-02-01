import {createSlice} from '@reduxjs/toolkit';

import {salamanderPiano, startPlayingNoteSound, stopPlayingNoteSound} from '../../musicUtilities/playAndStopNotes.js';

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
      notesPlaying: [],
      notesCompleted: [],
      speakerUseAllowed : false
    },
    reducers: {
      addNoteToNotesPlaying: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.notesPlaying.push(action.payload);
      },
      removeNoteFromNotesPlaying: (state, action) => {
        state.notesPlaying = state.notesPlaying.filter(note => note.note !== action.payload.note);
      },
      addNoteToNotesCompleted: (state, action) =>{
        state.notesCompleted.push(action.payload);
      },
      updateSpeakerUseAllowed: (state, action) =>{
        state.speakerUseAllowed = action.payload
      }    
    }});
  
export const receivedNoteOnMessage = midiMessageObject => {
      return (dispatch, getState) => {
        const state = getState()
        if(state.notes.speakerUseAllowed){
          startPlayingNoteSound(salamanderPiano, midiMessageObject.note, 
                                state.midiSettings.allInstrumentsMidiKeyMap[state.midiSettings.currentInstrument])
        }
       dispatch(addNoteToNotesPlaying(midiMessageObject));
       
      }
    }

export const receivedNoteOffMessage = midiMessageObject =>{
    return (dispatch, getState) => {
      const state = getState()
      if(state.notes.speakerUseAllowed){
        stopPlayingNoteSound(salamanderPiano, midiMessageObject.note, 
                              state.midiSettings.allInstrumentsMidiKeyMap[state.midiSettings.currentInstrument])
      }
      let originalNote = state.notes.notesPlaying.find(note => note.note === midiMessageObject.note)
      let timeStarted = originalNote.messageTime;
      let timeEnded = midiMessageObject.messageTime;
      let noteCompleted = {note: midiMessageObject.note, timeStarted: timeStarted, timeEnded: timeEnded};
      dispatch(removeNoteFromNotesPlaying(midiMessageObject));
      dispatch(addNoteToNotesCompleted(noteCompleted)); 
      //const stateAfter = getState()      
    }
  }
  
  export const {addNoteToNotesPlaying, removeNoteFromNotesPlaying, addNoteToNotesCompleted, updateSpeakerUseAllowed } = notesSlice.actions;
  export const selectNotesPlaying = state => state.notes.notesPlaying;
  export const selectNotesCompleted = state => state.notes.notesCompleted;
  export const selectSpeakerUseAllowed = state => state.notes.speakerUseAllowed;

  
  export default notesSlice.reducer;