import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import notesReducer from '../features/notes/notesSlice';
import midiSettingsReducer from '../features/MIDI/midiSettingsSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    notes: notesReducer,
    midiSettings: midiSettingsReducer
  },
});
