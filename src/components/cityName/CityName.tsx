import React from 'react';
import CityNameContainer from './Style';

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