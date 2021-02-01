import React from 'react';
import './staff.scss';
import MusicNote from '../music-note/music-note.jsx';



class Staff extends React.Component {
    constructor(props) {
        super(props);
        this.state = {notes: [{name:"A4", noteLength:"4", id:34}, 
                              {name:"C4", noteLength:"1/4", id:35}]};
    }

    render(){
        return (<div className = 'staff'> {this.state.notes.map((note,index) => <MusicNote key={note.id} noteLength={note.noteLength}></MusicNote>)} </div>
        );
    }
};

export default Staff;

