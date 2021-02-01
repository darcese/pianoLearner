import '../music-note/music-note.scss';

let possibleNoteLengths = {"1/32": String.fromCodePoint(0x1D162),
                           "1/16": String.fromCodePoint(0x1D161),
                           "1/8": String.fromCodePoint(0x1D160),
                           "1/4": String.fromCodePoint(0x1D15F),
                           "1/2": String.fromCodePoint(0x1D15D),
                           "1": String.fromCodePoint(0x1D15E),
                           "2": String.fromCodePoint(0x1D15D),
                           "4": String.fromCodePoint(0x1D15C), 
                           "8": String.fromCodePoint(0x1D15B)};

                            
function MusicNote(props) {
    return <div> {possibleNoteLengths[props.noteLength]}</div>;
  }

export default MusicNote;