import React from 'react';
import './staff.scss';
import MusicNote from '../music-note/music-note.jsx';



class GrandStaff extends React.Component {
    constructor(props) {
        super(props);
        this.state = {notes: [{name:"A4", noteLength:"4", id:34}, 
                              {name:"C4", noteLength:"1/4", id:35}]};
    }

    render(){
        return (<div className = 'grand-staff'> {this.state.notes.map((note,index) => <MusicNote key={note.id} noteLength={note.noteLength}></MusicNote>)} 
            
            <div className="treble-clef-staff">
                <hr className="stanza-line trebble fake-1"/>
                <hr className="stanza-line trebble fake-2"/>
                <hr className="stanza-line trebble fake-3"/>
                <hr className="stanza-line trebble clef-f"/>
                <hr className="stanza-line trebble clef-d"/>
                <hr className="stanza-line trebble clef-b"/>
                <hr className="stanza-line trebble clef-g"/>
                <hr className="stanza-line trebble clef-e"/>
            </div>
            <div className="bass-clef-staff">
                <hr className="stanza-line bass clef-a"/>
                <hr className="stanza-line bass clef-f"/>
                <hr className="stanza-line bass clef-d"/>
                <hr className="stanza-line bass clef-b"/>
                <hr className="stanza-line bass clef-g"/>
                <hr className="stanza-line bass fake-1"/>
                <hr className="stanza-line bass fake-2"/>
                <hr className="stanza-line bass fake-3"/>              
            </div>
        </div>
        );
    }
};

export default GrandStaff;

