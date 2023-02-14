import Popover from '@material-ui/core/Popover';
import React from 'react';
// import 'src/css/Popover.css';

function Popup(props) {
    return (
        <Popover
            className="Popover"
            id={props.id}
            anchorEl={props.anchor}
            open={props.anchor ? true : false}
            onClose={props.onClose}
            children={props.content}
            anchorOrigin={{ vertical: 'top', horizontal: 'right', }}
            transformOrigin={{ vertical: 'center', horizontal: 'left' }}
        />
    );
}



export default Popup;
