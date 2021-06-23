import React from 'react';
import {Switch} from '@material-ui/core';
import NavbarContainer from './Style';

//Props expected on Navbar component 
interface NavbarProps{
    unit:{name: string, IS: string};
    city: string;
    changeUnit: any;
}

const Navbar: React.FC<NavbarProps> = ({unit, city, changeUnit}) => {
    
    // State management for switch controled component
    const [state, setState] = React.useState({
        unit: false
    })

    // Event handler for changes in switch component  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        setState({ ...state, [event.target.name]: event.target.checked });
        // imperial stands for Fahrenheit in openweatherMap IS is the simbol to be used in the app
        if(state.unit === false){
            changeUnit({name:"imperial", IS:"F"}, city)
        
        // metric stands for Celsius in openweatherMap
        }else{
            changeUnit({name:"metric", IS:"C"}, city)
        }
    };

    return (
        <NavbarContainer>
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
        </NavbarContainer>
    )
}

export default Navbar;