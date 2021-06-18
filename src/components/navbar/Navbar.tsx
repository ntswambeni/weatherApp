import React, {useState} from 'react';
import {Switch} from '@material-ui/core';
import NavbarWraper from './Style';
const Navbar: React.FC = () => {
    
    // State management for switch controled component
    const [state, setState] = React.useState({
        unit: false
    })

    // Event handler for changes in switch component  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <NavbarWraper>
            <h1>gt-ur-weda</h1>
            <div>
                <label>&#176;C</label>
                <Switch
                        checked={state.unit}
                        name="unit"
                        onChange={handleChange}
                        color="default"
                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                    />
                <label>&#176;F</label>  
            </div>
        </NavbarWraper>
    )
}

export default Navbar;