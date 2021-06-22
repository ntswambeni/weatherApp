import styled from 'styled-components';

// CSS for city name component
const MapContainer = styled.div`
    font-family: ${({theme})=>{
            return theme.fonts.primary;
        }};
    color:#fff;
    letter-spacing: 1px;
    font-size:1.4rem;
    font-weight:700;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 0.5rem;
    text-align: center;
    position: relative;
    z-index:1;
`;

export default MapContainer;