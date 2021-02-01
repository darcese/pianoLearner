import React from 'react';

import './custom-button.scss';


//<button class="google-sign-in custom-button">Sign In With Google</button>
const CustomButton = (props) => (
    <button className = {props.className} onClick={props.handleClick}>
        {props.buttonText}
    </button>
);

export default CustomButton