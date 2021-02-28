import React from 'react';
import './staff.scss';
import MusicNote from '../music-note/music-note.jsx';

import store from '../../app/store.js'

import { useSelector, useDispatch } from 'react-redux';
import {
  selectNotesPlaying,
  notesCompleted,
  selectNotesCompleted
} from '../../features/notes/notesSlice.js';


function GrandStaff(props){

    const notesCompleted = useSelector(selectNotesCompleted);
    const notesPlaying = useSelector(selectNotesPlaying);
    
    return(

<div className = 'grand-staff'> {notesCompleted.map((note,index) => <MusicNote key={note.id} noteLength={4}></MusicNote>)} 

    <div className="staff-symbols">
        <svg className="stanza-brace" width="20" height="600" >
            <text x="0" y="128" transform="scale(.5,1.48)">&#119060;</text>
        </svg>
        <span className="trebble-clef-symbol"> 	&#119070;</span>
        <span className="bass-clef-symbol">	&#119074; </span>
       
        <div className="stanza-vertical start-line"></div> 
        <div className="stanza-vertical end-of-first-measure">hi</div> 
        <div className="stanza-vertical end-of-second-measure"></div> 
        <div className="stanza-vertical end-of-third-measure"></div> 
    </div>

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

export default GrandStaff;

