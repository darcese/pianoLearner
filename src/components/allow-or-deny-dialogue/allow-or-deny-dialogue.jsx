import CustomButton from '../custom-button/custom-button.jsx';
import './allow-or-deny-dialogue.scss';

import * as Tone from 'tone';


import{ useState } from 'react';

import store from '../../app/store.js';
import {
  updateSpeakerUseAllowed
} from '../../features/notes/notesSlice.js';

function AllowOrDenySpeakersDialogue(props){

    const [visible, setVisibility] = useState(true);
    const [speakerUseText, setSpeakerUseText] = useState("Allow Speaker Use?");

    const startTone = async () => {
      await Tone.start()
      console.log('audio is ready')
    };

    const setupAudio = () => {
                              store.dispatch(updateSpeakerUseAllowed(true));
                              setSpeakerUseText("Ok!")
                              setTimeout(() => setVisibility(false), 800);
                              startTone();
                            }

    const denyAudio =  () => {
                              store.dispatch(updateSpeakerUseAllowed(false));
                              setSpeakerUseText("Ok. No Sound.")
                              setTimeout(() => setVisibility(false), 900);
                              
                              }

    

    //synth.triggerAttackRelease("C4", "8n");

    return <div style={{visibility: visible ? "visible" : "hidden"}} className="container-flex column with-border pop-up">
            <div className="text-container">
              <h2 id="speaker-use-text"> {speakerUseText}</h2>
            </div>
            <div className="container-flex row">
              <CustomButton buttonText="Yes" className="custom-button yes green" handleClick={setupAudio} />
              <CustomButton buttonText="No"  className="custom-button no red"  handleClick={denyAudio} style={{backgroundColor: true ? "red" : "blue"}}/>         
            </div>
            </div>;
}

export default AllowOrDenySpeakersDialogue;