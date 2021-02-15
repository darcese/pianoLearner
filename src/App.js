import React, {useEffect} from 'react';
import logo from './logo.svg';

//import { Counter } from './features/counter/Counter';

//import {NoteAdder} from './features/notes/noteAdder';

//import './App.css';
import store from '../src/app/store.js';
import {fetchInitialState} from './features/MIDI/midiSettingsSlice.js';


import GrandStaff from '../src/components/staff/staff.jsx';
import AllowOrDenySpeakersDialogue from '../src/components/allow-or-deny-dialogue/allow-or-deny-dialogue.jsx';
import ContainerForControlButtons from '../src/components/container-for-control-buttons/container-for-control-buttons.jsx';
import loadAudioContext from '../src/features/MIDI/midiListener';
import NoteAdder from '../src/features/notes/noteAdder.js';
import './App.css';



function App() {
  useEffect(() => {
    // Update the document title using the browser API
    loadAudioContext();
    store.dispatch(fetchInitialState());
  },[]);
  

  return (
    <div className="App">
     
        <header className="App-header"/>
        
        <GrandStaff></GrandStaff>
        <GrandStaff></GrandStaff>
        <AllowOrDenySpeakersDialogue />
     
    </div>
  );
}

export default App;

