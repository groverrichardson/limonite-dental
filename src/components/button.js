import React from 'react';

function Button(props) {
    let classes = `Button py-2 px-4 h-12 ${props.color} ${props.margin}`;
    return <button className={classes}>{props.buttonText}</button>;
}

export default Button;
