import React from 'react';
import CustomButton from '../custom-button/custom-button.jsx';
//import TestMusicButton from '../test-music-button/test-music-button.jsx';

// import store from '../../app/store.js';
// import {
//     newNotePlaying,
//   } from '../../features/notes/notesSlice.js';
// ;

// const testRedux = store.dispatch(newNotePlaying({"goodbye":[1,2,3]}));

const ContainerForControlButtons = (props) => (
    <div className="container-for-control-buttons">
       <CustomButton buttonText="Clear Stanza" className="custom-button"/>
       <CustomButton buttonText="Test Other" className="custom-button" />
    </div>

);

export default ContainerForControlButtons; 