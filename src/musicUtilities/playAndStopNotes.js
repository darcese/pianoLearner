
import * as Tone from 'tone';



 export const salamanderPiano = new Tone.Sampler({
        urls: {
            "E0": "E0.mp3",
            "E1": "E1.mp3",
            "E2": "E2.mp3",
            "E3": "E3.mp3",
            "E4": "E4.mp3",
            "E5": "E5.mp3",
            "E6": "E6.mp3",
            "G#1": "Gs1.mp3",
            "G#2": "Gs2.mp3",
            "G#3": "Gs3.mp3",
            "G#4": "Gs4.mp3",
            "G#5": "Gs5.mp3",
            "G#6": "Gs6.mp3",
            "A#5": "As5.mp3",
            "A#6": "As6.mp3",
            "A5": "A5.mp3",
            "A6": "A6.mp3",
        },
        release: 1,
        baseUrl: "samples/piano/"//"https://tonejs.github.io/audio/salamander/",
    }).toDestination();


export const startPlayingNoteSound = (instrument, noteNumber, noteNumberToNoteMap ) => {
   
    const note = noteNumberToNoteMap[noteNumber];
    instrument.triggerAttack(note);
     
}

export const stopPlayingNoteSound = (instrument, noteNumber, noteNumberToNoteMap) => {
    
    const note = noteNumberToNoteMap[noteNumber];
    instrument.triggerRelease(note);
}
