import styled from 'styled-components';

// CSS for MapContainer component
const MapContainer = styled.div`
    font-family: ${({theme})=>{
            return theme.fonts.primary;
        }};
    width: 100%;
    height: calc(100vh + 250px);
    position: fixed;
    top:0;

   
`;

export default MapContainer;