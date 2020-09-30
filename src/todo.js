import { ListItem } from '@material-ui/core';
import { configure } from '@testing-library/react';
import React from 'react';
import {List,ListItemText} from '@material-ui/core';

function todo(props) {
    return (
        <List>
            <ListItem>
                <ListItemText primary="Todo" secondary={props.text}/>
            </ListItem>
        </List>
    )
}

export default todo;
