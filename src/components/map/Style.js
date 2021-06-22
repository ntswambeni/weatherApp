import styled from 'styled-components';

// CSS for Navbar component
const MapContainer = styled.div`
    font-family: ${({theme})=>{
            return theme.fonts.primary;
        }};
    width: 100%;
    height: 100vh;
    position: fixed;
    top:0;

   
`;

export default MapContainer;