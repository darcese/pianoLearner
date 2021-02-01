import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectNotesPlaying,
} from './notesSlice';
//import styles from './Counter.module.css';

export function NoteAdder() {
  const notes = useSelector(selectNotesPlaying);
  const dispatch = useDispatch();
  const [fakeNote, setFakeNote] = useState('');

  return (
      <div>
        <button         
          aria-label="play new note"
        >      
        </button>
        <input  value={fakeNote}
          onChange={e => setFakeNote(e.target.value)}>

        </input>
      </div>
  );
}

export default NoteAdder;