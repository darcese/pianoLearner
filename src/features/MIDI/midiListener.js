

import {
  receivedNoteOnMessage,
  receivedNoteOffMessage
} from '../notes/notesSlice.js';
import store from '../../app/store.js';


import { nanoid } from 'nanoid'

function loadAudioContext(){
  window.console.log("testing this script a ");
  var midiAccess=null;

  window.addEventListener('load', function() {
      // patch up prefixes
      window.AudioContext=window.AudioContext||window.webkitAudioContext;

      //context = new AudioContext();
      if (navigator.requestMIDIAccess)
        navigator.requestMIDIAccess({ sysex: true}).then( onMIDIInit, onMIDIReject );
      else
        alert("No MIDI support present in your browser.  You're gonna have a bad time.")


    } );

    
    function onMIDIInit(midi) {
      midiAccess = midi;
    
      var haveAtLeastOneDevice=false;
      var inputs=midiAccess.inputs.values();
      for ( var input = inputs.next(); input && !input.done; input = inputs.next()) {
        input.value.onmidimessage = MIDIMessageEventHandler;
    
        console.log("hello midi world")
        haveAtLeastOneDevice = true;
      }
      if (!haveAtLeastOneDevice)
        alert("No MIDI input devices present.  You're gonna have a bad time.");
    }

    function onMIDIReject(err) {
      alert("The MIDI system failed to start.  You're gonna have a bad time.");
    }

    // When we receive midi messages ie press and release keys
    function MIDIMessageEventHandler(event) {
      // log message data

      const newDate = new Date();
      const time = newDate.getTime();    
      let transformedMIDIMessage = {note:event.data[1], id:nanoid()};
      
      try {
        //note-off
        if(event.data[2] === 0){
          transformedMIDIMessage.timeEnded = time;
          store.dispatch(receivedNoteOffMessage(transformedMIDIMessage)); //serialize data first or else redux complains
        }
        //note-on
        else{
          transformedMIDIMessage.timeStarted = time;
          store.dispatch(receivedNoteOnMessage(transformedMIDIMessage));
        }

      } catch (error) {
        console.log(`Error in MIDIMessgeEventHandler : ${error}`)
      }
      
    
      // Mask off the lower nibble (MIDI channel, which we don't care about)
      // switch (event.data[0] & 0xf0) {
      //   case 0x90:
      //     if (event.data[2]!=0) {  // if velocity != 0, this is a note-on message
      //       noteOn(event.data[1]);
      //       return;
      //     }
      //     // if velocity == 0, fall thru: it's a note-off.  MIDI's weird, y'all.
      //   case 0x80:
      //     noteOff(event.data[1]);
      //     return;
      //}
    
      
    }

    
};





export default loadAudioContext;

