import React from 'react';
import CityNameContainer from './Style';

//Props expected on CityName component 
interface CityNameProps{
  city:string;
  country:string;
}

const CityName: React.FC<CityNameProps>= ({city, country}) => {
    
    return (
        <CityNameContainer>{`${city}, ${country}`}</CityNameContainer>
    )
}

export default CityName;